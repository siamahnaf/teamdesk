export type SContentType = "text/html" | "text/plain" | "multipart/form-data" | "application/json" | "application/x-www-form-urlencoded" | "application/octet-stream";

export type SDefaultConfig = {
    contentType: SContentType;
}

export type SUriConfig = {
    config?: {
        includeBaseUrl: boolean;
    }
}

export interface SRequestConfig {
    config?: SDefaultConfig
}

export interface STeamdeskResponse<T> {
    data?: T;
    error?: TeamdeskError;
}

export interface TeamdeskError {
    status: string | number | undefined;
    code: string | undefined;
    message: string | undefined;
}