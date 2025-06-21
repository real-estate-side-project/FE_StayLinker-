import { getAccessToken } from '@/utils/manageCookie';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

// accessToken 이 있는 경우에만 헤더에 넣어서 요청
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const accessToken = getAccessToken('accessToken');

        if (accessToken && config.headers) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default http;
