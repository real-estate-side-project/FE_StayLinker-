'use client';

import { useToast } from '@/providers/ToastProvider';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { removeAccessToken } from '../utils/manageCookie';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const toast = useToast();

    const logout = () => {
        removeAccessToken('accessToken');

        queryClient.removeQueries({ queryKey: ['userDetail'] });
        toast.on({
            message: '로그아웃 되었습니다.',
            color: 'sub'
        });

        router.refresh();
    };

    return { logout };
};
