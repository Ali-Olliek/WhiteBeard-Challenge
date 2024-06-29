<?php

namespace App\Services;

use Exception;
use App\Models\Article;
use App\Interfaces\ICRUD;
use App\Models\ArticleImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ArticlesService implements ICRUD
{

    public function index(?array $validatedData = null, $params = null)
    {
        $articlesQuery = Article::query();

        // return without filtering
        if (!$validatedData) return $articlesQuery->get();

        // Apply Sort
        if (isset($validatedData["sort"])) {
            $articlesQuery->orderBy($validatedData["sort"]["by"] ?? "publish_date", $validatedData["sort"]["direction"] ?? "desc");
        }

        // Apply Filters
        if (isset($validatedData["category_id"])) {
            $articlesQuery->where("category_id", $validatedData["category_id"]);
        }

        if (isset($validatedData["author_id"])) {
            $articlesQuery->where("author_id", $validatedData["author_id"]);
        }

        if (isset($validatedData["from"])) {
            $articlesQuery->where("published_date", "<", $validatedData["from"]);
        }

        if (isset($validatedData["to"])) {
            $articlesQuery->where("to", ">", $validatedData["to"]);
        }

        return $articlesQuery->get();
    }

    public function show(int $id, $params = null)
    {
        $article = Article::find($id);

        return $article;
    }

    public function create(array $validatedData, $params = null)
    {
        try {
            DB::beginTransaction();

            $newArticle = Article::create($validatedData);

            $imagePath = Storage::putFile(date("Y-m-d H:i:s"), $validatedData["image"]["data"]);

            ArticleImage::create([
                "article_id" => $newArticle->id,
                "image_url" => $imagePath,
                "image_description" => $validatedData["image"]["description"]
            ]);

            DB::commit();

            return $newArticle->load([
                "images"
            ]);
        } catch (Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function update(array $validatedData, int $id, $params = null)
    {
        try {
            DB::beginTransaction();
            $updatedArticle = Article::find($id);

            $updatedArticle->update($validatedData);

            if (isset($validatedData["image"]["data"])) {
                $updatedArticle->image($validatedData["image"]);
            }

            DB::commit();
            return $updatedArticle;
        } catch (Exception $exception) {
            DB::rollBack();
            throw $exception;
        }

    }

    public function delete(int $id, $params = null)
    {
        try {
            DB::beginTransaction();
            $deletedArticle = Article::find($id)->delete();

            $deletedArticle->image()->delete();

            DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
    }
}
