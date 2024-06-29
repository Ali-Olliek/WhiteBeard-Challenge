<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleMetric extends Model
{
    use HasFactory;

    public static $like = "like";
    public static $view = "view";

    #region Config
    protected $fillable = [
        "article_id",
        "type"
    ];
    #endregion

    #region Eloquent Relations
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
    #endregion
}
