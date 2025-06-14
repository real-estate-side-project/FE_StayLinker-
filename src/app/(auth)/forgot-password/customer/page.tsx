'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConfirmEmailCode, useRequestEmailVerification } from '@/querys/auth/ValidationQuerys';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const ForgotPasswordPage = () => {
    const [step, setStep] = useState<1 | 2>(1);
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerColor, setTimerColor] = useState<'red' | 'green'>('red');
    const [timerText, setTimerText] = useState('');
    const [codeError, setCodeError] = useState('');

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            verificationCode: '',
            newPassword: '',
            retypeNewPassword: '',
            role: 'CONSUMER'
        }
    });

    const { watch } = methods;
    const email = watch('email');
    const code = watch('verificationCode');
    const password = watch('newPassword');
    const confirmPassword = watch('retypeNewPassword');

    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;
    const passwordState = methods.formState.errors.newPassword ? 'error' : password ? 'filled' : undefined;

    const { mutate: requestEmail } = useRequestEmailVerification();
    const { mutate: confirmCode, isPending: confirmPending } = useConfirmEmailCode();

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    const onSubmit = (data: any) => {
        console.log('최종 제출:', data);
    };

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const next = prev - 1;
                if (next <= 0) {
                    clearInterval(timer);
                    setTimerText('00:00');
                    setCodeError('Timeout occurred. Please re-request.');
                } else {
                    const min = String(Math.floor(next / 60));
                    const sec = String(next % 60).padStart(2, '0');
                    setTimerText(`${min}:${sec}`);
                }
                return next;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleRequestEmail = () => {
        requestEmail(
            { email, role: 'ADMIN' },
            {
                onSuccess: () => {
                    setShowCodeInput(true);
                    setTimeLeft(300);
                    setTimerColor('red');
                    setCodeError('');
                }
            }
        );
    };

    const handleVerifyCode = () => {
        setCodeError('');
        confirmCode(
            { email, role: 'ADMIN', code },
            {
                onSuccess: () => {
                    setTimerColor('green');
                    setTimeLeft(0);
                },
                onError: () => {
                    setCodeError('유효하지 않은 인증 코드입니다.');
                }
            }
        );
    };

    const canProceedNext = timerColor === 'green';

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full">
                        <p className="pc-title-l-700 text-center mb-10">
                            {step === 2 ? 'Reset Password' : 'Forgot Password'}
                        </p>

                        {step === 1 && (
                            <section className="flex flex-col gap-8">
                                <Input name="fullName" label="Full Name" placeholder="ex)Jane/John Doe" />

                                <Input
                                    name="email"
                                    label="ID"
                                    placeholder="ex)abcd@email.com"
                                    buttonSlot={
                                        <Button
                                            priority="secondary"
                                            fullWidth
                                            onClick={handleRequestEmail}
                                            isDisabled={!email?.trim()}
                                        >
                                            Request
                                        </Button>
                                    }
                                />

                                {showCodeInput && (
                                    <Input
                                        name="verificationCode"
                                        label="Verification Code"
                                        placeholder=""
                                        maxLength={20}
                                        state={timerColor === 'green' ? 'filled' : codeError ? 'error' : 'default'}
                                        description={`• The verification code is valid for 5 minutes from the time received.\n• If you don't receive verification code, please press the ‘Request’ button again.`}
                                        rightSlot={
                                            timeLeft > 0 && (
                                                <span className="font-semibold text-danger600">{timerText}</span>
                                            )
                                        }
                                        buttonSlot={
                                            <Button
                                                priority="secondary"
                                                fullWidth
                                                onClick={handleVerifyCode}
                                                isDisabled={!code?.trim()}
                                            >
                                                {confirmPending ? 'Verifying...' : 'Verify'}
                                            </Button>
                                        }
                                        validationMessage={codeError}
                                    />
                                )}

                                <div className="flex justify-center mt-12">
                                    <Button
                                        type="button"
                                        priority="primary"
                                        size="md"
                                        halfWidth
                                        onClick={() => setStep(2)}
                                        isDisabled={!canProceedNext}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </section>
                        )}

                        {step === 2 && (
                            <section className="flex flex-col gap-8">
                                <Input
                                    name="newPassword"
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
                                    name="retypeNewPassword"
                                    label="Confirm new password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={toggleConfirmPassword}
                                    description="• Enter the same password."
                                    state={confirmPasswordState}
                                />

                                <div className="flex justify-center mt-12">
                                    <Button type="submit" priority="primary" size="md" halfWidth>
                                        Change
                                    </Button>
                                </div>
                            </section>
                        )}

                        <div className="text-center text-gray-500 pc-body-m-500 mt-4">
                            If you don't remember information entered when joining,
                            <br />
                            Please contact abc@staylinker.co.kr
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default ForgotPasswordPage;
