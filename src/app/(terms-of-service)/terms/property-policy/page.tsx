'use client';

const ListingPolicyPage = () => {
    return (
        <main className="mx-60 my-32 space-y-8">
            <h1 className="pc-title-l-700 text-center mb-10">매물관리 정책</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. 목적</h2>
                <p>
                    Staylinker(이하 &apos;회사&apos;)는 안전하고 신뢰할 수 있는 부동산 서비스를 제공하기 위하여 등록
                    매물에 대한 체계적인 관리와 허위매물 방지를 목적으로 본 정책을 수립합니다.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. 적용 대상</h2>
                <p>사업자 회원만 해당됩니다.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. 매물 등록 기준</h2>
                <ul className="list-disc list-inside">
                    <li>주거용 및 상업용 매물 등록 가능</li>
                    <li>전월세, 매매, 단기임대 유형만 등록 가능</li>
                    <li>매물은 등기부등본 또는 건축물대장 기준의 정보로 등록해야 함</li>
                    <li>등록 사진은 워터마크 없는 실사진이어야 함</li>
                    <li>광고 외 상업성 콘텐츠(이삿짐, 용달 등) 금지</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. 허위매물 정의</h2>
                <ul className="list-disc list-inside">
                    <li>실제와 다른 정보 (가격, 위치, 사진, 설명 등)</li>
                    <li>이미 거래가 완료된 매물</li>
                    <li>타 매물 권유를 위한 유도성 매물</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. 허위매물 처리 정책</h2>
                <ul className="list-disc list-inside">
                    <li>회사는 허위매물로 의심되는 사례에 대해 자체적으로 검토 및 판단을 진행합니다.</li>
                    <li>회원 간 신고, 내부 모니터링, 사용자 제보 등을 바탕으로 허위매물 여부를 확인할 수 있습니다.</li>
                    <li>허위매물로 판단될 경우, 해당 매물은 사전 고지 없이 삭제되거나 비노출 처리될 수 있습니다.</li>
                    <li>
                        반복적으로 허위매물을 등록하는 경우, 경고 누적에 따라 등록 제한 등의 조치를 받을 수 있습니다.
                    </li>
                    <li>허위매물 여부에 대한 구체적인 판단 기준 및 처리 방식은 회사 내부 운영 정책에 따릅니다.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. 신고 및 검수 절차</h2>
                <ul className="list-disc list-inside">
                    <li>신고가 접수되면 내부 검토를 통해 허위 여부를 판단합니다.</li>
                    <li>검토 결과에 따라 매물 비노출, 삭제, 경고 등 조치가 이루어질 수 있습니다.</li>
                    <li>신고 처리 결과 및 제재 내용은 회원에게 안내됩니다.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. 경고 및 제재 정책</h2>
                <ul className="list-disc list-inside">
                    <li>허위매물 등록 또는 신고 미처리 시 경고 부과</li>
                    <li>경고 3회 누적 시 7일간 매물 등록 및 노출 제한</li>
                    <li>경고 누적 기준은 사업자 번호 기준으로 관리됨</li>
                    <li>허위 매물은 1회 적발 시 즉시 블랙리스트 처리될 수 있음</li>
                    <li>사업자에 대한 신고가 3회 이상 누적될 경우 블랙리스트에 등록될 수 있음</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. 사업자 외 회원의 등록 제한</h2>
                <ul className="list-disc list-inside">
                    <li>매물 등록은 사업자 회원에 한하여 가능합니다.</li>
                    <li>개인 회원이 매물을 등록할 경우 비노출 처리되며, 반복 시 제한 조치가 취해질 수 있습니다.</li>
                    <li>무단 등록된 연락처는 블랙리스트로 등록되어 재사용이 불가능합니다.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. 고지 의무</h2>
                <p>정책 변경 시, 최소 7일 전 공지사항을 통해 사전 고지됩니다.</p>
                <p className="mt-2">
                    공고일자: 2025년 3월 17일
                    <br />
                    시행일자: 2025년 3월 24일
                </p>
            </section>
        </main>
    );
};

export default ListingPolicyPage;
