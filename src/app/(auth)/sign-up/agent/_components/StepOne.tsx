'use client';

import Button from '@/components/Buttons/Button';
import DateInput from '@/components/Inputs/DateInput';
import Input from '@/components/Inputs/Input';
import { useModal } from '@/providers/ModalProvider';
import { useEffect, useRef, useState } from 'react';
import AgentSearchModal from './AgentSearchModal';
import AgentSearchResultCard from './AgentSearchResultCard';

export type BusinessInfoVerifyResponse = {
    businessCode: string;
    registrationCode: string;
    agentName: string;
    businessName: string;
    registDate: string;
    mnnmAddress: string;
    rdnmAddress: string;
    estbsBeginDe: string;
    estbsEndDe: string;
};

const StepOne = () => {
    const [searchResult, setSearchResult] = useState<BusinessInfoVerifyResponse | null>(null);
    const [confirmHandler, setConfirmHandler] = useState<(() => Promise<void>) | null>(null);

    const [businessLicenseFile, setBusinessLicenseFile] = useState<File | null>(null);
    const [officeLicenseFile, setOfficeLicenseFile] = useState<File | null>(null);

    const modal = useModal();

    const handleOpenAgentSearchModal = (): void => {
        modal.open({
            message: (
                <AgentSearchModal
                    onSelect={(data) => setSearchResult(data)}
                    onConfirmSubmit={async () => {
                        modal.close();
                    }}
                />
            ),
            onConfirm: async () => {
                if (confirmHandler) {
                    await confirmHandler();
                }
            },
            onCancel: () => modal.close(),
            confirmButtonContent: { children: '검색' },
            cancelButtonContent: { children: '취소' }
        });
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    //목데이터용 유즈이펙트
    useEffect(() => {
        const mockSearchResult: BusinessInfoVerifyResponse = {
            businessCode: '123-45-67890',
            registrationCode: '경기-2023-12345',
            agentName: '홍길동',
            businessName: '길동이공인중개사사무소',
            registDate: '2023-05-15',
            mnnmAddress: '경기도 수원시 팔달구 정조로 123',
            rdnmAddress: '팔달로 45번길 10',
            estbsBeginDe: '2023-01-01T00:00:00.000Z',
            estbsEndDe: '2030-12-31T23:59:59.999Z'
        };

        setSearchResult(mockSearchResult);
    }, []);
    return (
        <>
            {/* 중개사무소 조회 */}
            <section className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="pc-title-s-700">중개사무소 조회</p>
                        <p className="pc-body-m-500 text-information200">
                            조회하기 버튼 클릭 후, 중개사무소를 검색하면 관련 정보가 자동입력 됩니다.
                        </p>
                    </div>
                    <div className="w-[100px] h-[43px] mt-3">
                        <Button priority="secondary" onClick={handleOpenAgentSearchModal}>
                            조회하기
                        </Button>
                    </div>
                </div>

                {searchResult && (
                    <AgentSearchResultCard
                        agentName={searchResult.agentName}
                        businessName={searchResult.businessName}
                        registrationCode={searchResult.registrationCode}
                        address={`${searchResult.mnnmAddress} ${searchResult.rdnmAddress}`}
                    />
                )}
            </section>
            {/* 기본정보 입력 */}
            <Input name="phoneNumber" label="중개사무소 전화번호" placeholder="‘-’ 없이 입력해주세요." maxLength={30} />
            <Input
                name="registrationCode"
                label="부동산 사무실 등록번호"
                placeholder="‘-’ 를 반드시 포함해주세요."
                maxLength={30}
            />
            {searchResult && (
                <>
                    <Input
                        name="qualificationCode"
                        label="공인중개사 자격증번호"
                        placeholder="‘-’ 없이 입력해주세요."
                        maxLength={30}
                    />
                    <DateInput name="acquireDate" label="공인중개사 자격증 취득일" />
                </>
            )}
            <Input name="businessCode" label="사업자 등록번호" placeholder="‘-’ 없이 입력해주세요." maxLength={30} />

            {/* 서류제출 */}
            <section className="flex flex-col gap-6">
                <p className="pc-title-s-700">서류 제출</p>

                {/* 사업자등록증 첨부 */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <p className="pc-title-s-500">사업자 등록증 첨부</p>
                            <span className="text-gray500 text-sm">(최대 10MB)</span>
                        </div>
                        <p className="text-gray500 pc-body-m-500">
                            {businessLicenseFile ? businessLicenseFile.name : '파일을 선택해주세요.'}
                        </p>
                    </div>
                    <>
                        <Button onClick={handleClick} priority="secondary" size="sm" type="button">
                            첨부하기
                        </Button>

                        <input
                            ref={inputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log('선택된 파일:', file.name);
                                }
                            }}
                        />
                    </>
                </div>
                {/* 중개사무소 등록증 첨부 */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <p className="pc-title-s-500">중개사무소 등록증 첨부</p>
                            <span className="text-gray500 text-sm">(최대 10MB)</span>
                        </div>
                        <p className="text-gray500 pc-body-m-500">
                            {officeLicenseFile ? officeLicenseFile.name : '파일을 선택해주세요.'}
                        </p>
                    </div>
                    <>
                        <Button onClick={handleClick} priority="secondary" size="sm" type="button">
                            첨부하기
                        </Button>

                        <input
                            ref={inputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log('선택된 파일:', file.name);
                                }
                            }}
                        />
                    </>
                </div>
            </section>
        </>
    );
};

export default StepOne;
