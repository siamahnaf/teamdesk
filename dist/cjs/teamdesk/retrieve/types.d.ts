import { SUriConfig } from "../../typing";
import { SRequestConfig, STeamdeskResponse } from "../../typing";
export interface SRetrieveProps<M> {
    table: M extends string ? M : string;
    column?: string;
    key?: string;
    id?: string;
}
export interface SRetrieve<M> {
    uri(props: SRetrieveProps<M> & SUriConfig): string;
    request<T>(props: SRetrieveProps<M> & SRequestConfig): Promise<STeamdeskResponse<T>>;
}
