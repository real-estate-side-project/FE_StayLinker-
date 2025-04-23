'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConsumerLogin } from '@/querys/ConsumerQuerys';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Dropdown from '../../../../../components/DropDown/DropDown';
import { getDateOptions, getYearOptions } from '../_utils/dateUtils';
import { languageOptions, monthOptions } from '../_utils/optionsData';
import EmailSection from './EmailSection';
import NicknameField from './NicknameField';

const CustomerSignUpForm = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
            code: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            nickname: '',
            rememberMe: 'off',
            saveID: 'off',
            month: '',
            date: '',
            year: '',
            role: 'CONSUMER'
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { watch } = methods;
    const { mutate: login } = useConsumerLogin();

    const email = watch('email');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const passwordsMatch = password && confirmPassword && password === confirmPassword;

    const passwordState = passwordsMatch ? 'filled' : undefined;
    const confirmPasswordState = confirmPassword && !passwordsMatch ? 'error' : passwordsMatch ? 'filled' : undefined;

    const onSubmit = (data: any) => {
        const { email, password } = data;
        login({ email, password });
    };

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    return (
        <main className="flex flex-col items-center justify-center  mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className=" w-[700px]">
                    <div className="flex flex-col w-full mb-4 gap-12">
                        <p className="font-bold text-[28px] mb-10 text-center">Customer Join</p>

                        <EmailSection />

                        <Input
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="ex)123@abcd"
                            icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={togglePassword}
                            description={`• Must be at least 6 characters\n • Must contain number and spcial characters\n • Must contain letters in mixed case`}
                            state={passwordState}
                        />

                        <Input
                            name="confirmPassword"
                            label="Confirm password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="ex)123@abcd"
                            icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={toggleConfirmPassword}
                            description={`• Enter the same password`}
                            state={confirmPasswordState}
                        />

                        <Input name="fullName" label="Full Name" type="text" placeholder="ex)Jane/John Doe" />

                        <NicknameField />
                        <div className="flex gap-3">
                            <Dropdown
                                name="month"
                                placeholder="Month"
                                items={monthOptions}
                                onSelect={(val) => console.log('Selected:', val)}
                                label="Birthday"
                            />
                            <Dropdown
                                name="date"
                                placeholder="Date"
                                items={getDateOptions()}
                                onSelect={(val) => console.log('Selected:', val)}
                                label=" "
                            />
                            <Dropdown
                                name="year"
                                placeholder="Year"
                                items={getYearOptions()}
                                onSelect={(val) => console.log('Selected:', val)}
                                label=" "
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Dropdown
                                name="language"
                                placeholder="ex)English"
                                items={languageOptions}
                                onSelect={(val) => console.log('Selected:', val)}
                                label="Language"
                                size="full"
                                description={`• Please select your main language`}
                            />
                        </div>

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
                        <div className="flex flex-col w-full items-center justify-center gap-4 mt-8">
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

export default CustomerSignUpForm;
