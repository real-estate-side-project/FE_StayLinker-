import { useModal } from '@/providers/ModalProvider';
import { ConsumerService } from '@/service/ConsumerService';
import { ConsumerLoginParams } from '@/types/consumer.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useConsumerLogin = () => {
    const modal = useModal();
    return useMutation({
        mutationKey: ['consumer', 'login'],
        mutationFn: (params: ConsumerLoginParams) => ConsumerService.loginConsumer(params),
        onSuccess: async (res: any) => {
            const accessToken = res.data.accessToken;
            if (accessToken) {
                modal.open({
                    message: '로그인 되었습니다.(소비자)',
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
