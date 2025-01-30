import { SUriConfig } from "../../typing";
import { STeamdeskResponse, SRequestConfig } from "../../typing";

export interface SDescribeTableProps<M> {
    table: M extends string ? M : string;
}


export interface SDescribeTable<M> {
    uri(props: SDescribeTableProps<M> & SUriConfig): string;
    request<T>(props: SDescribeTableProps<M> & SRequestConfig): Promise<STeamdeskResponse<T>>;
}