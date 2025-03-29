'use client';

import { RealEstatePagination } from '@/types/realEstate.type';
import { getCoordinatesFromAddress } from '@/utils/geocoding.util';
import { useEffect } from 'react';

interface MapProps {
    data: RealEstatePagination | undefined;
}

const Map = ({ data }: MapProps) => {
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

                    const map = new window.kakao.maps.Map(container, options);
                    const bounds = new window.kakao.maps.LatLngBounds();
                    const promises: Promise<void>[] = [];

                    data?.content.forEach((item) => {
                        const promise = getCoordinatesFromAddress(item.address)
                            .then(({ latitude, longitude }) => {
                                const position = new window.kakao.maps.LatLng(latitude, longitude);

                                const marker = new window.kakao.maps.Marker({
                                    position
                                });

                                marker.setMap(map);
                                bounds.extend(position);
                            })
                            .catch(() => {
                                console.warn(
                                    '❌ Failed to find coordinates for address, skipping marker:',
                                    item.address
                                );
                            });

                        promises.push(promise);
                    });

                    Promise.all(promises).then(() => {
                        if (bounds.isEmpty()) {
                            console.info('ℹ️ No valid addresses found. No markers added to the map.');
                        } else {
                            map.setBounds(bounds);
                        }
                    });
                });
            }
        };

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [data?.content]);

    return <div id="map" className="flex-1 w-screen h-[calc(100vh-96px)]"></div>;
};

export default Map;
