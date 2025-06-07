'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { removeAccessToken } from '../utils/manageCookie';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const logout = () => {
        removeAccessToken('accessToken');

        queryClient.removeQueries({ queryKey: ['userDetail'] });
        router.refresh();
    };

    return { logout };
};
