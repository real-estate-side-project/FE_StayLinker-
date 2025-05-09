import React, { useRef, useState } from 'react';
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

const slides: Slide[] = [
    { image: '/images/navi.png', title: '제목 1', summary: '이것은 첫 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 2', summary: '이것은 두 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 3', summary: '이것은 세 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 4', summary: '이것은 네 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 6', summary: '이것은 여섯 번째 슬라이드입니다.' },
    { image: '/images/navi.png', title: '제목 7', summary: '이것은 일곱 번째 슬라이드입니다.' }
];

const App = ({ topic }: { topic: string }) => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    // const [slides, setSlides] = useState([]);
    const getSlides = (topic: string) => {
        // call slides get api
        // setSlides()
    };

    return (
        <Swiper
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={1}
            className="w-[1680px]"
        >
            {slides.map((slide: Slide, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        width: '452px',
                        height: '388px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: activeIndex === index ? '70px' : 0
                    }}
                >
                    <div
                        style={{
                            // width: activeIndex === index ? '452px' : '330px',
                            // height: activeIndex === index ? '388px' : '295px',
                            // transition: 'all 0.8s ease',
                            width: activeIndex === index ? '452px' : '330px',
                            height: activeIndex === index ? '388px' : '295px',
                            cursor: 'pointer'
                        }}
                    >
                        <div
                            className="rounded-2xl overflow-hidden mb-3 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                width: activeIndex === index ? '452px' : '330px',
                                height: activeIndex === index ? '318px' : '232px'
                            }}
                        ></div>
                        <p className="text-xl font-bold">{slide.title}</p>
                        <p>{slide.summary}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default App;
