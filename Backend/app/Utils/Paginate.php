<?php

namespace App\Utils;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class Paginate
{
    public static function apply(
        Builder $query,
        $paginationRequest
    ): LengthAwarePaginator {
        return $query->paginate(
            $paginationRequest["per_page"] ?? 5,
            $paginationRequest["columns"] ?? ["*"],
            $paginationRequest["pageName"] ?? "page",
            $paginationRequest["page"] ?? 1
        );
    }
}
