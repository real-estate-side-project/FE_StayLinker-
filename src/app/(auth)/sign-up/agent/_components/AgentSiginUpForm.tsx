'use client';

import Button from '@/components/Buttons/Button';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdKeyboardArrowRight } from 'react-icons/md';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

// 👉 form value 타입 정의
type AgentSignUpFormValues = {
    phoneNumber?: string;
    registrationCode?: string;
    qualificationCode?: string;
    acquireDate?: string;
    businessCode?: string;
    // StepTwo 필드도 여기 추가 가능
};

const AgentSiginUpForm = () => {
    const methods = useForm<AgentSignUpFormValues>({
        mode: 'onChange',
        defaultValues: {}
    });

    const onSubmit = (data: AgentSignUpFormValues) => {
        console.log('Form submitted:', JSON.stringify(data, null, 2));
    };

    const [step, setStep] = useState(1);

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full mb-4 gap-12">
                        <section>
                            <p className="pc-title-l-700 mb-10 text-center">Agent Join</p>
                            <p className="pc-body-s-500 text-center text-information200">
                                • 국가공간정보포털의 부동산중개업 정보에 등록된 대표 공인중개사만 회원가입이 가능합니다.
                            </p>
                            <p className="pc-body-s-500 text-center text-information200">
                                • 스테이링커는 중개사무소를 개설 등록한 대표자(개업공인중개사)가 회원가입 가능합니다.
                            </p>
                        </section>

                        {step === 1 && <StepOne />}
                        {step === 2 && <StepTwo />}

                        {/* 다음 , 가입 버튼 */}
                        <div className="flex flex-col w-full items-center justify-center gap-4 mt-8">
                            <Button
                                priority="primary"
                                size="md"
                                halfWidth
                                onClick={() => setStep((prev) => (prev === 1 ? 2 : 1))}
                            >
                                <p className="flex items-center justify-center gap-2 pc-body-l-500">
                                    {step === 1 ? '다음' : '가입하기'}
                                    <MdKeyboardArrowRight />
                                </p>
                            </Button>

                            <div className="flex w-full justify-center text-gray-500 text-[16px]">
                                <p>
                                    Already have an account?
                                    <Link href={`/log-in/agent`}>
                                        <span className="text-sub500 underline"> Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default AgentSiginUpForm;
