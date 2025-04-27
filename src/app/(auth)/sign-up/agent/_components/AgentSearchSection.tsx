'use client';

import Button from '@/components/Buttons/Button';
import { useModal } from '@/providers/ModalProvider';
import { useState } from 'react';
import AgentSearchModal from './AgentSearchModal';
// ------------------------------보류-------------------------------
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

const AgentSearchSection = () => {
    const modal = useModal();
    const [searchResult, setSearchResult] = useState<BusinessInfoVerifyResponse | null>(null);
    const [confirmHandler, setConfirmHandler] = useState<(() => Promise<void>) | null>(null);

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
                    await confirmHandler(); // 검색 실행
                }
            },
            onCancel: () => modal.close(),
            confirmButtonContent: { children: '검색' },
            cancelButtonContent: { children: '취소' }
        });
    };

    return (
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

            {/* 조회 결과 */}
            {searchResult && (
                <div className="flex flex-col gap-1 mt-6">
                    <p>상호명: {searchResult.businessName}</p>
                    <p>대표자명: {searchResult.agentName}</p>
                    <p>등록번호: {searchResult.registrationCode}</p>
                    <p>
                        주소: {searchResult.mnnmAddress} {searchResult.rdnmAddress}
                    </p>
                </div>
            )}
        </section>
    );
};

export default AgentSearchSection;
