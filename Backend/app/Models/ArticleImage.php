<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleImage extends Model
{
    use HasFactory;

    #region Config
    protected $fillable = [
        "article_id",
        "image_url",
        "image_description"
    ];
    #endregion

    #region Relations
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
    #endregion
}
