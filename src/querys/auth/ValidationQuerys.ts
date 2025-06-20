import { useModal } from '@/providers/ModalProvider';
import { ValidationService } from '@/service/auth/validationService';
import { useMutation, useQuery } from '@tanstack/react-query';

interface RequestEmailPayload {
    email: string;
    role: string;
}

interface ConfirmEmailPayload {
    email: string;
    role: string;
    code: string;
}

interface ResetPasswordPayload {
    email: string;
    verificationCode: string;
    newPassword: string;
    retypeNewPassword: string;
    role: 'ADMIN' | 'CONSUMER' | 'BUSINESS' | 'TEMP_CONSUMER' | 'TEMP_BUSINESS';
}

// 닉네임 중복체크
export const useCheckDuplicateNickname = () => {
    const modal = useModal();
    return useMutation({
        mutationFn: (nickname: string) => ValidationService.checkDuplicateNickname(nickname),
        onSuccess: () => {
            modal.open({
                message: '닉네임 사용 가능',
                onConfirm: () => modal.close(),
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        },
        onError: () => {
            modal.open({
                message: '닉네임 중복',
                onConfirm: () => modal.close(),
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        }
    });
};

// 토큰권한 확인
export const useUserDetail = () => {
    return useQuery({
        queryKey: ['userDetail'],
        queryFn: ValidationService.getUserDetail,
        retry: false
    });
};

// 이메일 인증 요청
export const useRequestEmailVerification = () => {
    const modal = useModal();
    return useMutation({
        mutationFn: ({ email, role }: RequestEmailPayload) => ValidationService.requestEmailVerification(email, role),
        onSuccess: () => {
            modal.open({
                message: 'A verification code has been sent. Please check your email.',
                onConfirm: () => modal.close(),
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        },
        onError: () => {
            alert('Failed to send verification code. Please try again.');
        }
    });
};

// 이메일 인증 코드 검사
export const useConfirmEmailCode = () => {
    const modal = useModal();
    return useMutation({
        mutationFn: ({ email, role, code }: ConfirmEmailPayload) =>
            ValidationService.confirmEmailCode(email, role, code),
        onSuccess: () => {
            modal.open({
                message: 'Verification successful.',
                onConfirm: () => modal.close(),
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        },
        onError: () => {
            alert('Verification failed. Please check the code and try again.');
        }
    });
};

// 비밀번호 재설정
export const useResetPassword = () => {
    const modal = useModal();
    return useMutation({
        mutationFn: (payload: ResetPasswordPayload) =>
            ValidationService.resetPassword(
                payload.email,
                payload.verificationCode,
                payload.newPassword,
                payload.retypeNewPassword,
                payload.role
            ),
        onSuccess: () => {
            modal.open({
                message: '비밀번호 변경이 완료되었습니다.',
                onConfirm: () => {
                    modal.close();
                    window.location.href = '/log-in/customer';
                },
                hasCancel: false,
                confirmButtonContent: { children: '확인' }
            });
        },
        onError: (error) => {
            alert((error as Error)?.message || 'Failed to reset password. Please try again.');
        }
    });
};
