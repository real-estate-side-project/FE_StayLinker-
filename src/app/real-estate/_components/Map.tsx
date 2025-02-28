'use client';

import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&libraries=services,clusterer&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(37.5665, 126.978),
                        level: 3
                    };

                    new window.kakao.maps.Map(container, options);
                });
            }
        };

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return <div id="map" className="h-full"></div>;
};

export default Map;
