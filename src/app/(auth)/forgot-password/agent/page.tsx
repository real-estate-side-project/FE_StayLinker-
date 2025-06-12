'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConfirmEmailCode, useRequestEmailVerification } from '@/querys/ValidationQuerys';
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
            fullName: '',
            email: '',
            code: '',
            password: '',
            confirmPassword: ''
        }
    });

    const { watch } = methods;
    const email = watch('email');
    const code = watch('code');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;
    const passwordState = methods.formState.errors.password ? 'error' : password ? 'filled' : undefined;

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
                    setCodeError('인증시간이 만료되었습니다. 다시 요청해주세요.');
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
                            {step === 2 ? '비밀번호 찾기' : '비밀번호 재설정'}
                        </p>

                        {step === 1 && (
                            <section className="flex flex-col gap-8">
                                <Input
                                    name="bussinessNumber"
                                    label="사업자등록번호"
                                    placeholder="‘-’  없이 입력해주세요."
                                />

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
                                        name="code"
                                        label="인증코드"
                                        placeholder=""
                                        maxLength={20}
                                        state={timerColor === 'green' ? 'filled' : codeError ? 'error' : 'default'}
                                        description={`• 인증코드는 수신된 시간으로부터 5분간 유효합니다.\n• 인증코드를 받지 못하신 경우, ‘인증요청’버튼을 다시 눌러주세요.`}
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
                                        다음
                                    </Button>
                                </div>
                            </section>
                        )}

                        {step === 2 && (
                            <section className="flex flex-col gap-8">
                                <Input
                                    name="password"
                                    label="새 비밀번호"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={togglePassword}
                                    description={`• 최소 6글자. 숫자와 특수문자 포함.\n• 대문자, 소문자 혼합.\n`}
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
                                    label="새 비밀번호 확인"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="ex)123@abcd"
                                    icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                    handleClickIcon={toggleConfirmPassword}
                                    description="• 비밀번호를 다시 한 번 입력해주세요."
                                    state={confirmPasswordState}
                                />

                                <div className="flex justify-center mt-12">
                                    <Button type="submit" priority="primary" size="md" halfWidth>
                                        변경
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
