'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import EmailSection from '../../sign-up/customer/_components/EmailSection';

const page = () => {
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { watch } = methods;
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const passwordsMatch = password && confirmPassword && password === confirmPassword;

    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;

    const passwordState = methods.formState.errors.password ? 'error' : password ? 'filled' : undefined;

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    const onSubmit = (data: any) => {
        console.log('Form submitted:', JSON.stringify(data, null, 2));
    };
    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full mb-4 gap-12">
                        <p className="font-bold text-[28px] mb-10 text-center">Forgot Password</p>
                        <Input name="name" label="Full Name" type="text" placeholder="ex)Jane/John Doe" />
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

                        <div className="flex flex-col w-full items-center justify-center gap-4 mt-8">
                            <Button priority="primary" size="md" halfWidth>
                                Next
                            </Button>
                            <div className="flex w-full justify-center text-gray-500 text-[16px]">
                                <p>
                                    If you don't remember information entered when joining, Please contact
                                    abc@staylinker.co.kr
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default page;
