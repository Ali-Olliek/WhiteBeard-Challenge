<?php

namespace App\Services;

use App\Models\ArticleMetric;

class MetricsService
{
    public function view(int $articleId)
    {
        ArticleMetric::create(
            [
                "article_id" => $articleId,
                "type" => ArticleMetric::$view
            ]
        );
    }

    public function like(int $articleId)
    {
        ArticleMetric::create(
            [
                "article_id" => $articleId,
                "type" => ArticleMetric::$like
            ]
        );
    }
}
