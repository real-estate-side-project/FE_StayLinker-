import { useModal } from '@/providers/ModalProvider';
import { BusinessService } from '@/service/auth/BusinessService';
import { BusinessInfoVerifyParams, BusinessLoginParams } from '@/types/business.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface BusinessLoginResponse {
    accessToken: string;
}

interface BusinessInfo {
    businessName: string;
    agentName: string;
    address: string;
    businessCertificate: string;
}

export const useBusinessLogin = () => {
    const modal = useModal();

    return useMutation<{ data: BusinessLoginResponse }, AxiosError, BusinessLoginParams>({
        mutationKey: ['Business', 'login'],
        mutationFn: (params) => BusinessService.loginBusiness(params),
        onSuccess: (res) => {
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
            }
        },
        onError: (error) => {
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
    return useMutation<{ data: BusinessInfo[] }, AxiosError, BusinessInfoVerifyParams>({
        mutationKey: ['Business', 'info-verify'],
        mutationFn: (params) => BusinessService.searchBusinessInfo(params),
        onSuccess: (res) => {
            console.log('중개사무소 조회 성공:', res.data);
        },
        onError: (error) => {
            console.error('중개사무소 조회 실패:', error);
        }
    });
};
