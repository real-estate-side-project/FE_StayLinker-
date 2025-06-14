'use client';

import Button from '@/components/Buttons/Button';
import Dropdown from '@/components/DropDown/DropDown';
import Input from '@/components/Inputs/Input';
import { useConfirmEmailCode, useRequestEmailVerification } from '@/querys/auth/ValidationQuerys';
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { languageOptions } from '../../customer/_utils/optionsData';
import TermsSection from './TermSection';

const StepTwo = () => {
    const { control, watch, formState } = useFormContext();
    const email = useWatch({ control, name: 'email' });
    const code = useWatch({ control, name: 'code' });

    const { mutate: requestEmail } = useRequestEmailVerification();
    const { mutate: confirmCode, isPending: confirmPending } = useConfirmEmailCode();

    const [timeLeft, setTimeLeft] = useState(0);
    const [timerColor, setTimerColor] = useState<'red' | 'green'>('red');
    const [timerText, setTimerText] = useState('');
    const [codeError, setCodeError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const resolvedInputState = timerColor === 'green' ? 'filled' : codeError ? 'error' : 'default';
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const confirmPasswordState = confirmPassword ? (passwordsMatch ? 'filled' : 'error') : undefined;
    const passwordState = formState.errors.password ? 'error' : password ? 'filled' : undefined;

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
                    setCodeError('The verification code you have entered is not valid. Please try again.');
                }
            }
        );
    };

    return (
        <>
            <Input
                name="email"
                label="이메일"
                placeholder="ex)abcd@gmail.com"
                description="• 로그인 아이디로 사용됩니다."
                maxLength={50}
                validationMessage={''}
                buttonSlot={
                    <Button priority="secondary" fullWidth onClick={handleRequestEmail} isDisabled={!email?.trim()}>
                        인증요청
                    </Button>
                }
            />
            <Input
                name="code"
                label="인증 코드"
                placeholder=""
                maxLength={20}
                state={resolvedInputState}
                rightSlot={timeLeft > 0 && <span className="font-semibold text-danger600">{timerText}</span>}
                buttonSlot={
                    <Button priority="secondary" fullWidth onClick={handleVerifyCode} isDisabled={!code?.trim()}>
                        인증
                    </Button>
                }
                validationMessage={codeError}
            />

            <Input
                name="password"
                label="비밀번호"
                type={showPassword ? 'text' : 'password'}
                placeholder="ex)123@abcd"
                icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                handleClickIcon={togglePassword}
                description={`• 최소 6글자. 숫자와 특수문자 포함.\n• 대문자, 소문자 혼합.`}
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
                label="비밀번호 확인"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="ex)123@abcd"
                icon={showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                handleClickIcon={toggleConfirmPassword}
                description={`• 비밀번호를 다시 한 번 입력해주세요.`}
                state={confirmPasswordState}
            />
            <div className="flex flex-col gap-3">
                <Dropdown
                    name="languages"
                    label="언어"
                    placeholder="ex)한국어"
                    items={languageOptions}
                    onSelect={() => {}}
                    size="full"
                    description={`• 주사용 언어를 선택해주세요.`}
                />
            </div>

            <TermsSection />
        </>
    );
};

export default StepTwo;
