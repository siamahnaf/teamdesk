//Request Handler
import { RequestHandler } from "../basic-request";
export class CreateController {
    constructor(baseUrl, apiClient) {
        this.baseUrl = baseUrl;
        this.requestHandler = new RequestHandler(apiClient);
    }
    createUri(props, type) {
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/${type}`;
        return url;
    }
    getUri(props, type) {
        var _a, _b;
        const shouldInclude = (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.includeBaseUrl) !== null && _b !== void 0 ? _b : true;
        const url = this.createUri(props, type);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }
    doRequest(props, type) {
        const url = this.createUri(props, type);
        return this.requestHandler.placeRequest({
            method: "post",
            url: url.toString(),
            data: props.payload,
            requestConfig: props.config
        });
    }
}
//# sourceMappingURL=controller.js.map