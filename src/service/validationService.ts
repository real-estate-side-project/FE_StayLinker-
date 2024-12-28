import http from '@/http/http.interceptors.request';

//닉네임 중복체크
//check/nickname?nickname=hyjinn
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

export const ValidationService = {
    checkDuplicateNickname
};
