'use client';

import React, { useState } from 'react';
import ArticleCarousel from './components/ArticleCarousel';
import SingleSelect from '@/components/Chips/SingleSelect';

const KoreaInformationPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');
    const topices = ['Culture', 'Application', 'Tips', 'Travel', 'Korean Law'];

    return (
        <div>
            <div className="w-[1440px] mx-auto">
                <div className="flex justify-between">
                    <SingleSelect
                        optionList={['See All', ...topices]}
                        selectedOption={boardType}
                        setSelectedOption={setBoardType}
                    />
                    <div>search bar</div>
                </div>
                <div className="mt-12">
                    {topices.map((topic) => (
                        <div key={topic}>
                            <p className="text-[28px] font-bold">{topic}</p>
                            <ArticleCarousel topic={topic} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KoreaInformationPage;
