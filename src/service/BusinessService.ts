import http from '@/http/http.interceptors.request';
import { BusinessInfoVerifyParams, BusinessLoginParams } from '@/types/business.type';

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

//중개사무소 조회
const searchBusinessInfo = async (params: BusinessInfoVerifyParams) => {
    try {
        const response = await http.post(`${Business}/business-info-verify`, params);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'business search failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const BusinessService = {
    loginBusiness,
    searchBusinessInfo
};
