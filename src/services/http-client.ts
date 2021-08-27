import axios, { AxiosInstance, AxiosResponse } from 'axios';

// TODO BaseURL is not working

class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    const baseURL = process.env.SERVICE_URL;

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
