<?php

namespace Database\Seeders;

use App\Models\ArticleCategory;
use Illuminate\Database\Seeder;
use App\Enums\ArticleCategories;

class ArticleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ArticleCategories::values();

        foreach ($categories as $category) {
            ArticleCategory::create(
                [
                    "name" => $category,
                    "icon" => "https://picsum.photos/100"
                ]
            );
        }
    }
}
