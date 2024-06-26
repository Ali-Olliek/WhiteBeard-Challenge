<?php

namespace App\Http\Controllers\Public;

use App\Http\Requests\{
    UpdateArticlesRequest,
    CreateArticlesRequest
};

use Exception;
use App\Interfaces\ICRUD;
use App\Controllers\BaseController;

class ArticlesController extends BaseController
{
    private $articlesService;

    public function __construct(ICRUD $articlesService)
    {
        $this->articlesService = $articlesService;
    }

    public function create(CreateArticlesRequest $createArticlesRequest)
    {
        try {
            $newArticle = $this->articlesService->create($createArticlesRequest->validated());

            return $this->SuccessResponse($newArticle, 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to create article", 400, $exception);
        }
    }

    public function update(UpdateArticlesRequest $updateArticlesRequest, int $articleId)
    {
        try {
            $updatedArticle = $this->articlesService->update($updateArticlesRequest->validated(), $articleId);

            return $this->SuccessResponse($updatedArticle, 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to update article", 400, $exception);
        }
    }

    public function index()
    {
        try {
            $articles = $this->articlesService->index();

            return $this->SuccessResponse($articles, 200);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get articles", 400, $exception);
        }
    }

    public function show(int $articleId)
    {
        try {
            $article = $this->articlesService->show($articleId);

            return $this->SuccessResponse($article, 200);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get article", 400, $exception);
        }
    }

    public function delete(int $articleId)
    {
        try {
            $this->articlesService->delete($articleId);

            return $this->SuccessResponse("OK", 200);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to delete article", 400, $exception);
        }
    }
}
