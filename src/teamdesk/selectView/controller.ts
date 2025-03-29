import { SSelectViewProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";

//Request Handler
import { RequestHandler } from "../basic-request";

export class SelectViewController {
    private baseUrl: string;
    private requestHandler: RequestHandler;

    constructor(baseUrl: string, apiClient: Xior) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient)
    }

    private createUri<M>(props: SSelectViewProps<M>) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/${props.view}/select.json`;
        props.filter && url.searchParams.append("filter", props.filter);
        props.skip && url.searchParams.append("skip", props.skip);
        props.top && url.searchParams.append("top", props.top);
        return url;
    }

    getUri<M>(props: SSelectViewProps<M> & SUriConfig) {
        const shouldInclude = props.config?.includeBaseUrl ?? true;
        const url = this.createUri(props);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }

    doRequest<M>(props: SSelectViewProps<M> & SRequestConfig) {
        const url = this.createUri(props);
        return this.requestHandler.placeRequest({
            method: "get",
            url: url.toString(),
            requestConfig: props.config
        });
    }
}