export type ConsumerLoginParams = {
    email: string;
    password: string;
    rememberMe?: string;
    saveID?: string;
};

export type ConsumerSignUpParams = {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
    languages: string[];
    birthDay: string;
    name: string;
    address?: string;
    phoneNumber?: string;
    country?: string;
};
