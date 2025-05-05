import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';
import { StorageAdapter } from './storage-adapter';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const token = await StorageAdapter.getItem('token');

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      }
    );
  }

  async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw {
          error: error.message,
          status: error.response?.status,
          data: error.response?.data,
        };
      }
      throw { error: `Error fetching data on ${url}: ${error}` };
    }
  }

  async post<T>(url: string, data?: any, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, options);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw {
          error: error.message,
          status: error.response?.status,
          data: error.response?.data,
        };
      }

      throw { error: `Error posting data to ${url}: ${error}` };
    }
  }

  async patch<T>(url: string, data?: any, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(url, data, options);
      return response.data;
    } catch (error: any) {
      if (error?.isAxiosError) {
        console.log({
          error: error.response?.data.message,
          status: error.response?.data.statusCode,
          data: error.response?.data,
        });
      }
      throw { error: `Error updating resource at ${url}: ${error}` };
    }
  }

  async delete<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url, options);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw {
          error: error.message,
          status: error.response?.status,
          data: error.response?.data,
        };
      }
      throw { error: `Error deleting resource at ${url}: ${error}` };
    }
  }
}
