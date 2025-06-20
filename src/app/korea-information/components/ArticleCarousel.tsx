import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperClass } from 'swiper';
import { useRouter } from 'next/navigation';

interface Article {
    image: string;
    title: string;
    summary: string;
    id: string;
}

const slides: Article[] = [
    { image: '/images/navi.png', title: '제목 1', summary: '이것은 첫 번째 슬라이드입니다.', id: '1' },
    { image: '/images/navi.png', title: '제목 2', summary: '이것은 두 번째 슬라이드입니다.', id: '2' },
    { image: '/images/navi.png', title: '제목 3', summary: '이것은 세 번째 슬라이드입니다.', id: '3' },
    { image: '/images/navi.png', title: '제목 4', summary: '이것은 네 번째 슬라이드입니다.', id: '4' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '5' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '6' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '7' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '8' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '9' },
    { image: '/images/navi.png', title: '제목 5', summary: '이것은 다섯 번째 슬라이드입니다.', id: '10' },
    { image: '/images/navi.png', title: '제목 6', summary: '이것은 여섯 번째 슬라이드입니다.', id: '11' },
    { image: '/images/navi.png', title: '제목 7', summary: '이것은 일곱 번째 슬라이드입니다.', id: '12' }
];

// { topic }: { topic: string }
const App = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex);
    };

    // const [slides, setSlides] = useState([]);
    // const getSlides = (topic: string) => {
    //     call slides get api
    //     setSlides()
    // };

    return (
        <Swiper
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={0}
            className="w-[1680px] allow-overflow"
        >
            {slides.map((slide: Article, index) => (
                <SwiperSlide
                    key={index}
                    onClick={() => router.push(`/korea-information/articles/${slide.id}`)}
                    style={{
                        width: '400px',
                        height: '388px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: activeIndex === index ? 'scale(1.36) ' : 'scale(1) ',
                        transition: 'transform 0.5s ease-in-out',
                        marginLeft: activeIndex === index ? '24px' : '0',
                        marginRight: activeIndex === index ? '64px' : '0'
                    }}
                >
                    <div
                        style={{
                            width: '330px',
                            height: '295px',
                            cursor: 'pointer'
                        }}
                    >
                        <div
                            className="rounded-2xl overflow-hidden mb-3 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                width: '100%',
                                height: '232px'
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
