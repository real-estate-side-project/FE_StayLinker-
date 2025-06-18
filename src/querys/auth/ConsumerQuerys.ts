import { useToast } from '@/providers/ToastProvider';
import { ConsumerService } from '@/service/auth/ConsumerService';
import { ConsumerLoginParams } from '@/types/consumer.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface LoginResponse {
    accessToken: string;
}

export interface ConsumerSignUpParams {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
    address: string;
    phoneNumber: string;
    languages: string[];
    country: string;
    birthDay: string;
    name: string;
}

export interface ConsumerSignUpResponse {
    msg: string;
}

export const useConsumerLogin = () => {
    const toast = useToast();
    return useMutation({
        mutationKey: ['consumer', 'login'],
        mutationFn: (params: ConsumerLoginParams) => ConsumerService.loginConsumer(params),
        onSuccess: async (res: { data: LoginResponse }) => {
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
        onError: (error: AxiosError<{ message?: string }>) => {
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

export const useConsumerSignUp = () => {
    const router = useRouter();
    return useMutation<ConsumerSignUpResponse, AxiosError, ConsumerSignUpParams>({
        mutationKey: ['consumer', 'signup'],
        mutationFn: (params) => ConsumerService.signUpConsumer(params).then((res) => res.data),
        onSuccess: (res) => {
            alert(res.msg || 'Sign up successful.');
            router.push('/log-in/customer');
        },
        onError: (error) => {
            console.error('Sign up error:', error);
        }
    });
};
