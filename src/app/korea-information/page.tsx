'use client';

import React, { useState } from 'react';
import ArticleCarousel from './components/ArticleCarousel';

const KoreaInformationPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');

    return (
        <div>
            {/* pagination swiper */}
            <div className="h-10 gap-4 flex">
                {['See All', 'Culture', 'Application', 'Tips', 'Travel', 'Korean Law'].map((board) => (
                    <button
                        key={board}
                        className={`px-3 py-2 rounded-lg border justify-center items-center flex ${
                            boardType === board
                                ? 'text-orange-500 border-orange-500 font-bold'
                                : 'text-gray-500 border-gray-500'
                        }`}
                        onClick={() => {
                            setBoardType(board);
                        }}
                    >
                        {board}
                    </button>
                ))}
            </div>
            <div>search bar</div>
            {/* navigation swiper */}
            {/* <ArticleCarousel topic={'See All'} /> */}
        </div>
    );
};

export default KoreaInformationPage;
