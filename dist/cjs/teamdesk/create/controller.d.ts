import { SCreateProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";
export declare class CreateController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Xior);
    private createUri;
    getUri<M>(props: SCreateProps<M> & SUriConfig, type: string): string;
    doRequest<M>(props: SCreateProps<M> & SRequestConfig, type: string): Promise<{
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
