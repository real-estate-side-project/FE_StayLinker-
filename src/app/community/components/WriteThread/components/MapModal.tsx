import React, { useEffect, useState } from 'react';

interface MapModalProps {
    setIsMapOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setValue: any;
}

const MapModal = ({ setIsMapOpen, setValue }: MapModalProps) => {
    const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);

    // const confirm = async () => {
    //     if (markerPosition) {
    //         try {
    //             const address = await fetchAddress(markerPosition);
    //             setValue('address', address);
    //             setIsMapOpen(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };
    return (
        <div>
            <button onClick={() => setIsMapOpen(false)}>x</button>
            <div id="map" className="w-[500px] h-[400px]"></div>
            {/* <button onClick={() => confirm()} disabled={!markerPosition}>
                confirm
            </button> */}
        </div>
    );
};

export default MapModal;
