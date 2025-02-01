'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Checkboxes from './CheckBox';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const items = [
    { label: 'remember-me', value: 1 },
    { label: 'save ID', value: 2 }
];

const CustomerLogInForm = () => {
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
                        <Input label="ID" placeholder="ex)abcd@gmail.com" />
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

                    <div className="flex flex-col w-[454px] h-[92px] gap-[16px] mb-[60px]">
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
                    <div className="flex flex-col w-[454px] h-[110px] gap-[24px]">
                        <div className="relative flex items-center">
                            <hr className="w-full border-gray-300" />
                            <span className="absolute bg-white px-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-[16px] whitespace-nowrap">
                                Login/Join with SNS account
                            </span>
                        </div>
                        {/* 피그마 아이콘으로 바꾸기 */}
                        <div className="flex gap-[40px] justify-center">
                            <div className="bg-white border rounded-full p-2  ">
                                <FcGoogle size={30} />
                            </div>
                            <div className="bg-black border rounded-full p-2  ">
                                <FaApple size={30} color="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CustomerLogInForm;
