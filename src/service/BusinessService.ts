import http from '@/http/http.interceptors.request';

const Business = '/business';

const loginBusiness = async (params: BusinessLoginParams) => {
    try {
        const response = await http.post(`${Business}/login`, params);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'Login failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const BusinessService = {
    loginBusiness
};
