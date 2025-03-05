import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const App = () => {
    return (
        <div className="w-full max-w-lg mx-auto border p-4">
            <Swiper
                modules={[Navigation]} // 네비게이션 모듈 적용
                slidesPerView={3} // 한 번에 보이는 슬라이드 개수
                spaceBetween={10} // 슬라이드 간 간격
                navigation={true} // 네비게이션 활성화
                className="w-full overflow-hidden"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-auto flex-shrink-0 flex items-center justify-center bg-gray-300 text-lg font-bold h-14"
                    >
                        슬라이드 {index + 1}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default App;
