'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import EmailSection from '../../sign-up/customer/_components/EmailSection';

const ForgotPasswordPage = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    const onSubmit = (data: any) => {
        console.log('최종 제출:', data);
        // 여기에 최종 reset-password API 요청
    };

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full gap-10">
                        <p className="font-bold text-[28px] text-center">
                            {step === 3 ? 'Reset Password' : 'Forgot Password'}
                        </p>

                        {/* Step 1: 이름 + 이메일 */}
                        {step === 1 && (
                            <>
                                <Input name="fullName" label="Full Name" placeholder="ex)Jane Doe" />
                                <EmailSection />
                                <Button
                                    type="button"
                                    priority="primary"
                                    size="md"
                                    halfWidth
                                    onClick={() => setStep(2)} // 실제론 이메일 인증 요청 API 호출 후 진행
                                >
                                    Next
                                </Button>
                            </>
                        )}

                        {/* Step 2: 인증 코드 입력 */}
                        {step === 2 && (
                            <>
                                <Input name="code" label="Verification Code" placeholder="ex)123456" />
                                <div className="text-sm text-gray600 leading-relaxed">
                                    <p>• The verification code is valid for 5 minutes.</p>
                                    <p>• If you didn’t receive the code, press the ‘Request’ button again.</p>
                                </div>
                                <Button
                                    type="button"
                                    priority="primary"
                                    size="md"
                                    halfWidth
                                    onClick={() => setStep(3)} // 실제론 인증코드 검증 후만 넘어감
                                >
                                    Next
                                </Button>
                            </>
                        )}

                        {/* Step 3: 비밀번호 재설정 */}
                        {step === 3 && (
                            <>
                                <Input
                                    name="password"
                                    label="New Password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={togglePassword}
                                    description={`• Must be at least 6 characters\n• Must contain number and special characters\n• Must contain letters in mixed case`}
                                    rules={{
                                        validate: {
                                            minLength: (v) => v.length >= 6 || 'At least 6 characters',
                                            hasNumberAndSpecial: (v) =>
                                                (/[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v)) ||
                                                'Must include number and special char',
                                            hasMixedCase: (v) =>
                                                (/[a-z]/.test(v) && /[A-Z]/.test(v)) ||
                                                'Must include both lowercase and uppercase'
                                        }
                                    }}
                                    state={passwordState}
                                    maxLength={50}
                                />

                                <Input
                                    name="confirmPassword"
                                    label="Confirm new password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={toggleConfirmPassword}
                                    description="• Enter the same password"
                                    state={confirmPasswordState}
                                />

                                <Button type="submit" priority="primary" size="md" halfWidth>
                                    Change
                                </Button>
                            </>
                        )}

                        <div className="text-center text-gray-500 text-[16px] mt-4">
                            If you don't remember information entered when joining,
                            <br />
                            please contact abc@staylinker.co.kr
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default ForgotPasswordPage;
