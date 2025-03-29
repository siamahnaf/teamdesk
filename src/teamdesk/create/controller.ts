import { SCreateProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";

//Request Handler
import { RequestHandler } from "../basic-request";

export class CreateController {
    private baseUrl: string;
    private requestHandler: RequestHandler;

    constructor(baseUrl: string, apiClient: Xior) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient)
    }

    private createUri<M>(props: SCreateProps<M>, type: string) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/${type}`;
        return url;
    }

    getUri<M>(props: SCreateProps<M> & SUriConfig, type: string) {
        const shouldInclude = props.config?.includeBaseUrl ?? true;
        const url = this.createUri(props, type);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }

    doRequest<M>(props: SCreateProps<M> & SRequestConfig, type: string) {
        const url = this.createUri(props, type);
        return this.requestHandler.placeRequest({
            method: "post",
            url: url.toString(),
            data: props.payload,
            requestConfig: props.config
        });
    }
}