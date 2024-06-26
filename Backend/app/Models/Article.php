<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    #region Config
    protected $fillable = [
        "title",
        "content",
        "author_id",
        "category_id",
        "publish_date"
    ];

    public $with = ["images", "metrics", "author"];
    #endregion

    #region Eloquent Relations
    public function images()
    {
        return $this->hasMany(ArticleImage::class);
    }

    public function metrics()
    {
        return $this->hasMany(ArticleMetric::class);
    }

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function category()
    {
        return $this->belongsTo(ArticleCategory::class);
    }
    #endregion
}
