<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
{
    use HasFactory;

    #region Config
    protected $fillable = [
        "name",
        "icon"
    ];
    #endregion

    #region Relations
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
    #endregion
}
