import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface Slide {
    image: string;
    title: string;
    summary: string;
}

const App = ({ topic }: { topic: string }) => {
    // const [slides, setSlides] = useState([]);
    const getSlides = (topic: string) => {
        // call slides get api
        // setSlides()
    };

    const slides: Slide[] = [
        { image: '/images/sample1.jpg', title: '제목 1', summary: '이것은 첫 번째 슬라이드입니다.' },
        { image: '/images/sample2.jpg', title: '제목 2', summary: '이것은 두 번째 슬라이드입니다.' },
        { image: '/images/sample3.jpg', title: '제목 3', summary: '이것은 세 번째 슬라이드입니다.' }
    ];

    return (
        <div className="w-full max-w-lg mx-auto border p-4">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                className="w-full overflow-hidden"
            >
                {slides.map((slide: Slide, index) => (
                    <SwiperSlide key={index} className="">
                        <div>
                            <div className="rounded-2xl overflow-hidden">
                                <Image src={slide.image} alt={slide.title} width={330} height={232} />
                            </div>
                            <p className="text-xl font-bold">{slide.title}</p>
                            <p>{slide.summary}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default App;
