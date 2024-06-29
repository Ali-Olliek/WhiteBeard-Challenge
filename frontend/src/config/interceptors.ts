import { AxiosError, AxiosResponse } from 'axios';

export function handleSuccess<T>(success: AxiosResponse<T>): AxiosResponse<T> {
  return success;
}

export function handleError(error: AxiosError) {
  switch (error.code) {
    case '400':
      console.log(error);
      break;

    default:
      break;
  }
}
