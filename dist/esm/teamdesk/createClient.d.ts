import { SDefaultConfig } from "../typing";
interface SProps {
    baseUrl: string;
    token: string | number;
    databaseNo: string | number;
    defaultConfig?: SDefaultConfig;
}
export declare const initTeamdesk: <M>({ baseUrl, token, databaseNo, defaultConfig }: SProps) => import("./teamdesk-root").TeamdeskRoot<M>;
export {};
