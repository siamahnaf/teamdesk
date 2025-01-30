import { SUriConfig } from "../../typing";
import { SRequestConfig, TeamdeskError } from "../../typing";
export interface SCreateProps<M> {
    table: M extends string ? M : string;
    payload: Object;
}
export interface TeamdeskData {
    status: number;
    id: number;
    key: string;
}
export interface STeamdeskResponse {
    data?: TeamdeskData[];
    error?: TeamdeskError;
}
export interface SCreate<M> {
    uri(props: SCreateProps<M> & SUriConfig): string;
    request(props: SCreateProps<M> & SRequestConfig): Promise<STeamdeskResponse>;
}
