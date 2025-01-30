import axios, { Axios } from "axios";
import { SDefaultConfig } from "../typing";

interface Props {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: Object;
    requestConfig?: SDefaultConfig;

}

export class RequestHandler {
    private apiClient: Axios;
    constructor(apiClient: Axios) {
        this.apiClient = apiClient;
    }

    async placeRequest({ method, url, data, requestConfig }: Props) {
        try {
            const { data: returnData } = await this.apiClient.request({
                method: method,
                url: url,
                data,
                ...(requestConfig?.contentType ? {
                    headers: {
                        "Content-Type": requestConfig.contentType,
                    }
                } : {})
            });
            if (returnData?.[0]?.errors) {
                return {
                    data: undefined,
                    error: {
                        code: returnData?.[0]?.errors?.[0]?.code?.toString() ?? "UNKNOWN_ERROR",
                        status: returnData?.[0]?.errors?.[0]?.error ?? 500,
                        message: `${returnData?.[0]?.errors?.[0]?.source}: ${returnData?.[0]?.errors?.[0]?.message}`
                    }
                }
            }
            return {
                data: returnData,
                error: undefined,
            }
        } catch (e: any) {
            if (axios.isAxiosError(e)) {
                return {
                    data: undefined,
                    error: {
                        code: e.code,
                        status: e.status,
                        message: e.response?.data ?? "Something went wrong"
                    }
                }
            }
            return {
                data: undefined,
                error: {
                    code: "UNKNOWN_ERROR",
                    status: 500,
                    message: e.message ?? "An unknown error occurred"
                }
            };
        }
    }

}