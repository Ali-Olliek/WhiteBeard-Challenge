<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignId("article_id");
            $table->boolean("is_viewed")->nullable();
            $table->boolean("is_liked")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles_metrics');
    }
};
