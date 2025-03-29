import { SDeleteProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";
export declare class DeleteController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Xior);
    private createUri;
    getUri<M>(props: SDeleteProps<M> & SUriConfig): string;
    doRequest<M>(props: SDeleteProps<M> & SRequestConfig): Promise<{
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
