'use client';

import Button from '@/components/Buttons/Button';
import DateInput from '@/components/Inputs/DateInput';
import Input from '@/components/Inputs/Input';
import { useModal } from '@/providers/ModalProvider';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import AgentSearchModal from './AgentSearchModal';
import AgentSearchResultCard from './AgentSearchResultCard';

type AgentSignUpFormValues = {
    businessCode: string;
    businessName: string;
    agentName: string;
    registrationCode: string;
    phoneNumber: string;
    email: string;
    password: string;
    address: string;
    businessCertificate: string;
    nickName: string;
    openingDate: string;
};

export type BusinessInfoVerifyResponse = {
    businessName: string;
    address: string;
    businessCertificate: string;
    agentName: string;
};

const StepOne = () => {
    const [searchResult, setSearchResult] = useState<BusinessInfoVerifyResponse | null>(null);
    const [businessLicenseFile, setBusinessLicenseFile] = useState<File | null>(null);
    const [officeLicenseFile, setOfficeLicenseFile] = useState<File | null>(null);

    const modal = useModal();
    const { setValue } = useFormContext<AgentSignUpFormValues>();

    const handleSelectBusinessInfo = (data: BusinessInfoVerifyResponse) => {
        setSearchResult(data);

        setValue('businessName', data.businessName);
        setValue('agentName', data.agentName);
        setValue('registrationCode', data.businessCertificate);
        setValue('address', data.address);

        modal.close();
    };

    const handleOpenAgentSearchModal = (): void => {
        modal.open({
            message: <AgentSearchModal onSelect={handleSelectBusinessInfo} />,
            hasCancel: false,
            backgroundClassName: 'bg-white/70',
            customButtons: (
                <div className="flex gap-[2px] w-[84px] h-[36px] my-8">
                    <Button priority="gray" onClick={modal.close}>
                        닫기 <Image src="/svg/vector.svg" alt="alert icon" width={20} height={20} />
                    </Button>
                </div>
            )
        });
    };

    const businessLicenseInputRef = useRef<HTMLInputElement>(null);
    const officeLicenseInputRef = useRef<HTMLInputElement>(null);

    const handleClickBusinessLicense = () => {
        businessLicenseInputRef.current?.click();
    };

    const handleClickOfficeLicense = () => {
        officeLicenseInputRef.current?.click();
    };

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
                        <Button priority="secondary" onClick={handleOpenAgentSearchModal} type="button">
                            조회하기
                        </Button>
                    </div>
                </div>

                {searchResult && (
                    <AgentSearchResultCard
                        agentName={searchResult.agentName}
                        businessName={searchResult.businessName}
                        registrationCode={searchResult.businessCertificate}
                        address={`${searchResult.address}`}
                    />
                )}
            </section>

            {/* 기본정보 입력 */}
            <Input name="phoneNumber" label="중개사무소 전화번호" placeholder="‘-’ 없이 입력해주세요." maxLength={30} />
            {/* 이 값 없는듯? */}
            <Input
                name="nickName"
                label="부동산 사무실 등록번호"
                placeholder="‘-’ 를 반드시 포함해주세요."
                maxLength={30}
            />
            <Input
                name="businessCertificate"
                label="공인중개사 자격증번호"
                placeholder="‘-’ 없이 입력해주세요."
                maxLength={30}
            />
            <DateInput name="openingDate" label="공인중개사 자격증 취득일" />
            <Input name="businessCode" label="사업자 등록번호" placeholder="‘-’ 없이 입력해주세요." maxLength={30} />

            {/* 서류제출 */}
            <section className="flex flex-col gap-6">
                <p className="pc-title-s-700">서류 제출</p>

                {/* 사업자등록증 첨부 */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <p className="pc-title-s-500">사업자 등록증 첨부</p>
                            <span className="text-gray500 text-sm">(최대 5MB)</span>
                        </div>
                        <p className="text-gray500 pc-body-m-500">
                            {businessLicenseFile ? businessLicenseFile.name : '파일을 선택해주세요.'}
                        </p>
                    </div>
                    <>
                        <Button onClick={handleClickBusinessLicense} priority="secondary" size="sm" type="button">
                            첨부하기
                        </Button>

                        <input
                            ref={businessLicenseInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file && file.size <= 5 * 1024 * 1024) {
                                    setBusinessLicenseFile(file);
                                } else if (file) {
                                    alert('파일 크기는 5MB를 초과할 수 없습니다.');
                                    e.target.value = '';
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
                            <span className="text-gray500 text-sm">(최대 5MB)</span>
                        </div>
                        <p className="text-gray500 pc-body-m-500">
                            {officeLicenseFile ? officeLicenseFile.name : '파일을 선택해주세요.'}
                        </p>
                    </div>
                    <>
                        <Button onClick={handleClickOfficeLicense} priority="secondary" size="sm" type="button">
                            첨부하기
                        </Button>

                        <input
                            ref={officeLicenseInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file && file.size <= 5 * 1024 * 1024) {
                                    setOfficeLicenseFile(file);
                                } else if (file) {
                                    alert('파일 크기는 5MB를 초과할 수 없습니다.');
                                    e.target.value = '';
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
