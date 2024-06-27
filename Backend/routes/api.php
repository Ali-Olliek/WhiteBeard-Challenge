<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Public\ArticlesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

#region Articles
Route::get("articles", [ArticlesController::class, "index"]);
Route::get("articles/{articleId}", [ArticlesController::class, "show"]);
Route::post("articles", [ArticlesController::class, "create"]);
Route::put("articles/{articleId}", [ArticlesController::class, "update"]);
Route::delete("articles/{articleId}", [ArticlesController::class, "delete"]);
#endregion

#region Article Metrics
Route::post("articles/{articleId}/like");
Route::post("articles/{articleId}/view");
#endregion