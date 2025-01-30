import { SCreateProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Axios } from "axios";
export declare class CreateController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Axios);
    private createUri;
    getUri<M>(props: SCreateProps<M> & SUriConfig, type: string): string;
    doRequest<M>(props: SCreateProps<M> & SRequestConfig, type: string): Promise<{
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
