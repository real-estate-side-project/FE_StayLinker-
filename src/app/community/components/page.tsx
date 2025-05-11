'use client';

declare global {
    interface Window {
        kakao: any;
    }
}

import { useEffect, useState } from 'react';

const KAKAO_MAP_API_KEY = '78c1c36f8c352fc3fedf174286640693'; // 🔹 여기에 발급받은 JavaScript 키 입력

const MapComponent = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            setLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
        script.async = true;
        script.onload = () => {
            window.kakao.maps.load(() => {
                setLoaded(true);
            });
        };

        document.head.appendChild(script);
    }, []);

    useEffect(() => {
        if (!loaded) return;

        const container = document.getElementById('map'); // 지도를 표시할 div
        const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978), // 🔹 서울 중심 좌표
            level: 3 // 🔹 확대 레벨 (1~14, 숫자가 작을수록 확대)
        };

        new window.kakao.maps.Map(container, options); // 🔹 지도 생성
    }, [loaded]);

    return <div id="map" style={{ width: '400px', height: '400px' }}></div>;
};

export default MapComponent;
