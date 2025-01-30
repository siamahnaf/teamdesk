"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
//Request Handler
const basic_request_1 = require("../basic-request");
class CreateController {
    constructor(baseUrl, apiClient) {
        this.baseUrl = baseUrl;
        this.requestHandler = new basic_request_1.RequestHandler(apiClient);
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
exports.CreateController = CreateController;
//# sourceMappingURL=controller.js.map