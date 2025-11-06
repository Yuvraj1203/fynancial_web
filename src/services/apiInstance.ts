import axios from "axios";
import Cookies from "js-cookie";
import { BaseModel } from "./models";

export enum HttpMethodApi {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
}

export type RequestOptions = {
  endpoint: string;
  method: HttpMethodApi;
  params?: Record<string, any>;
  data?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  withoutBaseModel?: boolean;
};

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5 * 60 * 1000,
});

export async function makeRequest<T>({
  endpoint,
  method,
  data,
  params,
  headers = {},
  withoutBaseModel = false,
}: RequestOptions): Promise<BaseModel<T>> {
  try {
    const isForm = data instanceof FormData;

    const token = Cookies.get("accessTokenFyn");

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axiosClient.request({
      url: endpoint,
      method,
      headers: {
        ...headers,
        ...(isForm ? {} : { "Content-Type": "application/json" }),
        Accept: "application/json",
      },

      ...(method === HttpMethodApi.Get || method === HttpMethodApi.Delete
        ? { params: data }
        : params
        ? { params, data }
        : { data }),
    });

    if (withoutBaseModel) {
      return response.data;
    }

    const result = response.data as BaseModel<T>;

    if (!result.success) {
      throw new Error(result.error?.message || "Something went wrong");
    }

    return result;
  } catch (error: any) {
    // if (error.status == 401) {
    //   router.push("/authentication");
    // }

    throw new Error(error?.response?.data?.message || error.message);
  }
}
