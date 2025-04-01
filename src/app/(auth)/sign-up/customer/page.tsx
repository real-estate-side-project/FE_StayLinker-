'use client';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConsumerLogin } from '@/querys/ConsumerQuerys';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const CustomerSignUpPage = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: 'off',
            saveID: 'off'
        }
    });
    const [showPassword, setShowPassword] = useState(false);
    const { control } = methods;
    const { mutate: login } = useConsumerLogin();

    const onSubmit = (data: any) => {
        const { email, password } = data;

        login({ email, password });
    };

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen overflow-y-scroll mt-18">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="flex flex-col w-[700px]">
                        <div className="flex flex-col gap-6 h-56 mb-20">
                            <p className="font-bold text-[28px] mb-10 items-center justify-center">Customer Join</p>
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
                                    <>
                                        <Input
                                            {...field}
                                            label="ID"
                                            placeholder="ex)abcd@gmail.com"
                                            state={fieldState.error ? 'error' : 'default'}
                                            validationMessage={fieldState.error?.message}
                                        />
                                        <Button priority="primary" size="md" fullWidth>
                                            Login
                                        </Button>
                                    </>
                                )}
                            />
                        </div>

                        <div className="flex flex-col w-96 h-24 gap-4 mb-16">
                            <Button priority="primary" size="md" fullWidth>
                                Login
                            </Button>
                            <div className="flex w-full justify-between text-gray-500 text-[16px]">
                                <p className="underline">Forgot password?</p>
                                <p>
                                    Don't have an account?
                                    <Link href={`/sign-up/customer`}>
                                        <span className="text-sub500 underline">Join</span>
                                    </Link>
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
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default CustomerSignUpPage;
