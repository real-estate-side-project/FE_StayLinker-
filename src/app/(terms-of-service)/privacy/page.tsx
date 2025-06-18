const PrivacyPage = () => {
    return (
        <div className="mx-60 my-32 space-y-8 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold text-center mb-8">개인정보 수집 및 이용 동의</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">1. 수집하는 개인정보 항목</h2>
                <p>
                    회사는 회원가입, 서비스 이용, 고객문의 등을 위해 아래와 같은 개인정보를 수집합니다.
                    <br />
                    - 필수항목: 이름, 이메일, 휴대전화번호, 비밀번호
                    <br />
                    - 선택항목: 주소, 생년월일, 프로필 사진
                    <br />- 서비스 이용 중 자동 수집 항목: 접속 IP, 브라우저 종류, 서비스 이용 기록, 쿠키
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">2. 개인정보 수집 및 이용 목적</h2>
                <p>
                    회사는 수집한 개인정보를 다음 목적에 한하여 이용합니다.
                    <br />
                    - 회원가입 및 본인 확인
                    <br />
                    - 매물 등록, 열람, 문의 등 서비스 제공
                    <br />
                    - 고객 민원 처리 및 공지사항 전달
                    <br />
                    - 불법 이용 방지 및 부정 이용 확인
                    <br />- 서비스 개선을 위한 통계 분석
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">3. 개인정보 보유 및 이용기간</h2>
                <p>
                    - 회원 탈퇴 시까지 보관하며, 관련 법령에 따라 보존이 필요한 경우에는 해당 법령에 따라 보관합니다.
                    <br />
                    - 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 다음 항목은 일정 기간 보관됩니다:
                    <br />
                    &nbsp;&nbsp;ㆍ계약 또는 청약 철회 기록: 5년
                    <br />
                    &nbsp;&nbsp;ㆍ대금결제 및 재화 등의 공급 기록: 5년
                    <br />
                    &nbsp;&nbsp;ㆍ소비자 불만 또는 분쟁처리 기록: 3년
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. 개인정보 수집 동의 거부권 및 불이익</h2>
                <p>
                    이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.
                    <br />
                    다만, 동의를 거부할 경우 서비스 이용(회원가입, 매물 등록 등)에 제한이 있을 수 있습니다.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12 text-right">[시행일자: 2025년 6월 4일]</p>
        </div>
    );
};

export default PrivacyPage;
