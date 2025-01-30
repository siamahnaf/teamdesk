import { SUriConfig } from "../../typing";
import { SRequestConfig, TeamdeskError } from "../../typing";
export interface SDeleteProps<M> {
    table: M extends string ? M : string;
    key?: string;
    id?: string;
    purge?: boolean;
}
export interface TeamdeskData {
    status: number;
    id: number;
}
export interface STeamdeskResponse {
    data?: TeamdeskData[];
    error?: TeamdeskError;
}
export interface SDelete<M> {
    uri(props: SDeleteProps<M> & SUriConfig): string;
    request(props: SDeleteProps<M> & SRequestConfig): Promise<STeamdeskResponse>;
}
