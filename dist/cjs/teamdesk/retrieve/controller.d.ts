import { SRetrieveProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";
export declare class RetrieveController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Xior);
    private createUri;
    getUri<M>(props: SRetrieveProps<M> & SUriConfig): string;
    doRequest<M>(props: SRetrieveProps<M> & SRequestConfig): Promise<{
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
