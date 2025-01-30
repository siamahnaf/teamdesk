"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectTableController = void 0;
//Request Handler
const basic_request_1 = require("../basic-request");
class SelectTableController {
    constructor(baseUrl, apiClient) {
        this.baseUrl = baseUrl;
        this.requestHandler = new basic_request_1.RequestHandler(apiClient);
    }
    createUri(props) {
        var _a;
        const url = new URL(this.baseUrl);
        url.pathname += `/${props.table}/select.json`;
        (_a = props.column) === null || _a === void 0 ? void 0 : _a.split(";").forEach((item) => url.searchParams.append("column", item));
        props.filter && url.searchParams.append("filter", props.filter);
        props.skip && url.searchParams.append("skip", props.skip);
        props.top && url.searchParams.append("top", props.top);
        props.sort && url.searchParams.append("sort", props.sort);
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
exports.SelectTableController = SelectTableController;
//# sourceMappingURL=controller.js.map