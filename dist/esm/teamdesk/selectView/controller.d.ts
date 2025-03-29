import { SSelectViewProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";
export declare class SelectViewController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Xior);
    private createUri;
    getUri<M>(props: SSelectViewProps<M> & SUriConfig): string;
    doRequest<M>(props: SSelectViewProps<M> & SRequestConfig): Promise<{
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
