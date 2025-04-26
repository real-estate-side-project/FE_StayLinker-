import { ConsumerService } from '@/service/ConsumerService';
import { ConsumerLoginParams } from '@/types/consumer.type';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useConsumerLogin = () => {
    return useMutation({
        mutationKey: ['consumer', 'login'],
        mutationFn: (params: ConsumerLoginParams) => ConsumerService.loginConsumer(params),
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
