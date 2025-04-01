'use client';

import React, { useState } from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import Input from '@/components/Inputs/Input';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Button from '@/components/Buttons/Button';
import Checkbox from '@/components/Inputs/Checkbox';
import { useBusinessLogin } from '@/querys/BusinessQuerys';
import Link from 'next/link';

const AgentLogInForm = () => {
    const methods = useForm({
        defaultValues: {
            businessCode: '',
            password: '',
            rememberMe: 'off',
            saveID: 'off'
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit } = methods;
    const { mutate: login } = useBusinessLogin();

    const onSubmit = (data: BusinessLoginParams) => {
        const type = 'BUSINESS';
        const { businessCode, password } = data;
        login({ type, businessCode, password });
    };

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-96">
                    <div className="flex flex-col gap-6 h-56 mb-20">
                        <Controller
                            name="businessCode"
                            control={control}
                            rules={{ required: 'Corporate registration number is required' }}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    label="Corporate Registration Number"
                                    placeholder="ex)1234567890"
                                    state={fieldState.error ? 'error' : 'default'}
                                    validationMessage={fieldState.error?.message}
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'Password is required' }}
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

                    <div className="flex flex-col w-96 h-24 gap-4">
                        <Button priority="primary" size="md" fullWidth>
                            Login
                        </Button>
                        <div className="flex w-full justify-between text-gray-500 text-[16px]">
                            <p className="underline">Forgot password?</p>
                            <p>
                                Don’t have an Agent account?
                                <Link href={`/sign-up/agent`}>
                                    <span className="text-sub500 underline">Join</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default AgentLogInForm;
