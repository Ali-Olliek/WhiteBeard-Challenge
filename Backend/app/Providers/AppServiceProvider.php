<?php

namespace App\Providers;

use App\Http\Controllers\Public\ArticlesController;
use App\Interfaces\ICRUD;
use App\Services\ArticlesService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->when(ArticlesController::class)
            ->needs(ICRUD::class)
            ->give(ArticlesService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
