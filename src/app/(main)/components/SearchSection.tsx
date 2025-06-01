'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import SingleIconButton from '@/components/Buttons/SingleIconButton';
import { MapMarkerOutline, OfficeBuildingCog, Search, Slider } from '../assets';
import { Selector, Tab } from './UI';

export const SearchSection = () => {
    const [activeTab, setActiveTab] = useState<'RENT' | 'BUY'>('RENT');
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[796px]">
                <Image
                    src={'/images/ImagePlaceholder.png'}
                    alt={'배너이미지'}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 flex flex-col items-start">
                <div className="flex items-end">
                    <Tab title="RENT" isActive={activeTab === 'RENT'} onClick={() => setActiveTab('RENT')} />
                    <Tab title="BUY" isActive={activeTab === 'BUY'} onClick={() => setActiveTab('BUY')} />
                </div>
                <div className="pr-6 pl-[30px] py-[22.5px] rounded-b-lg rounded-tr-lg border-2 border-bg500 bg-[#FCFAF8] flex items-center justify-between gap-32">
                    <div className="flex gap-48 flex-1">
                        <Selector
                            label="Location"
                            placeholder="Select Your City"
                            icon={<MapMarkerOutline fill="#BA906F" />}
                        />
                        <Selector
                            label="Property Type"
                            placeholder="Choose Property Type"
                            icon={<OfficeBuildingCog fill="#BA906F" />}
                        />
                        <Selector
                            label="Price Range"
                            placeholder="Choose Price Range"
                            icon={<Slider fill="#BA906F" />}
                        />
                    </div>
                    <div className="flex-shrink-0">
                        <SingleIconButton icon={<Search />} />
                    </div>
                </div>
            </div>
        </section>
    );
};
