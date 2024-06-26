<?php

namespace App\Interfaces;

use Illuminate\Database\Eloquent\{
    Model,
    Collection
};

use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Interface for CRUD operations
 */
interface ICRUD
{
    /**
     * @return Collection|LengthAwarePaginator
     */
    public function index(array $validatedData = null, $params = null);

    /**
     * @return Collection|Model
     */
    public function show(int $id, $params = null);

    /**
     * @return Model
     */
    public function create(array $validatedData, $params = null);

    /**
     * @return Model
     */
    public function update(array $validatedData, int $id, $params = null);

    /**
     * @return boolean
     */
    public function delete(int $id, $params = null);
}
