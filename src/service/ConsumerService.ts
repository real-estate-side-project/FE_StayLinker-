import http from '@/http/http.interceptors.request';

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

export const ConsumerService = {
    loginConsumer
};
