export type SResponseType = 'json' | 'text' | 'stream' | 'document' | 'arraybuffer' | 'blob' | 'original' | 'custom';

export type SDefaultConfig = {
    timeout?: number;
    responseType?: SResponseType;
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