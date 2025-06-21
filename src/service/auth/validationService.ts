import http from '@/http/http.interceptors.request';
import { AxiosError } from 'axios';

// 닉네임 중복검사
const checkDuplicateNickname = async (nickname: string) => {
    try {
        const response = await http.get(`check/nickname`, {
            params: { nickname }
        });

        if (response.status >= 400) {
            throw new Error('Login failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

const getUserDetail = async () => {
    try {
        const response = await http.get(`/role`);

        if (response.status >= 400) {
            throw new Error('getUserDetail failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

const requestEmailVerification = async (email: string, role: string) => {
    try {
        const response = await http.post('/email/send', {
            email,
            role
        });

        if (response.status >= 400) {
            throw new Error('requestEmailVerification failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

const confirmEmailCode = async (email: string, role: string, code: string) => {
    try {
        const response = await http.post('/email/confirm', {
            email,
            role,
            code
        });

        if (response.status >= 400) {
            throw new Error('requestEmailVerification failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

// 비밀번호 찾기
const resetPassword = async (
    email: string,
    verificationCode: string,
    newPassword: string,
    retypeNewPassword: string,
    role: 'ADMIN' | 'CONSUMER' | 'BUSINESS' | 'TEMP_CONSUMER' | 'TEMP_BUSINESS'
) => {
    try {
        const response = await http.post('/forgot/password', {
            email,
            verificationCode,
            newPassword,
            retypeNewPassword,
            role
        });

        return response.data;
    } catch (error: unknown) {
        const message =
            (error as AxiosError<{ message?: string }>)?.response?.data?.message || '비밀번호 재설정에 실패했습니다.';
        throw new Error(message);
    }
};

export const ValidationService = {
    checkDuplicateNickname,
    getUserDetail,
    requestEmailVerification,
    confirmEmailCode,
    resetPassword
};
