<?php

namespace App\Enums;

enum ArticleCategories: string
{
    case Sports = "Sports";
    case Entertainment = "Entertainment";
    case Politics = "Politics";
    case Health = "Health";
    case Tech = "Tech";

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
