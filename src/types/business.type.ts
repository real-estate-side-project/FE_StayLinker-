export type BusinessLoginParams = {
    type?: string;
    businessCode: string;
    password: string;
    rememberMe?: string;
    saveID?: string;
};

export type BusinessInfoVerifyParams = {
    businessNumber: string;
    registrationNumber: string;
    name: string;
    agentName: string;
    registDate: string;
};
