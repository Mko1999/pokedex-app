import { AxiosResponse, AxiosRequestConfig } from "axios";

export type AxiosGetterType = {
  get<T = never, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): Promise<R>;
};
