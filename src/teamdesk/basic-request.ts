import { Xior, isXiorError } from "xior";
import { SDefaultConfig } from "../typing";

interface Props {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: Object;
    requestConfig?: SDefaultConfig;

}

export class RequestHandler {
    private apiClient: Xior;
    constructor(apiClient: Xior) {
        this.apiClient = apiClient;
    }

    async placeRequest({ method, url, data, requestConfig = {} }: Props) {
        try {
            const { data: returnData } = await this.apiClient.request<any>({
                method: method,
                url: url,
                data,
                ...requestConfig,
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
            if (returnData?.[0]?.error) {
                return {
                    data: undefined,
                    error: {
                        code: "FORBIDDEN",
                        status: 403,
                        message: `${returnData?.[0]?.error?.message}`
                    }
                }
            }
            return {
                data: returnData,
                error: undefined,
            }
        } catch (e: any) {
            if (isXiorError(e)) {
                return {
                    data: undefined,
                    error: {
                        code: e.code,
                        status: e.status,
                        message: e.response?.data?.message ?? "Something went wrong"
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