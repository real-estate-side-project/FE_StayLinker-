'use client';

import Button from '@/components/Buttons/Button';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const TermsPage = () => {
    return (
        <div className="mx-60 my-32 space-y-8 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold text-center mb-8">스테이 링커 이용약관</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">제1조 (목적)</h2>
                <p>
                    이 약관은 staylinker(스테이링커)(이하 &quot;회사&quot;)가 제공하는 staylinker 인터넷 서비스 및
                    모바일 애플리케이션(이하 &quot;서비스&quot;)에서 제공하는 매물 정보 제공, 중개 플랫폼, 커뮤니티 운영
                    등 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을
                    목적으로 합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제2조 (정의)</h2>
                <p>
                    &quot;서비스&quot;란 회사가 제공하는 부동산 및 중고거래 매물 등록, 검색, 문의, 커뮤니티 운영 등
                    인터넷 및 모바일 애플리케이션을 통해 제공되는 모든 서비스를 말합니다.
                    <br />
                    &quot;회원&quot;이란 회사의 서비스에 접속하여 본 약관에 따라 이용계약을 체결하고, 아이디(ID)를
                    부여받아 회사가 제공하는 서비스를 이용하는 자로서, 일반회원(소비자)과 사업자회원으로 구분됩니다.
                    <br />
                    &quot;일반회원&quot;이라 함은 회사가 정한 절차에 따라 회원가입을 한 개인 이용자로서 매물 정보를
                    검색, 열람하거나 커뮤니티를 이용할 수 있는 자를 말합니다.
                    <br />
                    &quot;사업자회원&quot;이라 함은 중개업자, 통신판매업자 등 사업자로서 회사가 정한 절차에 따라 회원
                    가입을 마친 자를 말하며, 매물 등록 등의 활동이 가능합니다.
                    <br />
                    &quot;매물&quot;이란 사업자회원이 등록한 부동산 또는 중고거래 대상의 정보로서, 위치정보, 가격,
                    상세설명 등을 포함합니다.
                    <br />
                    &quot;게시물&quot;이란 회원이 서비스 내에 게시한 텍스트, 이미지, 파일 등 모든 정보를 말합니다.
                    <br />
                    &quot;위치정보&quot;란 특정 개인 또는 사물을 식별할 수 있는 위치에 관한 정보로, 매물의 위치 또는
                    회원의 현재 위치를 포함합니다.
                    <br />
                    &quot;신용정보&quot;란 금융거래 등의 신용도를 판단할 수 있는 일체의 정보를 말합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제3조 (약관의 명시와 개정)</h2>
                <p>
                    회사는 본 약관의 내용을 회원이 알 수 있도록 서비스 내에 게시하거나 연결화면을 통해 제공합니다.
                    <br />
                    회사는 관계법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                    <br />
                    회사가 약관을 개정할 경우, 개정 사유 및 적용 일자를 명시하여 사전 공지하며, 중요한 내용일 경우 30일
                    전부터 공지합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제4조 (회원의 의무 및 제재 기준)</h2>
                <p>
                    사업자회원은 허위 매물을 등록할 수 없으며, 1회 적발 시 즉시 블랙리스트 등재됩니다.
                    <br />
                    신고가 3회 누적될 경우 계정이 정지됩니다.
                    <br />
                    일반회원은 다음의 커뮤니티 이용 제한 기준을 따릅니다:
                    <br />
                    - 최초 신고 3회: 이용 정지 1주일
                    <br />
                    - 누적 신고 5회 초과: 이용 정지 1개월
                    <br />
                    - 누적 신고 10회 초과: 영구 정지
                    <br />
                    회원은 타인의 권리를 침해하거나 법령 및 약관에 위반하는 행위를 해서는 안 됩니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제5조 (서비스의 제공 및 변경)</h2>
                <p>
                    회사는 회원에게 다음 각 호의 서비스를 제공합니다:
                    <br />
                    - 부동산 및 중고거래 매물의 열람 및 등록
                    <br />
                    - 사용자 간 직접 연결 기능 (거래는 사용자 책임)
                    <br />
                    - 커뮤니티 및 정보 콘텐츠 제공
                    <br />
                    회사는 서비스 개선 또는 기술적 사유로 서비스 내용을 변경할 수 있으며, 변경 시 사전 공지합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제6조 (서비스의 중단)</h2>
                <p>
                    회사는 다음의 사유로 서비스 제공을 일시 중단할 수 있습니다:
                    <br />
                    - 천재지변, 정전 등 불가항력적 사유
                    <br />
                    - 시스템 점검, 유지보수
                    <br />
                    - 해킹 또는 기타 긴급 상황 발생 시
                    <br />
                    회사는 불가피한 사유로 서비스를 중단하는 경우 지체 없이 그 사유를 고지합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제7조 (게시물 및 파일 업로드)</h2>
                <p>
                    회원은 자신의 책임 하에 게시물을 작성하며, 타인의 권리를 침해하지 않아야 합니다.
                    <br />
                    회사는 법령에 위반되거나 허위, 음란, 명예훼손, 저작권 침해 등 부적절한 게시물은 사전 통보 없이
                    삭제할 수 있습니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제8조 (정보 수집 및 이용 동의)</h2>
                <p>
                    회사는 서비스 운영을 위해 다음의 정보를 수집하며, 관련 법령에 따라 별도 동의를 받습니다:
                    <br />
                    - 개인정보 수집 및 이용 동의
                    <br />
                    - 개인정보 제3자 제공 동의
                    <br />
                    - 위치정보 이용약관 동의
                    <br />
                    - 마케팅 수신 동의
                    <br />
                    수집 항목에는 이름, 연락처, 위치정보, 거래 정보, 신용정보 등이 포함될 수 있습니다.
                    <br />
                    회사는 개인정보보호법, 위치정보법, 신용정보법을 준수합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제9조 (책임의 제한 및 면책)</h2>
                <p>
                    회사는 회원 간 거래의 당사자가 아니며, 거래로 발생한 분쟁에 책임을 지지 않습니다.
                    <br />
                    회원이 게재한 정보의 진위 및 법적 책임은 해당 회원에게 있으며, 회사는 이에 대한 신뢰성, 적법성을
                    보장하지 않습니다.
                    <br />
                    회사는 고의 또는 중대한 과실이 없는 한 서비스 이용 중 발생한 손해에 대해 책임을 지지 않습니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제10조 (이용 제한 및 해지)</h2>
                <p>
                    회사는 회원이 본 약관 또는 관계법령을 위반하거나 서비스 질서를 해치는 경우 경고, 정지, 탈퇴 등 제한
                    조치를 할 수 있습니다.
                    <br />
                    회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 법령에 따라 필요한 정보를 보존한 후 삭제 처리합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">제11조 (관할법원 및 준거법)</h2>
                <p>
                    본 약관은 대한민국 법률에 따르며, 회원과 회사 간의 분쟁은 민사소송법상 관할 법원에 제소합니다.
                    <br />
                    회사와 회원은 분쟁 해결을 위해 성실히 협의하며, 협의가 불가능할 경우 민사소송법에 따라 관할 법원을
                    정합니다.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12 text-right">[시행일자: 2025년 6월 4일]</p>
            <Button
                priority="secondary"
                size="lg"
                type="button"
                onClick={() => window.open('/terms/property-policy', '_blank')}
            >
                매물관련정책 확인하러 가기
                <MdOutlineArrowForwardIos style={{ cursor: 'pointer' }} />
            </Button>
        </div>
    );
};

export default TermsPage;
