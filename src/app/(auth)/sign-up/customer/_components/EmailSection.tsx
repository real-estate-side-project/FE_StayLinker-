'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useConfirmEmailCode, useRequestEmailVerification } from '@/querys/ValidationQuerys';
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const EmailSection = () => {
    const { control } = useFormContext();

    const email = useWatch({ control, name: 'email' });
    const code = useWatch({ control, name: 'code' });

    const { mutate: requestEmail } = useRequestEmailVerification();
    const { mutate: confirmCode, isPending: confirmPending } = useConfirmEmailCode();

    const [timeLeft, setTimeLeft] = useState(0);
    const [timerColor, setTimerColor] = useState<'red' | 'green'>('red');
    const [timerText, setTimerText] = useState('');
    const [codeError, setCodeError] = useState('');

    const resolvedInputState = timerColor === 'green' ? 'filled' : codeError ? 'error' : 'default';

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
        <div className="flex flex-col gap-6">
            <Input
                name="email"
                label="ID"
                placeholder="ex)abcd@gmail.com"
                description="• Must be your email"
                maxLength={50}
                state={resolvedInputState}
                validationMessage={''}
                buttonSlot={
                    <Button priority="secondary" fullWidth onClick={handleRequestEmail} isDisabled={!email?.trim()}>
                        Request
                    </Button>
                }
            />

            <Input
                name="code"
                label="Verification Code"
                placeholder=""
                maxLength={20}
                state={resolvedInputState}
                description={`• The verification code is valid for 5 minutes from the time received.\n• If you don't receive verification code, please press the ‘Request’ button again.`}
                rightSlot={timeLeft > 0 && <span className="font-semibold text-danger600">{timerText}</span>}
                buttonSlot={
                    <Button priority="secondary" fullWidth onClick={handleVerifyCode} isDisabled={!code?.trim()}>
                        {confirmPending ? 'Verifying...' : 'Verify'}
                    </Button>
                }
                validationMessage={codeError}
            />
        </div>
    );
};

export default EmailSection;
