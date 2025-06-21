'use client';

import { useModal } from '@/providers/ModalProvider';
import { useToast } from '@/providers/ToastProvider';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { removeAccessToken } from '../utils/manageCookie';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const toast = useToast();
    const modal = useModal();

    const doLogout = () => {
        removeAccessToken('accessToken');

        queryClient.removeQueries({ queryKey: ['userDetail'] });

        toast.on({
            message: '로그아웃 되었습니다.',
            color: 'sub'
        });

        router.refresh();
    };

    const logout = () => {
        modal.open({
            message: 'Do you really want to log out?',
            onConfirm: () => {
                doLogout();
                modal.close();
            },
            onCancel: () => {
                modal.close();
            }
        });
    };

    return { logout };
};
