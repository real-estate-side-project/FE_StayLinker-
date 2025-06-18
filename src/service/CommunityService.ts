import http from '@/http/http.interceptors.request';

const postLikeAPI = async (id: string) => {
    try {
        const response = await http.post(`/community/favorite/${id}`);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'community favorite failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};
const deleteLikeAPI = async (id: string) => {
    try {
        const response = await http.delete(`/community/favorite/${id}`);

        if (response.status >= 400 || response.data?.errorCode) {
            throw new Error(response.data?.message || 'community favorite failed');
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const CommunityService = {
    postLikeAPI,
    deleteLikeAPI
};
