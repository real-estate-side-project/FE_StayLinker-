'use client';

import RefactoringInput from '@/app/(auth)/sign-up/_components/RefactoringInput';
import Button from '@/components/Buttons/Button';
import { useConsumerLogin } from '@/querys/ConsumerQuerys';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Dropdown from '../_components/DropDown';

const monthOptions = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' }
];

const dateOptions = Array.from({ length: 31 }, (_, i) => {
    const day = (i + 1).toString().padStart(2, '0');
    return { label: day, value: day };
});

const currentYear = new Date().getFullYear();

const yearOptions = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => {
    const year = (1900 + i).toString();
    return { label: year, value: year };
});

const CustomerSignUpPage = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            verificationCode: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            nickname: '',
            rememberMe: 'off',
            saveID: 'off',
            month: '',
            date: '',
            year: ''
        }
    });
    const [showPassword, setShowPassword] = useState(false);
    const { watch } = methods;
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
        <main className="flex flex-col items-center justify-center  mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className=" w-[700px]">
                    <div className="flex flex-col w-full mb-4 gap-11">
                        <p className="font-bold text-[28px] mb-10 text-center">Customer Join</p>

                        <div className="flex gap-3 items-start">
                            <RefactoringInput
                                name="email"
                                label="ID"
                                placeholder="ex)abcd@gmail.com"
                                description="• Must be your email"
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
                                state={methods.formState.errors.email ? 'error' : 'default'}
                            />
                            <div className="flex flex-col w-[120px] mt-10 ">
                                <Button priority="secondary" fullWidth>
                                    Request
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <RefactoringInput
                                name="verificationCode"
                                label="Verification Code"
                                placeholder=""
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
                                state={methods.formState.errors.email ? 'error' : 'default'}
                            />
                            <div className="flex flex-col w-[120px] mt-10 ">
                                <Button priority="secondary" fullWidth>
                                    Request
                                </Button>
                            </div>
                        </div>

                        <RefactoringInput
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="ex)123@abcd"
                            icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={handleClickIcon}
                            description={`• Must be at least 6 characters\n • Must contain number and spcial characters\n • Must contain letters in mixed case`}
                            rules={{
                                required: 'Password is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            state={methods.formState.errors.password ? 'error' : 'default'}
                        />
                        <RefactoringInput
                            name="confirmPassword"
                            label="Confirm password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="ex)123@abcd"
                            icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={handleClickIcon}
                            description={`• Enter the same password`}
                            rules={{
                                required: 'Password is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            state={methods.formState.errors.password ? 'error' : 'default'}
                        />
                        <RefactoringInput
                            name="fullName"
                            label="Full Name"
                            type="text"
                            placeholder="ex)Jane/John Doe"
                            rules={{
                                required: 'Password is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            state={methods.formState.errors.password ? 'error' : 'default'}
                        />
                        <RefactoringInput
                            name="nickname"
                            label="Nickname"
                            type="text"
                            placeholder=""
                            description={`• Have between 4 and 15 characters`}
                            rules={{
                                required: 'Password is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            state={methods.formState.errors.password ? 'error' : 'default'}
                        />
                        <div className="flex flex-col gap-3">
                            <p className="text-gray910 cursor-pointer font-semibold text-xl">Birthday</p>
                            <div className="flex gap-3">
                                <Dropdown
                                    name="month"
                                    placeholder="Month"
                                    rules={{ required: 'This field is required' }}
                                    items={monthOptions}
                                    onSelect={(val) => console.log('Selected:', val)}
                                />
                                <Dropdown
                                    name="date"
                                    placeholder="Date"
                                    rules={{ required: 'This field is required' }}
                                    items={dateOptions}
                                    onSelect={(val) => console.log('Selected:', val)}
                                />
                                <Dropdown
                                    name="year"
                                    placeholder="Year"
                                    rules={{ required: 'This field is required' }}
                                    items={yearOptions}
                                    onSelect={(val) => console.log('Selected:', val)}
                                />
                            </div>
                        </div>

                        <RefactoringInput
                            name="language"
                            label="Language"
                            type="text"
                            placeholder="ex)English"
                            description={`• Please select your main language`}
                            rules={{
                                required: 'Password is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Password must be 30 characters or less.'
                                }
                            }}
                            state={methods.formState.errors.password ? 'error' : 'default'}
                        />
                        <div className="flex w-full justify-between text-gray-500 text-[18px]">
                            <p>
                                By creating an account, you agree to the Staylinker’s
                                <Link href={`/`}>
                                    <span className="text-sub500 underline"> Terms of Service </span>
                                </Link>
                                and
                                <br />
                                <Link href={`/`}>
                                    <span className="text-sub500 underline"> Privacy Police</span>
                                </Link>
                            </p>
                        </div>
                        <div className="flex flex-col w-full items-center justify-center">
                            <Button priority="primary" size="sm" isDisabled={!isFormValid} halfWidth>
                                Join
                            </Button>
                            <div className="flex w-full justify-center text-gray-500 text-[16px]">
                                <p>
                                    Already have an account?
                                    <Link href={`/log-in/customer`}>
                                        <span className="text-sub500 underline"> Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default CustomerSignUpPage;
