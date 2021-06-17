import axios, { AxiosResponse } from 'axios';

type MethodType = 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'GET';

const api = <ApiRequest = any, ApiResponse = any>(
  method: MethodType,
  url: string,
  data?: ApiRequest,
  guestMode: boolean = false,
) => {
  let headers = {};

  if (!guestMode) {
    headers = {
      // Authorization: `Bearer ${TokenBroker.get()}`,
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  switch (method) {
    case 'GET':
      return axios.get<ApiRequest, AxiosResponse<ApiResponse>>(url, { headers });
    case 'POST':
      return axios.post<ApiRequest, AxiosResponse<ApiResponse>>(url, data, { headers });
    case 'PATCH':
      return axios.patch<ApiRequest, AxiosResponse<ApiResponse>>(url, data, { headers });
    case 'PUT':
      return axios.put<ApiRequest, AxiosResponse<ApiResponse>>(url, data, { headers });
    case 'DELETE':
      return axios.delete<ApiRequest, AxiosResponse<ApiResponse>>(url, { data, headers });
    default:
      return axios.get<ApiRequest, AxiosResponse<ApiResponse>>(url, { headers });
  }
};

export type ApiResponse<T> = {
  status: number;
  message: string;
  validation: object;
  data: T;
};

export type Paginated<T> = {
  limit: number;
  list: T[];
  page: number;
  total: number;
  total_page: number;
};

export default api;
