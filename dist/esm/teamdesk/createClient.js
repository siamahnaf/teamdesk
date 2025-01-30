import axios from "axios";
//Root Teamdesk
import { teamdesk } from "./teamdesk-root";
export const initTeamdesk = ({ baseUrl, token, databaseNo, defaultConfig }) => {
    if (!baseUrl || !token || !databaseNo) {
        throw new Error("Please provide base url, token and database no.");
    }
    const sBaseUrl = `${baseUrl.replace(/\/+$/, "")}/${databaseNo}`;
    const apiClient = axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": defaultConfig === null || defaultConfig === void 0 ? void 0 : defaultConfig.contentType,
        }
    });
    return teamdesk(apiClient, sBaseUrl);
};
//# sourceMappingURL=createClient.js.map