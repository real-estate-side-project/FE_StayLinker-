'use client';

import Button from '@/components/Buttons/Button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

interface PriceMarkerProps {
    map: kakao.maps.Map;
    lat: number;
    lng: number;
    price: number;
    id: number;
}

const PriceMarker = ({ map, lat, lng, price, id }: PriceMarkerProps) => {
    const router = useRouter();

    useEffect(() => {
        const position = new kakao.maps.LatLng(lat, lng);

        const container = document.createElement('div');
        const root = createRoot(container);

        root.render(
            <div className="shadow-xl">
                <Button priority={'secondary'} onClick={() => router.push(`/real-estate/${id}`)}>{`$ ${price}`}</Button>
            </div>
        );

        const customOverlay = new kakao.maps.CustomOverlay({
            position,
            content: container,
            yAnchor: 1,
            zIndex: 10
        });

        customOverlay.setMap(map);

        return () => {
            requestIdleCallback(() => {
                root.unmount();
                customOverlay.setMap(null);
            });
        };
    }, [lat, lng, price, map, id, router]);

    return null;
};

export default PriceMarker;
