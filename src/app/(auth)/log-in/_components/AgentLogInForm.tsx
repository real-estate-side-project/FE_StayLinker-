'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Checkboxes from './CheckBox';
import Input from '@/components/Inputs/Input';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Button from '@/components/Buttons/Button';

const items = [
    { label: 'remember-me', value: 1 },
    { label: 'save ID', value: 2 }
];

const AgentLogInForm = () => {
    const methods = useForm({
        defaultValues: {
            checkboxGroup: [] // 초기값은 빈 배열
        }
    });
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: any) => {
        console.log('Submitted Data:', data);
    };

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[454px]">
                    <div className="flex flex-col gap-[24px] h-[231px] mb-[80px]">
                        <Input label="Corporate registration number" placeholder="ex)1234567890" />
                        <Input
                            label="Password"
                            type={showPassword ? 'text' : 'Password'}
                            placeholder="ex)123@abcd"
                            icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                            handleClickIcon={handleClickIcon}
                        />
                        <Checkboxes
                            name="checkboxGroup"
                            items={items}
                            isAllCheckBox={false}
                            isAllDefault={false}
                            isLimited={2} // 최대 선택 가능한 항목 수
                            onChange={(selected) => console.log('Selected Items:', selected)}
                        />
                    </div>

                    <div className="flex flex-col w-[454px] h-[92px] gap-[16px]">
                        <Button priority="primary" size="md" fullWidth>
                            Login
                        </Button>
                        <div className="flex w-full justify-between text-gray-500 text-[16px]">
                            <p className="underline">Forgot password?</p>
                            <p>
                                Don’t have an Agent account? <span className="text-sub500 underline">Join</span>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default AgentLogInForm;
