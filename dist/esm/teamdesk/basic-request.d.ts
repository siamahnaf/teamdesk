import { Xior } from "xior";
import { SDefaultConfig } from "../typing";
interface Props {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: Object;
    requestConfig?: SDefaultConfig;
}
export declare class RequestHandler {
    private apiClient;
    constructor(apiClient: Xior);
    placeRequest({ method, url, data, requestConfig }: Props): Promise<{
        data: any;
        error: undefined;
    } | {
        data: undefined;
        error: {
            code: any;
            status: any;
            message: any;
        };
    }>;
}
export {};
