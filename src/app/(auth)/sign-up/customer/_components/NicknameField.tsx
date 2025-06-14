'use client';

import Input from '@/components/Inputs/Input';
import { useCheckDuplicateNickname } from '@/querys/auth/ValidationQuerys';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const NicknameField = () => {
    const {
        watch,
        setError,
        clearErrors,
        formState: { errors }
    } = useFormContext();

    const nickname = watch('nickname');
    const { mutate: checkDuplicate, isSuccess, isError, reset } = useCheckDuplicateNickname();

    useEffect(() => {
        if (!nickname || nickname.length < 4) {
            reset();
            return;
        }

        const debounce = setTimeout(() => {
            checkDuplicate(nickname, {
                onSuccess: () => clearErrors('nickname'),
                onError: () =>
                    setError('nickname', {
                        type: 'manual',
                        message: '• This nickname is already in use.'
                    })
            });
        }, 500);

        return () => clearTimeout(debounce);
    }, [nickname]);

    const state = isError ? 'error' : isSuccess ? 'filled' : 'default';

    return (
        <Input
            name="nickname"
            label="Nickname"
            type="text"
            placeholder=""
            description="• Have between 4 and 15 characters"
            state={state}
        />
    );
};

export default NicknameField;
