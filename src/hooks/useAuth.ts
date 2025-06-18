import { useUserDetail } from '@/querys/auth/ValidationQuerys';

export const useAuth = () => {
    const { data, isLoading, isError, error, refetch } = useUserDetail();

    const userId = data?.data?.id ?? null;
    const role = data?.data?.role ?? null;
    const nickname = data?.data?.nickname ?? null;

    const isLoggedIn = !!userId && !!role;

    return {
        userId,
        role,
        nickname,
        isLoggedIn,
        isLoading,
        isError,
        error,
        refetch
    };
};
