import { SDeleteProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Xior } from "xior";

//Request Handler
import { RequestHandler } from "../basic-request";

export class DeleteController {
    private baseUrl: string;
    private requestHandler: RequestHandler;

    constructor(baseUrl: string, apiClient: Xior) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient)
    }

    private createUri<M>(props: SDeleteProps<M>) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/delete.json`;
        props.key && url.searchParams.append("key", props.key);
        props.id && url.searchParams.append("id", props.id);
        props.purge && url.searchParams.append("purge", props.purge.toString());
        return url;
    }

    getUri<M>(props: SDeleteProps<M> & SUriConfig) {
        const shouldInclude = props.config?.includeBaseUrl ?? true;
        const url = this.createUri(props);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }

    doRequest<M>(props: SDeleteProps<M> & SRequestConfig) {
        const url = this.createUri(props);
        return this.requestHandler.placeRequest({
            method: "get",
            url: url.toString(),
            requestConfig: props.config
        });
    }
}