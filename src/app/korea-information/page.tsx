'use client';

import React, { useState } from 'react';
import ArticleCarousel from './components/ArticleCarousel';
import SingleSelect from '@/components/Chips/SingleSelect';
import SearchBar from '@/components/SearchBar';

const KoreaInformationPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');
    const topices = ['Culture', 'Application', 'Tips', 'Travel', 'Korean Law'];

    // 일단 모두 가져온 후 주제별 키를 추가해서 tanstackQuery로 주제별 관리

    //  const handleSearch = (query: string) => {
    //     fetch(`/kor-info?search=${query}`)
    //         .then((res) => res.json())
    //         .then((data) => setThreadList(data));
    // };

    return (
        <div>
            <div
                style={{ backgroundImage: `url('/images/banner.png')` }}
                className="w-screen h-[520px] bg-no-repeat bg-center bg-cover cursor-pointer"
            ></div>
            <div className="w-[1440px] mx-auto mt-8">
                <div className="flex justify-between items-end">
                    <SingleSelect
                        optionList={['See All', ...topices]}
                        selectedOption={boardType}
                        setSelectedOption={setBoardType}
                    />
                    {/* <SearchBar onSearch={handleSearch} /> */}
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
        </div>
    );
};

export default KoreaInformationPage;
