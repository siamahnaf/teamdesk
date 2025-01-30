import { SDescribeTableProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Axios } from "axios";

//Request Handler
import { RequestHandler } from "../basic-request";

export class DescribeTableController {
    private baseUrl: string;
    private requestHandler: RequestHandler;

    constructor(baseUrl: string, apiClient: Axios) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient)
    }

    private createUri<M>(props: SDescribeTableProps<M>) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/describe.json`;
        return url;
    }

    getUri<M>(props: SDescribeTableProps<M> & SUriConfig) {
        const shouldInclude = props.config?.includeBaseUrl ?? true;
        const url = this.createUri(props);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }

    doRequest<M>(props: SDescribeTableProps<M> & SRequestConfig) {
        const url = this.createUri(props);
        return this.requestHandler.placeRequest({
            method: "get",
            url: url.toString(),
            requestConfig: props.config
        });
    }
}