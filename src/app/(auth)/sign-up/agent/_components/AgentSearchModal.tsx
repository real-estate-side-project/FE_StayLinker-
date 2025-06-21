'use client';

import Dropdown from '@/components/DropDown/DropDown';
import Input from '@/components/Inputs/Input';
import Pagination from '@/components/Pagination';
import { useBusinessInfoVerify } from '@/querys/auth/BusinessQuerys';
import { createQueryStringFromObject, parseSearchParamsToObject, shallowEqual } from '@/utils/queryString.util';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BusinessInfoVerifyResponse } from './StepOne';

type AgentSearchFormValues = {
    searchInput: string;
    searchType: string;
    page: number;
};

const items = [
    { label: '전체', value: '' },
    { label: '상호명', value: 'NAME' },
    { label: '대표 성명', value: 'AGENT_NAME' },
    { label: '중개등록번호', value: 'CERTIFICATE' }
];

interface AgentSearchModalProps {
    onSelect: (data: BusinessInfoVerifyResponse) => void;
}

const AgentSearchModal = ({ onSelect }: AgentSearchModalProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryBody = parseSearchParamsToObject(searchParams);

    const methods = useForm<AgentSearchFormValues>({
        mode: 'onChange',
        defaultValues: {
            searchInput: '',
            searchType: '',
            page: 1
        }
    });

    const [searchTriggered, setSearchTriggered] = useState(false);
    const { mutate, data, isPending } = useBusinessInfoVerify();

    const onSearch = () => {
        const { searchInput, searchType, page } = methods.getValues();
        const query = { type: searchType || '', pageNumber: page, keyword: searchInput || '' };
        const queryString = createQueryStringFromObject(query);

        router.push(`${pathname}${queryString}`);
        mutate(query);
        setSearchTriggered(true);
    };

    const onMovePage = (newPage: number) => {
        methods.setValue('page', newPage);
        const { searchInput, searchType } = methods.getValues();
        const query = { type: searchType || '', pageNumber: newPage, keyword: searchInput || '' };
        const queryString = createQueryStringFromObject(query);

        router.push(`${pathname}${queryString}`);
        mutate(query, { onSuccess: () => setSearchTriggered(true) });
    };

    useCallback(() => {
        const methodValues = methods.getValues();
        if (!shallowEqual(queryBody, methodValues)) {
            methods.reset({
                searchInput: String(queryBody.keyword) || '',
                searchType: String(queryBody.type || ''),
                page: Number(queryBody.pageNumber) || 1
            });
        }
    }, [queryBody, methods]);

    useEffect(() => {
        if (queryBody.pageNumber) {
            methods.setValue('page', Number(queryBody.pageNumber));
        }
    }, [queryBody.pageNumber, methods]);

    const totalPages = data?.data?.totalPages || 1;
    const resultList = data?.data?.list || [];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <FormProvider {...methods}>
                <form className="w-[560px]" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col justify-center">
                        <p className="pc-title-m-700 text-center py-[25px]">중개사무소 조회</p>
                        <div className="flex items-start justify-between gap-2 px-[33px] mt-3">
                            <Dropdown name="searchType" items={items} design="filled" size="sm" />
                            <div className="w-[335px]">
                                <Input name="searchInput" maxLength={30} placeholder="중개사무소를 검색해주세요." />
                            </div>
                            <button type="button" onClick={onSearch}>
                                <Image
                                    src="/svg/search.svg"
                                    alt="search icon"
                                    width={43}
                                    height={43}
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                        <hr className="w-full border-t border-gray500" />

                        {(!searchTriggered || !queryBody.keyword) && (
                            <div className="flex flex-col w-full items-start gap-2 py-[89px] px-[84px]">
                                <div className="flex flex-col justify-center gap-12">
                                    <p className="pc-body-s-500 text-center whitespace-nowrap">
                                        중개사무소 개설 등록 당시 신고한 내역을 기준으로 검색해주세요.
                                    </p>
                                    <p className="pc-body-s-500 text-center">
                                        상호명 / 대표 성명 / 중개등록번호 (‘-’ 포함)
                                    </p>
                                </div>
                            </div>
                        )}

                        {searchTriggered && resultList.length === 0 && (
                            <div className="flex flex-col w-full items-center justify-center py-16">
                                <p className="pc-body-s-500 text-center">검색 결과가 없습니다.</p>
                            </div>
                        )}

                        {isPending && (
                            <div className="flex flex-col w-full items-center justify-center py-16">
                                <p className="pc-body-s-500 text-center">로딩중입니다...</p>
                            </div>
                        )}

                        {resultList.length > 0 && (
                            <div className="flex flex-col py-5 gap-4">
                                {resultList.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => onSelect(item)}
                                        className="border px-6 py-5 mx-8 bg-white/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-100 inline-flex flex-col justify-start items-start gap-4 overflow-hidden cursor-pointer hover:bg-gray-100 transition"
                                    >
                                        <div className="inline-flex justify-start items-center gap-4">
                                            <div className="w-24 h-6 px-2 rounded outline outline-1 outline-blue-400 flex justify-center items-center">
                                                <div className="text-cyan-600 pc-body-s-500">상호명</div>
                                            </div>
                                            <div className="pc-body-s-700">{item.businessName}</div>
                                        </div>

                                        <div className="inline-flex justify-start items-center gap-4">
                                            <div className="w-24 h-6 px-2 rounded outline outline-1 outline-blue-400 flex justify-center items-center">
                                                <div className="text-cyan-600 pc-body-s-500">대표 성명</div>
                                            </div>
                                            <div className="text-zinc-500 text-base font-medium">{item.agentName}</div>
                                        </div>

                                        <div className="inline-flex justify-start items-center gap-4">
                                            <div className="w-24 h-6 px-2 rounded outline outline-1 outline-blue-400 flex justify-center items-center">
                                                <div className="text-cyan-600 pc-body-s-500 whitespace-nowrap">
                                                    중개등록번호
                                                </div>
                                            </div>
                                            <div className="text-zinc-500 text-base font-medium">
                                                {item.businessCertificate}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Pagination
                                    currentPage={methods.getValues('page')}
                                    totalPages={totalPages}
                                    handleChangePage={onMovePage}
                                    visiblePageCount={5}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AgentSearchModal;
