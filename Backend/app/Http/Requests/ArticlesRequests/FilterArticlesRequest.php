<?php

namespace App\Http\Requests\ArticlesRequests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class FilterArticlesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "category_id" => [
                "sometimes",
                "integer"
            ],
            "author_id" => [
                "sometimes",
                "integer"
            ],
            "from" => [
                "sometimes",
                "lt:to",
                "date"
            ],
            "to" => [
                "sometimes",
                "gt:from",
                "date"
            ],
            "sort_by" => [
                "string",
            ],
            "sort_direction" => [
                Rule::in(["desc", "asc"])
            ],
            "paginate" => [
                Rule::in(["true", "false"])
            ],
            "page" => [
                "required_if:paginate, true",
                "integer"
            ],
            "per_page" => [
                "integer"
            ],
            "featured" => [
                Rule::in(["true", "false"])
            ]
        ];
    }

    /**
     * Get the error messagges if validation fails
     *
     * @return \Response
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'messages' => $validator->errors()->all()
            ], 400)
        );
    }
}
