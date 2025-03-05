import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Swiper 스타일 import

const Home = () => {
    return (
        <div>
            <h1>Swiper Example in Next.js</h1>

            <Swiper
                spaceBetween={50} // 슬라이드 간격
                slidesPerView={1} // 한번에 보이는 슬라이드 개수
                navigation // 네비게이션 버튼 추가 (next, prev)
                pagination={{
                    // 페이지네이션 추가
                    clickable: true
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
