'use client';

import Button from '@/components/Buttons/Button';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Input from '@/components/Inputs/Input';
import AppleLogo from '../assets/AppleLogo';
import GoogleLogo from '../assets/GoogleLogo';
import Checkbox from '@/components/Inputs/Checkbox';

const CustomerLogInForm = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: 'off',
            saveID: 'off'
        }
    });
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit } = methods;
    const onSubmit = (data: any) => {
        console.log('Submitted Data:', data);
    };

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col w-96">
                    <div className="flex flex-col gap-6 h-56 mb-20">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'Email is required' }}
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

                    <div className="flex flex-col w-96 h-24 gap-4 mb-16">
                        <Button priority="primary" size="md" fullWidth>
                            Login
                        </Button>
                        <div className="flex w-full justify-between text-gray-500 text-[16px]">
                            <p className="underline">Forgot password?</p>
                            <p>
                                Don't have an account? <span className="text-sub500 underline">Join</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-96 h-28 gap-6">
                        <div className="relative flex items-center">
                            <hr className="w-full border-gray-300" />
                            <span className="absolute bg-white px-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-[16px] whitespace-nowrap">
                                Login/Join with SNS account
                            </span>
                        </div>

                        <div className="flex gap-10 justify-center">
                            <AppleLogo />
                            <GoogleLogo />
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CustomerLogInForm;
