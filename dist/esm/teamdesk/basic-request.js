var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export class RequestHandler {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    placeRequest(_a) {
        return __awaiter(this, arguments, void 0, function* ({ method, url, data, requestConfig }) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
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
                if ((_t = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _t === void 0 ? void 0 : _t.error) {
                    return {
                        data: undefined,
                        error: {
                            code: "FORBIDDEN",
                            status: 403,
                            message: `${(_v = (_u = returnData === null || returnData === void 0 ? void 0 : returnData[0]) === null || _u === void 0 ? void 0 : _u.error) === null || _v === void 0 ? void 0 : _v.message}`
                        }
                    };
                }
                return {
                    data: returnData,
                    error: undefined,
                };
            }
            catch (e) {
                if (axios.isAxiosError(e)) {
                    return {
                        data: undefined,
                        error: {
                            code: e.code,
                            status: e.status,
                            message: (_y = (_x = (_w = e.response) === null || _w === void 0 ? void 0 : _w.data) === null || _x === void 0 ? void 0 : _x.message) !== null && _y !== void 0 ? _y : "Something went wrong"
                        }
                    };
                }
                return {
                    data: undefined,
                    error: {
                        code: "UNKNOWN_ERROR",
                        status: 500,
                        message: (_z = e.message) !== null && _z !== void 0 ? _z : "An unknown error occurred"
                    }
                };
            }
        });
    }
}
//# sourceMappingURL=basic-request.js.map