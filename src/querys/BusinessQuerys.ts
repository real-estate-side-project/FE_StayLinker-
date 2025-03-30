import { BusinessService } from '@/service/BusinessService';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';

export const useBusinessLogin = () => {
    return useMutation({
        mutationKey: ['Business', 'login'],
        mutationFn: (params: BusinessLoginParams) => BusinessService.loginBusiness(params),
        onSuccess: async (res: any) => {
            const accessToken = res.data.accessToken;
            if (accessToken) {
                setAccessToken('accessToken', accessToken);

                try {
                    window.location.href = '/';
                } catch (error) {}
            } else {
            }
        },
        onError: (error: any) => {}
    });
};
