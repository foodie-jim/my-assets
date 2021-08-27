import { AxiosRequestConfig } from 'axios';
import HttpClient from './http-client';

class ExchangeRatesService extends HttpClient {
  private static instance: ExchangeRatesService;

  public constructor() {
    super();

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = 'Bearer ...';

    return config;
  };

  public static get Instance() {
    // eslint-disable-next-line no-return-assign
    return this.instance || (this.instance = new this());
  }

  public getExchangeRate = () => this.instance.get('/exchange-rates');
}

export default ExchangeRatesService.Instance;
