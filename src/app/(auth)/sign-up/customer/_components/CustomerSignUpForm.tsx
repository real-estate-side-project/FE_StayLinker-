'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConsumerSignUp } from '@/querys/ConsumerQuerys';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Dropdown from '../../../../../components/DropDown/DropDown';
import { getDateOptions, getYearOptions } from '../_utils/dateUtils';
import { languageOptions, monthOptions } from '../_utils/optionsData';
import EmailSection from './EmailSection';
import NicknameField from './NicknameField';

type FormValues = {
    email: string;
    code: string;
    password: string;
    confirmPassword: string;
    name: string;
    nickname: string;
    languages: string[];
    month: string;
    date: string;
    year: string;
    role: string;
    address: string;
    phoneNumber: string;
    rememberMe: string;
    saveID: string;
};

const CustomerSignUpForm = () => {
    const methods = useForm<FormValues>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            code: '',
            password: '',
            confirmPassword: '',
            name: '',
            nickname: '',
            languages: [],
            month: '',
            date: '',
            year: '',
            role: 'CONSUMER',
            address: '',
            phoneNumber: '',
            rememberMe: 'off',
            saveID: 'off'
        }
    });
    const router = useRouter();
    const { mutate: signUp } = useConsumerSignUp();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { watch } = methods;
    const { setValue, getValues } = methods;
    const email = watch('email');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const passwordsMatch = password && confirmPassword && password === confirmPassword;

    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;

    const passwordState = methods.formState.errors.password ? 'error' : password ? 'filled' : undefined;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', JSON.stringify(data, null, 2));
        const birthDay = `${data.year}-${data.month}-${data.date}`;

        const payload = {
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            name: data.name,
            nickname: data.nickname,
            address: 'sampleaddress',
            phoneNumber: '01022222222',
            languages: [data.languages],
            birthDay,
            country: 'KR'
        };

        console.log('payload', JSON.stringify(payload, null, 2));

        signUp(payload, {
            onSuccess: () => {
                alert('회원가입이 완료되었습니다.');
                router.push('/log-in/customer');
            },
            onError: (err) => {
                console.error('회원가입 실패:', err);
                alert('회원가입에 실패했습니다.');
            }
        });
    };

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    const handleSelectLanguage = (selected: string | number) => {
        if (typeof selected !== 'string') return;

        const prev = Array.isArray(getValues('languages')) ? getValues('languages') : [];
        const updated = prev.includes(selected) ? prev.filter((lang) => lang !== selected) : [...prev, selected];

        setValue('languages', updated, { shouldValidate: true });
    };

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
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
                            description={`• Must be at least 6 characters\n• Must contain number and special characters\n• Must contain letters in mixed case`}
                            rules={{
                                validate: {
                                    minLength: (v) => v.length >= 6,
                                    hasNumberAndSpecial: (v) => /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v),
                                    hasMixedCase: (v) => /[a-z]/.test(v) && /[A-Z]/.test(v)
                                }
                            }}
                            state={passwordState}
                            maxLength={50}
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

                        <Input name="name" label="Full Name" type="text" placeholder="ex)Jane/John Doe" />

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
                                name="languages"
                                placeholder="ex)English"
                                items={languageOptions}
                                onSelect={handleSelectLanguage}
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
                                    <span className="text-sub500 underline"> Privacy Policy</span>
                                </Link>
                            </p>
                        </div>

                        <div className="flex flex-col w-full items-center justify-center gap-4 mt-8">
                            <Button priority="primary" size="md" isDisabled={!isFormValid} halfWidth>
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
