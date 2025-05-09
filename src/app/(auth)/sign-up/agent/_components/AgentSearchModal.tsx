'use client';

import Input from '@/components/Inputs/Input';
import { useBusinessInfoVerify } from '@/querys/BusinessQuerys';
import { FormProvider, useForm } from 'react-hook-form';

type AgentSearchModalProps = {
    onSelect: (data: any) => void;
    onConfirmSubmit: () => Promise<void>;
};

const AgentSearchModal = ({ onSelect, onConfirmSubmit }: AgentSearchModalProps) => {
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            businessNumber: '',
            registrationNumber: '',
            name: '',
            agentName: '',
            registDate: ''
        }
    });

    const { mutateAsync } = useBusinessInfoVerify();

    const handleConfirm = async () => {
        const data = methods.getValues();
        try {
            const res = await mutateAsync(data);
            onSelect(res.data); // 부모에 조회 결과 넘김
            await onConfirmSubmit(); // 모달 닫기
        } catch (error) {
            console.error('검색 실패', error);
        }
    };

    // methods 자체에 handleConfirm 저장해버림
    (methods as any).handleConfirm = handleConfirm;

    return (
        <div className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form className="w-[600px]">
                    <div className="flex flex-col w-full mb-4 gap-3">
                        <Input name="businessNumber" label="사업자등록번호" maxLength={30} />
                        <Input name="registrationNumber" label="부동산등록번호" maxLength={30} />
                        <Input name="name" label="상호명" maxLength={30} />
                        <Input name="agentName" label="대표자명" maxLength={30} />
                        <Input name="registDate" label="등록일자" maxLength={30} />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AgentSearchModal;
