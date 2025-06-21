export type BusinessLoginParams = {
    type?: string;
    businessCode: string;
    password: string;
    rememberMe?: string;
    saveID?: string;
};

export type BusinessInfoVerifyParams = {
    type: string;
    pageNumber: number;
    keyword: string;
};
