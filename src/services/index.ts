import { ApiResponse } from '../types';

export const fetchApiResponse = async (): Promise<ApiResponse[]> => {
  const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse[] = await response.json();
  return data;
};
