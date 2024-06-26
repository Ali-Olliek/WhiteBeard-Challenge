<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleMetric extends Model
{
    use HasFactory;

    #region Config
    protected $fillable = [
        "article_id",
        "is_viewed",
        "is_liked"
    ];
    #endregion

    #region Eloquent Relations
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
    #endregion
}
