export {};

declare global {
    interface Window {
        kakao: typeof kakao;
    }

    namespace kakao {
        namespace maps {
            function load(callback: () => void): void;

            interface MapOptions {
                center: LatLng;
                level?: number;
                mapTypeId?: string;
            }

            class Map {
                constructor(container: HTMLElement | null, options: MapOptions);
                setBounds(bounds: LatLngBounds): void;
                setCenter(latlng: kakao.maps.LatLng): void;

                getLevel(): number;
                setLevel(level: number): void;
            }

            class LatLng {
                constructor(latitude: number, longitude: number);
            }

            class LatLngBounds {
                extend(latlng: LatLng): void;
                isEmpty(): boolean;
            }

            class CustomOverlay {
                constructor(options: {
                    map?: kakao.maps.Map;
                    position: kakao.maps.LatLng;
                    content: string | HTMLElement;
                    xAnchor?: number;
                    yAnchor?: number;
                    zIndex?: number;
                });
                setMap(map: kakao.maps.Map | null): void;
            }
        }
    }
}
