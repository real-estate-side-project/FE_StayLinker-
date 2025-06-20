import { AgentSignUpFormValues } from '@/app/(auth)/sign-up/agent/_components/AgentSiginUpForm';
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

// 중개사무소 조회
const searchBusinessInfo = async (params: BusinessInfoVerifyParams) => {
    try {
        const { type, pageNumber, keyword } = params;

        const response = await http.post(
            `${Business}/business-info-search?type=${encodeURIComponent(type)}&pageNumber=${encodeURIComponent(
                pageNumber
            )}&keyword=${encodeURIComponent(keyword)}`
        );

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'business search failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

// 사업자 등록증 이미지 URL 저장 (S3 업로드 후 호출)
const registerBusinessImageUrl = async (imageUrl: string) => {
    try {
        const response = await http.post(`${Business}/businessImage`, { imageUrl });

        if (response.status >= 400) {
            throw new Error(response.data?.msg || '이미지 등록 실패');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

// 사업자 신청 (apply)
const applyBusiness = async (params: AgentSignUpFormValues) => {
    try {
        const response = await http.post(`${Business}/apply`, params);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.msg || '사업자 신청 실패');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const BusinessService = {
    loginBusiness,
    searchBusinessInfo,
    registerBusinessImageUrl,
    applyBusiness
};
