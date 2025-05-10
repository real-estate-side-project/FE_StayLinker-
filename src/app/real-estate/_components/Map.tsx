'use client';

import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
import { useToast } from '@/providers/ToastProvider';
import { MarkerData } from '@/types/map.type';
import { RealEstatePagination } from '@/types/realEstate.type';
import { getCoordinatesFromAddress } from '@/utils/geocoding.util';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MdAdd, MdMyLocation, MdOutlineRemove } from 'react-icons/md';
import PriceMarker from './PriceMarker';

interface MapProps {
    data: RealEstatePagination | undefined;
}

const Map = ({ data }: MapProps) => {
    const router = useRouter();
    const toast = useToast();

    const mapRef = useRef<kakao.maps.Map | null>(null);
    const [markerDataList, setMarkerDataList] = useState<MarkerData[]>([]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&libraries=services,clusterer&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const mapOptions = {
                        center: new window.kakao.maps.LatLng(37.5665, 126.978),
                        level: 3
                    };

                    const map = new window.kakao.maps.Map(container, mapOptions);
                    mapRef.current = map;

                    const bounds = new window.kakao.maps.LatLngBounds();
                    const promises: Promise<MarkerData | null>[] = [];

                    data?.content.forEach((item) => {
                        const price = item.rent;
                        const promise = getCoordinatesFromAddress(item.address)
                            .then(({ latitude, longitude }) => {
                                bounds.extend(new window.kakao.maps.LatLng(latitude, longitude));
                                return { id: item.id, lat: latitude, lng: longitude, price };
                            })
                            .catch(() => {
                                console.warn(
                                    '❌ Failed to find coordinates for address, skipping marker:',
                                    item.address
                                );
                                return null;
                            });

                        promises.push(promise);
                    });

                    Promise.all(promises).then((results) => {
                        const validMarkers = results.filter(Boolean) as MarkerData[];
                        setMarkerDataList(validMarkers);

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

    const handleZoomIn = (): void => {
        const map = mapRef.current;
        if (!map) return;

        const currentLevel = map.getLevel();
        map.setLevel(currentLevel - 1);
    };

    const handleZoomOut = (): void => {
        const map = mapRef.current;
        if (!map) return;

        const currentLevel = map.getLevel();
        map.setLevel(currentLevel + 1);
    };

    const handleMoveToCurrentLocation = (): void => {
        if (!navigator.geolocation) {
            toast.on({ message: 'This browser does not support geolocation.', color: 'danger' });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const latLng = new window.kakao.maps.LatLng(latitude, longitude);
                mapRef.current?.setCenter(latLng);
            },
            (error) => {
                toast.on({ message: 'Failed to retrieve your current location.', color: 'danger' });
                console.error(error);
            }
        );
    };

    return (
        <div id="map" className="relative flex-1 w-screen h-[calc(100vh-96px)]">
            {mapRef.current &&
                markerDataList.map((marker) => (
                    <PriceMarker
                        key={marker.id}
                        map={mapRef.current!}
                        lat={marker.lat}
                        lng={marker.lng}
                        price={marker.price}
                        id={marker.id}
                    />
                ))}
            <section className="absolute left-7 bottom-7 z-10 flex gap-4">
                <Button priority={'tertiary'}>Radius</Button>
                <Button priority={'tertiary'} onClick={() => router.push('/korea-information')}>
                    Tips
                </Button>
            </section>
            <section className="absolute right-7 bottom-7 z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                    <SingleIconButton icon={<MdAdd />} priority={'tertiary'} size={'lg'} onClick={handleZoomIn} />
                    <SingleIconButton
                        icon={<MdOutlineRemove />}
                        priority={'tertiary'}
                        size={'lg'}
                        onClick={handleZoomOut}
                    />
                </div>
                <SingleIconButton
                    icon={<MdMyLocation />}
                    priority={'tertiary'}
                    size={'lg'}
                    onClick={handleMoveToCurrentLocation}
                />
            </section>
        </div>
    );
};

export default Map;
