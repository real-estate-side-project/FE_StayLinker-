'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useCheckDuplicateNickname } from '@/querys/auth/ValidationQuerys';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: '',
            verificationCode: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            nickname: ''
        }
    });
    const { mutate, data, isError, error } = useCheckDuplicateNickname();
    // 중복 체크 핸들러
    const handleCheckDuplicate = async () => {
        const nickname = watch('nickname'); // 닉네임 값 가져오기

        if (!nickname) {
            setError('nickname', {
                type: 'required',
                message: 'Nickname is required'
            });
            return;
        }

        mutate(nickname);
    };

    const onSubmit = (data: any) => {
        console.log('Form submitted:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center h-screen mt-10 mb-10"
        >
            <h1 className="mb-6 text-3xl font-bold">customer join</h1>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                    <Input
                        label="ID"
                        placeholder="ex)abcd@gmail.com"
                        validationMessage={errors.id?.message}
                        {...register('id', { required: 'Email is required' })}
                    />
                    <Button size="md" priority="secondary" halfWidth>
                        Request
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Input
                        label="Verification Code"
                        {...register('verificationCode', { required: 'Verification code is required' })}
                    />
                    <Button size="md" priority="secondary" halfWidth>
                        Verify
                    </Button>
                </div>

                <Input
                    label="Password"
                    placeholder="ex)123@abcd"
                    type="password"
                    validationMessage={errors.password?.message}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Must be at least 6 characters' }
                    })}
                />

                <Input
                    label="Confirm password"
                    placeholder="ex)123@Abcd"
                    type="password"
                    validationMessage={errors.confirmPassword?.message}
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) => value === watch('password') || 'Passwords do not match'
                    })}
                />
                <Input
                    label="Full Name"
                    placeholder="ex)Jane/John Doe"
                    {...register('fullName', { required: 'Full name is required' })}
                    validationMessage={errors.fullName?.message}
                />

                <div className="flex items-center gap-2">
                    <Input
                        label="Nickname"
                        placeholder="ex)asdf"
                        validationMessage={errors.nickname?.message}
                        {...register('nickname', {
                            required: 'Nickname is required',
                            minLength: { value: 4, message: 'Have at least 4 characters' },
                            maxLength: { value: 15, message: 'Have at most 15 characters' }
                        })}
                    />
                    <Button size="md" priority="secondary" halfWidth onClick={handleCheckDuplicate}>
                        Duplicate check
                    </Button>
                </div>
            </div>

            <Button type="submit" size="lg" priority="primary" fullWidth>
                Submit
            </Button>
        </form>
    );
};

export default SignUpForm;
