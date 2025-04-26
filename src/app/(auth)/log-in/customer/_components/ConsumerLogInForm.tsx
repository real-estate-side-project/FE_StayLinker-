'use client';

import Button from '@/components/Buttons/Button';
import Checkbox from '@/components/Inputs/Checkbox';
import Input from '@/components/Inputs/Input';
import { useConsumerLogin } from '@/querys/ConsumerQuerys';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const ConsumerLogInForm = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: 'off',
            saveID: 'off'
        }
    });
    const [showPassword, setShowPassword] = useState(false);
    const { control, watch } = methods;
    const { mutate: login } = useConsumerLogin();

    const email = watch('email');
    const password = watch('password');
    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const onSubmit = (data: any) => {
        const { email, password } = data;

        login({ email, password });
    };

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full mb-4">
                    <div className="flex flex-col gap-6 h-56 mb-20">
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address.'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Email must be 50 characters or less.'
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    label="ID"
                                    placeholder="ex)abcd@gmail.com"
                                    state={fieldState.error ? 'error' : 'default'}
                                    validationMessage={fieldState.error?.message}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: 'Password is required',

                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={handleClickIcon}
                                    state={fieldState.error ? 'error' : 'default'}
                                    validationMessage={fieldState.error?.message}
                                />
                            )}
                        />
                        <div className="flex gap-2">
                            <Checkbox name="rememberMe">remember-me</Checkbox>
                            <Checkbox name="saveID">save ID</Checkbox>
                        </div>
                    </div>
                    <Button priority="primary" size="md" isDisabled={!isFormValid} fullWidth>
                        Login
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default ConsumerLogInForm;
