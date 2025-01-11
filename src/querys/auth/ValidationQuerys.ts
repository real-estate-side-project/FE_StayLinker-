import { ValidationService } from '@/service/validationService';
import { useMutation, useQuery } from '@tanstack/react-query';

// 닉네임 중복체크
export const useCheckDuplicateNickname = () => {
    return useMutation({
        mutationFn: (nickname: string) => ValidationService.checkDuplicateNickname(nickname),
        onSuccess: (data) => {
            console.log('checkDuplicateNickname success:', data);
        },
        onError: (error) => {
            console.log('checkDuplicateNickname error:', error as Error); // error: Error 객체
        }
    });
};
