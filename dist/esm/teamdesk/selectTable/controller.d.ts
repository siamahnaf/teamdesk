import { SSelectTableProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";
export declare class SelectTableController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Xior);
    private createUri;
    getUri<M>(props: SSelectTableProps<M> & SUriConfig): string;
    doRequest<M>(props: SSelectTableProps<M> & SRequestConfig): Promise<{
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
