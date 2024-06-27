<?php

namespace App\Http\Controllers\Public;

use Exception;
use App\Services\MetricsService;
use App\Controllers\BaseController;

class ArticleMetricsController extends BaseController
{
    private $metricsService;

    public function __construct(MetricsService $metricsService)
    {
        $this->metricsService = $metricsService;
    }

    public function like(int $articleId)
    {
        try {
            $this->metricsService->like($articleId);

            return $this->SuccessResponse("OK", 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to like article", 400, $exception);
        }
    }

    public function view(int $articleId)
    {
        try {
            $this->metricsService->view($articleId);

            return $this->SuccessResponse("OK", 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to register view", 400, $exception);
        }
    }
}
