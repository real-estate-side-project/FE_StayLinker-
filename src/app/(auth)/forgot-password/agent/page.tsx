'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const AgentPasswordResetPage = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            businessNumber: '',
            email: '',
            code: '',
            password: '',
            confirmPassword: ''
        }
    });

    const { watch } = methods;
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;
    const passwordState = methods.formState.errors.password ? 'error' : password ? 'filled' : undefined;

    const onSubmit = (data: any) => {
        console.log('최종 제출:', data);
    };

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full gap-10">
                        <p className="font-bold text-[28px] text-center">
                            {step === 3 ? '비밀번호 재설정' : '비밀번호 찾기'}
                        </p>

                        {/* STEP 1: 사업자번호 + 이메일 */}
                        {step === 1 && (
                            <>
                                <Input name="businessNumber" label="사업자 등록번호" placeholder="ex) 1234567890" />
                                <Input
                                    name="email"
                                    label="이메일"
                                    placeholder="your@email.com"
                                    rightSlot={
                                        <button type="button" className="text-main400 text-sm font-bold">
                                            요청
                                        </button>
                                    }
                                />
                                <Button
                                    type="button"
                                    priority="primary"
                                    size="md"
                                    halfWidth
                                    onClick={() => setStep(2)} // 실제로는 이메일 인증 요청 성공 시
                                >
                                    다음
                                </Button>
                            </>
                        )}

                        {/* STEP 2: 인증코드 입력 */}
                        {step === 2 && (
                            <>
                                <Input
                                    name="code"
                                    label="인증 코드"
                                    placeholder="6자리 숫자"
                                    rightSlot={
                                        <button type="button" className="text-main400 text-sm font-bold">
                                            인증
                                        </button>
                                    }
                                />
                                <div className="text-sm text-gray600 leading-relaxed">
                                    <p>• 인증코드는 수신 후 5분간 유효합니다.</p>
                                    <p>• 인증코드를 받지 못한 경우, 인증요청 버튼을 다시 눌러주세요.</p>
                                </div>
                                <Button
                                    type="button"
                                    priority="primary"
                                    size="md"
                                    halfWidth
                                    onClick={() => setStep(3)} // 실제로는 인증 성공 후
                                >
                                    다음
                                </Button>
                            </>
                        )}

                        {/* STEP 3: 비밀번호 재설정 */}
                        {step === 3 && (
                            <>
                                <Input
                                    name="password"
                                    label="새 비밀번호"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="ex)123@Abcd"
                                    icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={() => setShowPassword((p) => !p)}
                                    description={`• 6자 이상\n• 숫자, 특수문자 포함\n• 영문 대소문자 포함`}
                                    rules={{
                                        validate: {
                                            minLength: (v) => v.length >= 6 || '6자 이상 입력해주세요.',
                                            hasNumberAndSpecial: (v) =>
                                                (/[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v)) ||
                                                '숫자/특수문자 포함 필요',
                                            hasMixedCase: (v) =>
                                                (/[a-z]/.test(v) && /[A-Z]/.test(v)) || '영문 대/소문자 포함 필요'
                                        }
                                    }}
                                    state={passwordState}
                                    maxLength={50}
                                />

                                <Input
                                    name="confirmPassword"
                                    label="새 비밀번호 확인"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="ex)123@Abcd"
                                    icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={() => setShowConfirmPassword((p) => !p)}
                                    description="• 동일한 비밀번호를 입력하세요."
                                    state={confirmPasswordState}
                                />

                                <Button type="submit" priority="primary" size="md" halfWidth>
                                    변경
                                </Button>
                            </>
                        )}

                        <div className="text-center text-gray-500 text-[16px] mt-4">
                            가입 시 입력한 정보가 기억나지 않는다면
                            <br />
                            abc@staylinker.co.kr로 문의해주세요.
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default AgentPasswordResetPage;
