import { SRetrieveProps } from "./types";
import { SUriConfig, SRequestConfig } from "../../typing";
import { Axios } from "axios";

//Request Handler
import { RequestHandler } from "../basic-request";

export class RetrieveController {
    private baseUrl: string;
    private requestHandler: RequestHandler;

    constructor(baseUrl: string, apiClient: Axios) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient)
    }

    private createUri<M>(props: SRetrieveProps<M>) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/retrieve.json`;
        props.column?.split(";").forEach((item) => url.searchParams.append("column", item));
        props.key && url.searchParams.append("key", props.key);
        props.id && url.searchParams.append("id", props.id);
        return url;
    }

    getUri<M>(props: SRetrieveProps<M> & SUriConfig) {
        const shouldInclude = props.config?.includeBaseUrl ?? true;
        const url = this.createUri(props);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }

    doRequest<M>(props: SRetrieveProps<M> & SRequestConfig) {
        const url = this.createUri(props);
        return this.requestHandler.placeRequest({
            method: "get",
            url: url.toString(),
            requestConfig: props.config
        });
    }
}