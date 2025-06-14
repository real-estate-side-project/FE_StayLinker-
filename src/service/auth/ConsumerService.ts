import http from '@/http/http.interceptors.request';
import { ConsumerLoginParams, ConsumerSignUpParams } from '@/types/consumer.type';

const consumer = '/consumer';

const loginConsumer = async (params: ConsumerLoginParams) => {
    try {
        const response = await http.post(`${consumer}/login`, params);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'Login failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

const signUpConsumer = async (params: ConsumerSignUpParams) => {
    try {
        const response = await http.post(`${consumer}/signup`, params);
        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'Sign up failed');
        }
        return response;
    } catch (error) {
        throw error;
    }
};

export const ConsumerService = {
    loginConsumer,
    signUpConsumer
};
