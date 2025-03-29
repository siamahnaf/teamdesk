import xior from "xior";
//Root Teamdesk
import { teamdesk } from "./teamdesk-root";
export const initTeamdesk = ({ baseUrl, token, databaseNo, defaultConfig = {} }) => {
    if (!baseUrl || !token || !databaseNo) {
        throw new Error("Please provide base url, token and database no.");
    }
    const sBaseUrl = `${baseUrl.replace(/\/+$/, "")}/${databaseNo}`;
    const apiClient = xior.create(Object.assign({ headers: {
            Authorization: `Bearer ${token}`,
        } }, defaultConfig));
    return teamdesk(apiClient, sBaseUrl);
};
//# sourceMappingURL=createClient.js.map