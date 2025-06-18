import { ValidationService } from '@/service/auth/validationService';
import { useMutation, useQuery } from '@tanstack/react-query';

// 닉네임 중복체크
export const useCheckDuplicateNickname = () => {
    return useMutation({
        mutationFn: (nickname: string) => ValidationService.checkDuplicateNickname(nickname),
        onSuccess: (data) => {
            alert(data);
        },
        onError: (error) => {
            alert(error);
        }
    });
};

// 토큰권한 확인
export const useUserDetail = () => {
    return useQuery({
        queryKey: ['userDetail'],
        queryFn: ValidationService.getUserDetail
    });
};

interface RequestEmailPayload {
    email: string;
    role: string;
}

export const useRequestEmailVerification = () => {
    return useMutation({
        mutationFn: ({ email, role }: RequestEmailPayload) => ValidationService.requestEmailVerification(email, role),
        onSuccess: () => {
            alert('A verification code has been sent. Please check your email.');
        },
        onError: () => {
            alert('Failed to send verification code. Please try again.');
        }
    });
};

interface ConfirmEmailPayload {
    email: string;
    role: string;
    code: string;
}

export const useConfirmEmailCode = () => {
    return useMutation({
        mutationFn: ({ email, role, code }: ConfirmEmailPayload) =>
            ValidationService.confirmEmailCode(email, role, code),
        onSuccess: () => {
            alert('Verification successful.');
        },
        onError: () => {
            alert('Verification failed. Please check the code and try again.');
        }
    });
};
