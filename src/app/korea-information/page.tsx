'use client';

import React, { useState } from 'react';
import ArticleCarousel from './components/ArticleCarousel';
import SingleSelect from '@/components/Chips/SingleSelect';
import SearchBar from '@/components/SearchBar';
import ArticleDetail from './components/ArticleDetail';

const KoreaInformationPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');
    const topices = ['Culture', 'Application', 'Tips', 'Travel', 'Korean Law'];

    return (
        <div>
            <div
                style={{ backgroundImage: `url('/images/banner.png')` }}
                className="w-full h-[520px] bg-no-repeat bg-center bg-cover cursor-pointer"
            ></div>
            <div className="w-[1440px] mx-auto mt-8">
                <div className="flex justify-between items-end">
                    <SingleSelect
                        optionList={['See All', ...topices]}
                        selectedOption={boardType}
                        setSelectedOption={setBoardType}
                    />
                    <SearchBar />
                </div>
                <div className="mt-12">
                    {(boardType === 'See All' ? topices : [boardType]).map((topic) => (
                        <div key={topic} className="mb-12">
                            <p className="text-[28px] font-bold mb-4">{topic}</p>
                            <ArticleCarousel topic={topic} />
                        </div>
                    ))}
                </div>
            </div>

            {/* temp */}
            <ArticleDetail
                article={{
                    type: 'Culture',
                    image: '/images/navi.png',
                    title: '제목 7',
                    summary: '이것은 일곱 번째 슬라이드입니다.',
                    mainText: 'mainText'
                }}
            />
        </div>
    );
};

export default KoreaInformationPage;
