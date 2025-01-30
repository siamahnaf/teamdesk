import { SRetrieveProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Axios } from "axios";
export declare class RetrieveController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Axios);
    private createUri;
    getUri<M>(props: SRetrieveProps<M> & SUriConfig): string;
    doRequest<M>(props: SRetrieveProps<M> & SRequestConfig): Promise<{
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
