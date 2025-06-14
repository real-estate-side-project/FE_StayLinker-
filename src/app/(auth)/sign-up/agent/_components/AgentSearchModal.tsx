'use client';

import Dropdown from '@/components/DropDown/DropDown';
import Input from '@/components/Inputs/Input';
import Pagination from '@/components/Pagination';
import { useBusinessInfoVerify } from '@/querys/auth/BusinessQuerys';
import Image from 'next/image';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type AgentSearchModalProps = {
    onSelect: (data: any) => void;
    onConfirmSubmit: () => Promise<void>;
};

const items = [
    { label: '전체', value: '' },
    { label: '상호명', value: 'NAME' },
    { label: '대표 성명', value: 'AGENT_NAME' },
    { label: '중개등록번호', value: 'CERTIFICATE' }
];

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
    const [page, setPage] = useState(1);
    const { mutateAsync } = useBusinessInfoVerify();

    const handleConfirm = async () => {
        const data = methods.getValues();
        try {
            const res = await mutateAsync(data);
            onSelect(res.data);
            await onConfirmSubmit();
        } catch (error) {
            console.error('검색 실패', error);
        }
    };

    (methods as any).handleConfirm = handleConfirm;

    const totalPages = 42; // 전체 페이지 수

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <FormProvider {...methods}>
                <form className="w-[560px]">
                    <div className="flex flex-col justify-center">
                        <p className="pc-title-m-700 text-center py-[25px]">중개사무소 조회</p>
                        <div className="flex items-start justify-between gap-2 px-[33px] mt-3">
                            <Dropdown
                                name="searchType"
                                items={items}
                                onSelect={(val) => console.log('선택된 값:', val)}
                                design="filled"
                                size="sm"
                            />

                            <div className="w-[335px]">
                                <Input name="businessNumber" maxLength={30} placeholder="중개사무소를 검색해주세요." />
                            </div>

                            <Image src="/svg/search.svg" alt="search icon" width={43} height={43} />
                        </div>
                        <hr className="w-full border-t border-gray500" />
                        <div className="flex flex-col w-full  items-start gap-2 py-[89px] px-[84px]">
                            <div className="flex flex-col justify-center gap-12">
                                <p className="pc-body-s-500 text-center whitespace-nowrap">
                                    중개사무소 개설 등록 당시 신고한 내역을 기준으로 검색해주세요.
                                </p>
                                <p className="pc-body-s-500 text-center">
                                    상호명 / 대표 성명 / 중개등록번호 (‘-’ 포함)
                                </p>
                                <p className="pc-body-s-500 text-center">
                                    검색이 안된다면
                                    <span className="text-information200 underline font-semibold">직접 입력</span> 을
                                    클릭해주세요
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border border-black py-5 gap-4">
                            <div className="border px-6 py-5 mx-8 bg-white/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-100 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                                <div className="inline-flex justify-start items-center gap-4">
                                    <div
                                        data-color="Sub"
                                        data-type="Outline"
                                        className="w-24 h-6 px-2 rounded outline outline-1 outline-offset-[-1px] outline-blue-400 flex justify-center items-center gap-2.5"
                                    >
                                        <div className="text-center justify-start text-cyan-600 pc-body-s-500">
                                            상호명
                                        </div>
                                    </div>
                                    <div className="justify-center pc-body-s-700">(유)행복한부동산중개법인</div>
                                </div>
                                <div className="inline-flex justify-start items-center gap-4">
                                    <div
                                        data-color="Sub"
                                        data-type="Outline"
                                        className="w-24 h-6 px-2 rounded outline outline-1 outline-offset-[-1px] outline-blue-400 flex justify-center items-center gap-2.5"
                                    >
                                        <div className="text-center justify-start text-cyan-600 pc-body-s-500">
                                            대표 성명
                                        </div>
                                    </div>
                                    <div className="justify-center text-zinc-500 text-base font-medium font-['Pretendard'] leading-normal">
                                        오또환
                                    </div>
                                </div>
                                <div className="self-stretch inline-flex justify-start items-center gap-4">
                                    <div
                                        data-color="Sub"
                                        data-type="Outline"
                                        className="w-24 h-6 px-2 rounded outline outline-1 outline-offset-[-1px] outline-blue-400 flex justify-center items-center gap-2.5"
                                    >
                                        <div className="text-center justify-start text-cyan-600 pc-body-s-500 whitespace-nowrap">
                                            중개등록번호
                                        </div>
                                    </div>
                                    <div className="justify-center text-zinc-500 text-base font-medium font-['Pretendard'] leading-normal">
                                        48123-2018-00043
                                    </div>
                                </div>
                            </div>

                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                handleChangePage={handlePageChange}
                                visiblePageCount={5}
                            />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AgentSearchModal;
