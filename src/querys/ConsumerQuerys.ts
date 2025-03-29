import { ConsumerService } from '@/service/ConsumerService';
import { setAccessToken } from '@/utils/manageCookie';
import { useMutation } from '@tanstack/react-query';

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
