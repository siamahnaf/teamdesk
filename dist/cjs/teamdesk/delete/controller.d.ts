import { SDeleteProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Axios } from "axios";
export declare class DeleteController {
    private baseUrl;
    private requestHandler;
    constructor(baseUrl: string, apiClient: Axios);
    private createUri;
    getUri<M>(props: SDeleteProps<M> & SUriConfig): string;
    doRequest<M>(props: SDeleteProps<M> & SRequestConfig): Promise<{
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
