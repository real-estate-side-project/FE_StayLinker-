import { useModal } from '@/providers/ModalProvider';
import { useToast } from '@/providers/ToastProvider';
import { BusinessService } from '@/service/auth/BusinessService';
import { BusinessInfoVerifyParams, BusinessLoginParams } from '@/types/business.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface BusinessLoginResponse {
    accessToken: string;
}

export const useBusinessLogin = () => {
    const toast = useToast();
    return useMutation<{ data: BusinessLoginResponse }, AxiosError, BusinessLoginParams>({
        mutationKey: ['Business', 'login'],
        mutationFn: (params) => BusinessService.loginBusiness(params),
        onSuccess: (res) => {
            const accessToken = res.data.accessToken;

            if (accessToken) {
                setAccessToken('accessToken', accessToken);

                toast.on({
                    message: '로그인 되었습니다.',
                    color: 'sub'
                });

                setTimeout(() => {
                    window.location.href = '/';
                }, 1500);
            }
        },
        onError: (error) => {
            // error.status
            // 404: 이메일이 없는 경우
            // 409: 비밀번호가 맞지 않는 경우
            const status = error.response?.status;
            const serverMessage = error.message;

            let errorMessage = '';

            if (status === 404) {
            } else if (status === 409) {
                errorMessage = 'Please check your password.';
            } else {
                errorMessage = serverMessage || 'An unexpected error occurred.';
            }

            toast.on({
                message: errorMessage,
                color: 'danger'
            });
        }
    });
};

interface BusinessInfo {
    businessName: string;
    agentName: string;
    address: string;
    businessCertificate: string;
}

type BusinessInfoSearchResponse = {
    list: BusinessInfo[];
    totalPages: number;
};

export const useBusinessInfoVerify = () => {
    return useMutation<{ data: BusinessInfoSearchResponse }, AxiosError, BusinessInfoVerifyParams>({
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
interface BusinessApplyParams {
    businessCode: string;
    businessName: string;
    agentName: string;
    registrationCode: string;
    phoneNumber: string;
    email: string;
    password: string;
    address: string;
    businessCertificate: string;
    nickName: string;
    openingDate: string;
}

export const useBusinessApply = () => {
    const modal = useModal();

    return useMutation<{ msg: string }, AxiosError, BusinessApplyParams>({
        mutationKey: ['Business', 'apply'],
        mutationFn: (params) => BusinessService.applyBusiness(params),
        onSuccess: () => {
            modal.open({
                message: '사업자 신청이 완료되었습니다.',
                onConfirm: () => {
                    modal.close();
                    window.location.href = '/log-in/agent';
                },
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        },
        onError: () => {
            modal.open({
                message: '사업자 신청에 실패했습니다. 다시 시도해주세요.',
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        }
    });
};
