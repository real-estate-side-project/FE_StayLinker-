'use client';

import Button from '@/components/Buttons/Button';
import Checkbox from '@/components/Inputs/Checkbox';
import Input from '@/components/Inputs/Input';
import { useToast } from '@/providers/ToastProvider';
import { useConsumerLogin } from '@/querys/auth/ConsumerQuerys';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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

    const { watch } = methods;
    const email = watch('email');
    const password = watch('password');
    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const toast = useToast();

    const { mutate: login } = useConsumerLogin();

    const onSubmit = (data: any) => {
        const { email, password } = data;

        login({ email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full mb-4">
                    <div className="flex flex-col gap-6 h-56 mb-20">
                        <Input name="email" label="ID" maxLength={50} placeholder="ex)abcd@gmail.com" />
                        <Input
                            name="password"
                            label="Password"
                            maxLength={50}
                            placeholder="ex)123@abcd"
                            type={showPassword ? 'text' : 'password'}
                            icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={togglePasswordVisibility}
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
