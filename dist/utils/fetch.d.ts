export declare function fetchReq(params: object | undefined, uri: string): Promise<{
    status: boolean;
    description: any;
    data?: undefined;
} | {
    status: boolean;
    data: any;
    description?: undefined;
}>;
