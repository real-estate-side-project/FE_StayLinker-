import { getAccessToken } from '@/utils/manageCookie';
import axios from 'axios';

const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
        'Content-type': 'application/json'
    }
});

// accessToken 이 있는경우에만 헤더에 넣어서 요청
http.interceptors.request.use(
    (config: any) => {
        const accessToken = getAccessToken('accessToken');

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

export default http;
