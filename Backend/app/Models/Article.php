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
        "is_featured",
        "category_id",
        "publish_date",
    ];

    protected $casts = [
        "is_featured" => "boolean"
    ];

    public $with = ["image", "metrics", "author"];

    protected $appends = ["likes_count", "views_count"];
    #endregion

    public function getLikesCountAttribute()
    {
        return $this->metrics()->where("type", "like")->count();
    }

    public function getViewsCountAttribute()
    {
        return $this->metrics()->where("type", "view")->count();
    }
    #region Eloquent Relations
    public function image()
    {
        return $this->hasOne(ArticleImage::class);
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
