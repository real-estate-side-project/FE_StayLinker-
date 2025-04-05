'use client';

import Button from '@/components/Buttons/Button';
import Checkbox from '@/components/Inputs/Checkbox';
import Input from '@/components/Inputs/Input';
import { useBusinessLogin } from '@/querys/BusinessQuerys';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

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

    const { control, handleSubmit, watch } = methods;
    const { mutate: login } = useBusinessLogin();

    const businessCode = watch('businessCode');
    const password = watch('password');
    const isFormValid = businessCode.trim() !== '' && password.trim() !== '';

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
                <div className="flex flex-col w-full mb-4">
                    <div className="flex flex-col gap-6 h-56 mb-20">
                        <Controller
                            name="businessCode"
                            control={control}
                            rules={{ required: 'Corporate registration number is required' }}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    label="ID"
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

                    <Button priority="primary" size="md" isDisabled={!isFormValid} fullWidth>
                        Login
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default AgentLogInForm;
