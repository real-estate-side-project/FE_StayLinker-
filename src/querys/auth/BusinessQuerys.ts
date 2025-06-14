import { useModal } from '@/providers/ModalProvider';
import { BusinessService } from '@/service/auth/BusinessService';
import { BusinessInfoVerifyParams, BusinessLoginParams } from '@/types/business.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';

export const useBusinessLogin = () => {
    const modal = useModal();
    return useMutation({
        mutationKey: ['Business', 'login'],
        mutationFn: (params: BusinessLoginParams) => BusinessService.loginBusiness(params),
        onSuccess: async (res: any) => {
            const accessToken = res.data.accessToken;
            if (accessToken) {
                modal.open({
                    message: '로그인 되었습니다.(사업자)',
                    onConfirm: () => {
                        setAccessToken('accessToken', accessToken);
                        modal.close();
                        window.location.href = '/';
                    },
                    hasCancel: false,
                    confirmButtonContent: { children: '확인' }
                });
            } else {
            }
        },
        onError: (error: any) => {
            modal.open({
                message: `${error.message}`,
                onConfirm: () => modal.close(),
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        }
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
