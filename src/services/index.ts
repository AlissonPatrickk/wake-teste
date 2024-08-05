import { ApiResponse } from '../types';
/**
 * Fetches API response from the provided endpoint.
 *
 * This function sends a GET request to the specified endpoint and returns a promise
 * that resolves to an array of ApiResponse objects. If the network request fails
 * or the response is not ok, it throws an error.
 *
 * @returns {Promise<ApiResponse[]>} A promise that resolves to an array of ApiResponse objects.
 * @throws {Error} If the network response is not ok.
 */
export const fetchApiResponse = async (): Promise<ApiResponse[]> => {
  const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse[] = await response.json();
  return data;
};
