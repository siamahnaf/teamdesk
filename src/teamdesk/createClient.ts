import axios from "axios";

//Root Teamdesk
import { teamdesk } from "./teamdesk-root";

//Types
import { SDefaultConfig } from "../typing";

//Interface
interface SProps {
    baseUrl: string;
    token: string | number;
    databaseNo: string | number;
    defaultConfig?: SDefaultConfig;
}

export const initTeamdesk = <M>({ baseUrl, token, databaseNo, defaultConfig }: SProps) => {
    if (!baseUrl || !token || !databaseNo) {
        throw new Error("Please provide base url, token and database no.")
    }

    const sBaseUrl = `${baseUrl.replace(/\/+$/, "")}/${databaseNo}`;

    const apiClient = axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": defaultConfig?.contentType,
        }
    });

    return teamdesk<M>(apiClient, sBaseUrl);
}