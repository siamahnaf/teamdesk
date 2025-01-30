import { SUriConfig } from "../../typing";
import { SRequestConfig, STeamdeskResponse } from "../../typing";

type VIEW = "Default View" | "List All" | "List Changed" | "Record Picker" | (string & {});

export interface SSelectViewProps<M> {
    table: M extends string ? M : string;
    view: VIEW;
    filter?: string;
    skip?: string;
    top?: string;
}

export interface SSelectView<M> {
    uri(props: SSelectViewProps<M> & SUriConfig): string;
    request<T>(props: SSelectViewProps<M> & SRequestConfig): Promise<STeamdeskResponse<T>>;
}