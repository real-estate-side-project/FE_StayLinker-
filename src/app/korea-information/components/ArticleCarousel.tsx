import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Article {
    image: string;
    title: string;
    summary: string;
}

const slides: Article[] = [
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
    const [isFirst, setIsFirst] = useState(true);
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
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={0}
            className="w-[1680px] allow-overflow"
        >
            {slides.map((slide: Article, index) => (
                <SwiperSlide
                    key={index}
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
