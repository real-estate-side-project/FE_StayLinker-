import { useToast } from '@/providers/ToastProvider';
import { ConsumerService } from '@/service/auth/ConsumerService';
import { ConsumerLoginParams } from '@/types/consumer.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useConsumerLogin = () => {
    const toast = useToast();
    return useMutation({
        mutationKey: ['consumer', 'login'],
        mutationFn: (params: ConsumerLoginParams) => ConsumerService.loginConsumer(params),
        onSuccess: async (res: any) => {
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
        onError: (error: any) => {
            // error.status
            // 404: 이메일이 없는 경우
            // 409: 비밀번호가 맞지 않는 경우
            let errorMessage = '';

            if (error.status === 404) {
                errorMessage = 'Please check your email.';
            } else if (error.status === 409) {
                errorMessage = 'Please check your password.';
            } else {
                errorMessage = error.message || 'An unexpected error occurred.';
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
    return useMutation({
        mutationKey: ['consumer', 'signup'],
        mutationFn: (params: any) => ConsumerService.signUpConsumer(params),
        onSuccess: async (res: any) => {
            alert('Sign up successful.');
            router.push('/log-in/customer');
        },
        onError: (error: any) => {}
    });
};
