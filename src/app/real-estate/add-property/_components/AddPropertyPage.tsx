'use client';

import Button from '@/components/Buttons/Button';
import { createContext, ReactNode, useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Step1BasicInfo from './_steps/Step1BasicInfo';
import Step2TradeInfo from './_steps/Step2TradeInfo';
import Step3AdditionalInfo from './_steps/Step3AdditionalInfo';
import Step4PhotoInfo from './_steps/Step4PhotoInfo';
import Step5Description from './_steps/Step5Description';

interface Step {
    label: string;
    component: React.ComponentType;
}

const steps: Step[] = [
    { label: '기본정보', component: Step1BasicInfo },
    { label: '거래정보', component: Step2TradeInfo },
    { label: '추가정보', component: Step3AdditionalInfo },
    { label: '사진정보', component: Step4PhotoInfo },
    { label: '상세설명', component: Step5Description }
];

interface StepFormContextType {
    step: number;
    next: () => void;
    back: () => void;
}

const StepFormContext = createContext<StepFormContextType | null>(null);

const StepFormProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState<number>(0);
    const methods = useForm({ mode: 'onChange' });

    const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
    const back = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <StepFormContext.Provider value={{ step, next, back }}>
            <FormProvider {...methods}>{children}</FormProvider>
        </StepFormContext.Provider>
    );
};

const useStepForm = (): StepFormContextType => {
    const context = useContext(StepFormContext);
    if (!context) throw new Error('useStepForm must be used within StepFormProvider');
    return context;
};

const StepContainer = () => {
    const { step, next, back } = useStepForm();
    const CurrentStep = steps[step].component;

    return (
        <div className="space-y-6">
            <CurrentStep />

            <div className="mt-6">
                {step > 0 ? (
                    <div className="flex justify-between">
                        <div className="w-1/2 pr-2">
                            <Button priority="secondary" size="md" onClick={back} fullWidth>
                                이전
                            </Button>
                        </div>
                        <div className="w-1/2 pl-2">
                            <Button priority="primary" size="md" onClick={next} fullWidth>
                                {step === steps.length - 1 ? '등록하기' : '다음'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <Button priority="primary" size="md" onClick={next} fullWidth>
                                다음
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const AddPropertyPage = () => {
    return (
        <StepFormProvider>
            <main className="max-w-4xl mx-auto my-[72px]">
                <h1 className="pc-title-l-700 text-center  mb-[40px]">매물 등록</h1>
                <StepContainer />
            </main>
        </StepFormProvider>
    );
};

export default AddPropertyPage;
