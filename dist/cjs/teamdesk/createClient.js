"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTeamdesk = void 0;
const xior_1 = __importDefault(require("xior"));
//Root Teamdesk
const teamdesk_root_1 = require("./teamdesk-root");
const initTeamdesk = ({ baseUrl, token, databaseNo, defaultConfig = {} }) => {
    if (!baseUrl || !token || !databaseNo) {
        throw new Error("Please provide base url, token and database no.");
    }
    const sBaseUrl = `${baseUrl.replace(/\/+$/, "")}/${databaseNo}`;
    const apiClient = xior_1.default.create(Object.assign({ headers: {
            Authorization: `Bearer ${token}`,
        } }, defaultConfig));
    return (0, teamdesk_root_1.teamdesk)(apiClient, sBaseUrl);
};
exports.initTeamdesk = initTeamdesk;
//# sourceMappingURL=createClient.js.map