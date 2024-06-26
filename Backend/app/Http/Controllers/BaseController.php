<?php

namespace App\Controllers;

use Exception;
use Illuminate\Routing\Controller;

class BaseController extends Controller
{

    /**
     * Return Success Response
     * 
     * @param mixed $data
     * @param integer $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function SuccessResponse($data = null, $statusCode = 200, $message = null)
    {
        $response = ["error" => false];

        if ($data != null) $response += ["data" => $data];
        if ($message != null) $response += ["message" => $message];

        return RESPONSE()->JSON($response, $statusCode);
    }

    /**
     * Return Failure Response
     * 
     * @param mixed $message
     * @param integer $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function FailureResponse($message, $statusCode = 404, Exception $exception = null)
    {
        $response = ["error" => true];

        if ($message != null) $response += ["message" => $message];

        if ($exception != null) {
            // Except QueryExceptions from being sent to the client
            if (config("app.debug") == true) {
                $response += [
                    "exception" => $exception->getMessage(),
                    "line" => $exception->getLine(),
                    "code" => $exception->getCode(),
                    "file" => $exception->getFile(),
                    "trace" => $exception->getTrace()
                ];
            }

            if (config("app.debug") == false) {
                $response += ["exception" => $exception->getMessage()];
            }
        }

        return RESPONSE()->JSON($response, $statusCode);
    }
}
