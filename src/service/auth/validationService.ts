import http from '@/http/http.interceptors.request';

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

const resetPassword = async (
    email: string,
    role: 'ADMIN' | 'CONSUMER' | 'BUSINESS',
    verificationCode: string,
    newPassword: string,
    retypeNewPassword: string
) => {
    try {
        const response = await http.post('/email/confirm', {
            email,
            role,
            verificationCode,
            newPassword,
            retypeNewPassword
        });

        return response.data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || '비밀번호 재설정에 실패했습니다.');
    }
};

export const ValidationService = {
    checkDuplicateNickname,
    getUserDetail,
    requestEmailVerification,
    confirmEmailCode,
    resetPassword
};
