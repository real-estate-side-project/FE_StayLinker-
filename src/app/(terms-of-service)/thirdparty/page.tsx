const ThirdPartyPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold text-center mb-8">개인정보 제3자 제공 동의</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">1. 개인정보를 제공받는 자</h2>
                <p>
                    - 부동산 중개업체 (사업자회원)
                    <br />
                    - 중고거래 상대방 (직거래 사용자)
                    <br />- 결제 대행사, 본인 인증기관 등 제휴 서비스 제공업체
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">2. 제공하는 개인정보 항목</h2>
                <p>
                    - 이름, 휴대전화번호, 이메일
                    <br />
                    - 매물 등록 시 필요한 경우: 주소, 거래 내역
                    <br />- 서비스 이용 기록 및 접속 정보 (IP, 기기 정보 등)
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">3. 제공받는 자의 개인정보 이용 목적</h2>
                <p>
                    - 매물 거래 관련 사용자 간의 연락 및 상담
                    <br />
                    - 본인 확인 및 계약 진행
                    <br />- 중개서비스 제공 및 고객 문의 대응
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. 보유 및 이용기간</h2>
                <p>
                    개인정보는 제공 목적 달성 후 지체 없이 파기됩니다.
                    <br />
                    단, 관련 법령에 따라 보존이 필요한 경우 해당 법령에 따라 일정 기간 보존될 수 있습니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">5. 동의를 거부할 권리 및 불이익</h2>
                <p>
                    귀하는 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다.
                    <br />
                    다만, 동의를 거부할 경우 서비스 이용(매물 거래, 연락, 전자계약 등)에 제한이 있을 수 있습니다.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12 text-right">[시행일자: 2025년 6월 4일]</p>
        </div>
    );
};

export default ThirdPartyPage;
