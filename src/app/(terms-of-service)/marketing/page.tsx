const MarketingPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold text-center mb-8">마케팅 정보 수신 동의</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">1. 수신 항목 및 내용</h2>
                <p>
                    회사는 아래와 같은 마케팅 정보를 회원에게 제공합니다.
                    <br />
                    - 신규 서비스 출시, 이벤트 및 프로모션 안내
                    <br />
                    - 할인 쿠폰, 혜택 정보
                    <br />
                    - 맞춤형 추천 매물 및 커뮤니티 콘텐츠
                    <br />- 제휴사의 광고성 정보 (이메일, 문자, 앱 푸시 등)
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">2. 수신 방법</h2>
                <p>
                    - 이메일(E-mail)
                    <br />
                    - 문자메시지(SMS, LMS)
                    <br />- 모바일 푸시 알림(APP Push)
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">3. 보유 및 이용기간</h2>
                <p>
                    동의일로부터 회원 탈퇴 시 혹은 수신 거부 시까지 보유 및 이용됩니다.
                    <br />
                    단, 법령에서 별도로 정한 경우에는 해당 기간 동안 보관합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. 수신 동의 철회</h2>
                <p>
                    회원은 언제든지 마케팅 정보 수신을 철회할 수 있습니다.
                    <br />
                    - 서비스 내 알림 설정 메뉴
                    <br />
                    - 각 이메일/문자 내 수신거부 링크 클릭
                    <br />
                    철회 시 관련 광고성 정보 수신은 즉시 중단됩니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">5. 동의를 거부할 권리 및 불이익</h2>
                <p>
                    귀하는 본 마케팅 수신 동의를 거부할 수 있으며, 거부하더라도 서비스 이용에는 제한이 없습니다.
                    <br />
                    단, 마케팅 관련 혜택 및 이벤트 정보는 제공되지 않을 수 있습니다.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12 text-right">[시행일자: 2025년 6월 4일]</p>
        </div>
    );
};

export default MarketingPage;
