/* eslint-disable import/prefer-default-export */
import ErrorUnauthorized from './errorUnauthorized';

const createFetchFor =
  (init: RequestInit | undefined) =>
  async (url: RequestInfo | URL, params = {}) => {
    const { headers: HeaderParams = {}, ...rest } : any = params;
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        ...HeaderParams,
      },

      ...init,
      ...rest,
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new ErrorUnauthorized('Request Unauthorized. Please try again.');
      }
      const error = await response.json();
      //  Build an API error object
      const apiError: any = new Error(error.message || 'Request failed. Please try again.');
      apiError.name = 'ApiError';
      apiError.code = error.errorCode;
      apiError.type = error.errorType;
      apiError.status = response.status;
      apiError.ok = false;
      throw apiError;
    }
    return response.json();
  };

export const get = createFetchFor({ method: 'GET' });
export const post = createFetchFor({ method: 'POST' });
export const put = createFetchFor({ method: 'PUT' });
export const del = createFetchFor({ method: 'DELETE' });
