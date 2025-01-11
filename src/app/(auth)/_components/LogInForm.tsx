'use client';

import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Input from '@/components/Inputs/Input';
import Button from '@/components/Buttons/Button';
import Link from 'next/link';

const LogInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickIcon = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center">
            <form className="flex flex-col justify-center items-center h-screen w-2/4 gap-5">
                <p className="text-2xl font-bold">소비자 로그인</p>
                <div className="flex flex-col gap-5">
                    <Input placeholder="ID" />
                    <div>
                        <Input
                            type={showPassword ? 'text' : 'Password'}
                            placeholder="password"
                            icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                            handleClickIcon={handleClickIcon}
                        />
                        <p className="text-gray-500 text-opacity-75">아이디/비밀번호를 잊으셨나요?</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Button fullWidth>Login</Button>
                    <Button fullWidth>Join</Button>
                </div>
                <div className="flex items-center my-4 w-full">
                    <hr className="flex-grow border-gray-300" />
                    <p className="mx-4 text-gray-500 text-opacity-75">SNS 계정으로 간편 로그인 / 회원가입</p>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex gap-4">
                    <div className="bg-white   rounded-full p-2 shadow-md shadow-gray-500">
                        <FcGoogle size={30} />
                    </div>
                    <div className="bg-black   rounded-full p-2 shadow-md shadow-gray-500">
                        <FaApple size={30} color="white" />
                    </div>
                </div>
                <Link href="/log-in/business">전문가 로그인 하러가기</Link>
                <Link href="/log-in">소비자 로그인 하러가기</Link>
            </form>
        </div>
    );
};

export default LogInForm;
