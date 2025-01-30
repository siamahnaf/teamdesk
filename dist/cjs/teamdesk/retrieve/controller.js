"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveController = void 0;
//Request Handler
const basic_request_1 = require("../basic-request");
class RetrieveController {
    constructor(baseUrl, apiClient) {
        this.baseUrl = baseUrl;
        this.requestHandler = new basic_request_1.RequestHandler(apiClient);
    }
    createUri(props) {
        var _a;
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/retrieve.json`;
        (_a = props.column) === null || _a === void 0 ? void 0 : _a.split(";").forEach((item) => url.searchParams.append("column", item));
        props.key && url.searchParams.append("key", props.key);
        props.id && url.searchParams.append("id", props.id);
        return url;
    }
    getUri(props) {
        var _a, _b;
        const shouldInclude = (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.includeBaseUrl) !== null && _b !== void 0 ? _b : true;
        const url = this.createUri(props);
        return shouldInclude ? url.toString() : url.toString().replace(this.baseUrl, "");
    }
    doRequest(props) {
        const url = this.createUri(props);
        return this.requestHandler.placeRequest({
            method: "get",
            url: url.toString(),
            requestConfig: props.config
        });
    }
}
exports.RetrieveController = RetrieveController;
//# sourceMappingURL=controller.js.map