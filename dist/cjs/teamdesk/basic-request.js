"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandler = void 0;
const axios_1 = __importDefault(require("axios"));
class RequestHandler {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    placeRequest(_a) {
        return __awaiter(this, arguments, void 0, function* ({ method, url, data, requestConfig }) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
            try {
                const { data: returnData } = yield this.apiClient.request(Object.assign({ method: method, url: url, data }, ((requestConfig === null || requestConfig === void 0 ? void 0 : requestConfig.contentType) ? {
                    headers: {
                        "Content-Type": requestConfig.contentType,
                    }
                } : {})));
                if ((_b = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _b === void 0 ? void 0 : _b.errors) {
                    return {
                        data: undefined,
                        error: {
                            code: (_g = (_f = (_e = (_d = (_c = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.code) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : "UNKNOWN_ERROR",
                            status: (_l = (_k = (_j = (_h = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.error) !== null && _l !== void 0 ? _l : 500,
                            message: `${(_p = (_o = (_m = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _m === void 0 ? void 0 : _m.errors) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.source}: ${(_s = (_r = (_q = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _q === void 0 ? void 0 : _q.errors) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.message}`
                        }
                    };
                }
                return {
                    data: returnData,
                    error: undefined,
                };
            }
            catch (e) {
                if (axios_1.default.isAxiosError(e)) {
                    return {
                        data: undefined,
                        error: {
                            code: e.code,
                            status: e.status,
                            message: (_u = (_t = e.response) === null || _t === void 0 ? void 0 : _t.data) !== null && _u !== void 0 ? _u : "Something went wrong"
                        }
                    };
                }
                return {
                    data: undefined,
                    error: {
                        code: "UNKNOWN_ERROR",
                        status: 500,
                        message: (_v = e.message) !== null && _v !== void 0 ? _v : "An unknown error occurred"
                    }
                };
            }
        });
    }
}
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=basic-request.js.map