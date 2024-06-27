<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\ArticleImage;
use App\Models\Author;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{

    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraphs(3, true),
            'author_id' => Author::all()->random()->id,
            'publish_date' => $this->faker->dateTime(),
            'category_id' => ArticleCategory::all()->random()->id
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Article $article) {
            ArticleImage::factory()->count(1)->create(["article_id" => $article->id]);
        });
    }
}
