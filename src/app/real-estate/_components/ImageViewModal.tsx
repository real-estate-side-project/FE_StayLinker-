'use client';

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

interface ImageViewModalProps {
    images: string[];
    onClose: () => void;
}

const ImageViewModal = ({ images, onClose }: ImageViewModalProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = (): void => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (): void => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectImage = (index: number): void => {
        setCurrentIndex(index);
    };

    return (
        <div className="fixed inset-0 z-50 bg-bg50 flex justify-center items-center">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center">
                <button onClick={onClose} className="absolute top-11 right-11 ">
                    <IoMdClose size={'36px'} />
                </button>
                <div className="relative w-[760px] h-[570px] bg-gray-200 flex items-center justify-center">
                    {images[currentIndex]}
                    <button
                        onClick={prevImage}
                        className="absolute left-[-144px] bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center text-xl hover:scale-105 transition-all"
                    >
                        <MdNavigateBefore size={'36px'} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-[-144px] bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center text-xl hover:scale-105 transition-all"
                    >
                        <MdNavigateNext size={'36px'} />
                    </button>
                </div>
                <div className="flex flex-col items-end">
                    <div className="mt-11 mb-3 text-sm text-white bg-black rounded-lg px-2.5 py-1">
                        {currentIndex + 1}/{images.length}
                    </div>
                    <div className="flex items-start justify-start gap-5">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => selectImage(index)}
                                className={`w-[126px] h-[126px] rounded-2xl flex items-center justify-center text-xs cursor-pointer border-2 transition-all ${
                                    index === currentIndex ? 'border-main600' : 'border-transparent'
                                }`}
                            >
                                <div className="bg-bg100 flex items-center justify-center w-[110px] h-[110px] rounded-lg">
                                    {img}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewModal;
