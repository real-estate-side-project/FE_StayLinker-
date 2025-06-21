const LocationPage = () => {
    return (
        <div className="mx-60 my-32 space-y-8 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold text-center mb-8">위치정보 이용약관 동의</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">1. 위치정보의 수집 및 이용 목적</h2>
                <p>
                    회사는 아래와 같은 목적을 위해 개인위치정보를 수집 및 이용합니다.
                    <br />
                    - 현재 위치를 기반으로 한 매물 추천
                    <br />
                    - 사용자의 위치 기반 검색 결과 제공
                    <br />- 지도 기반 매물 등록 및 노출 기능 제공
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">2. 수집하는 위치정보 항목</h2>
                <p>
                    - GPS 정보, Wi-Fi 정보, 기지국 정보 등 사용자의 단말기에서 수집 가능한 위치정보
                    <br />
                    - 지도상 주소 및 좌표 정보
                    <br />- 브라우저 또는 앱 내 위치 접근 권한 허용 시 수집
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">3. 보유 및 이용기간</h2>
                <p>
                    위치정보는 서비스 제공 목적 달성 후 즉시 파기하며, 법령에 따라 보존할 필요가 있는 경우에는 해당 기간
                    동안 보관합니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. 동의 거부권 및 불이익</h2>
                <p>
                    이용자는 위치정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
                    <br />
                    다만, 동의하지 않는 경우 위치기반 추천, 매물 지도 보기 등의 기능 사용이 제한될 수 있습니다.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">5. 개인위치정보주체의 권리</h2>
                <p>
                    - 회사는 이용자의 개인위치정보를 당사자 동의 없이 제3자에게 제공하지 않습니다.
                    <br />- 이용자는 자신의 위치정보에 대해 열람, 정정, 삭제를 요청할 수 있으며, 위치정보 수집 동의를
                    철회할 수 있습니다.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12 text-right">[시행일자: 2025년 6월 4일]</p>
        </div>
    );
};

export default LocationPage;
