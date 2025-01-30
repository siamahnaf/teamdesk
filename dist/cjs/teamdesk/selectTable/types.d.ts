import { SUriConfig } from "../../typing";
import { SRequestConfig, STeamdeskResponse } from "../../typing";
export interface SSelectTableProps<M> {
    table: M extends string ? M : string;
    column?: string;
    filter?: string;
    skip?: string;
    top?: string;
    sort?: string;
}
export interface SSelectTable<M> {
    uri(props: SSelectTableProps<M> & SUriConfig): string;
    request<T>(props: SSelectTableProps<M> & SRequestConfig): Promise<STeamdeskResponse<T>>;
}
