import axios, { AxiosInstance, AxiosResponse } from 'axios';

// TODO BaseURL is not working

class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    this.instance = axios.create({
      baseURL,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (error: unknown) => Promise.reject(error);
}

export default HttpClient;
