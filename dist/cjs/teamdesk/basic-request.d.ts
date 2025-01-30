import { Axios } from "axios";
import { SDefaultConfig } from "../typing";
interface Props {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: Object;
    requestConfig?: SDefaultConfig;
}
export declare class RequestHandler {
    private apiClient;
    constructor(apiClient: Axios);
    placeRequest({ method, url, data, requestConfig }: Props): Promise<{
        data: undefined;
        error: {
            code: any;
            status: any;
            message: string;
        };
    } | {
        data: any;
        error: undefined;
    } | {
        data: undefined;
        error: {
            code: string | undefined;
            status: number | undefined;
            message: any;
        };
    }>;
}
export {};
