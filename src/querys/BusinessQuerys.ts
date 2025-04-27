import { BusinessService } from '@/service/BusinessService';
import { BusinessInfoVerifyParams, BusinessLoginParams } from '@/types/business.type';
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

export const useBusinessInfoVerify = () => {
    return useMutation({
        mutationKey: ['Business', 'info-verify'],
        mutationFn: (params: BusinessInfoVerifyParams) => BusinessService.searchBusinessInfo(params),
        onSuccess: (res: any) => {
            // 성공 시 처리할 로직 추가 가능

            console.log('중개사무소 조회 성공:', res.data);
        },
        onError: (error: any) => {
            console.error('중개사무소 조회 실패:', error);
        }
    });
};
