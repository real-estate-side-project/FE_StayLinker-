import React from 'react';
import { SectionTitle } from './UI';
import Image from 'next/image';
import { MdAttachMoney, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { MapMarkerOutline } from '../assets';

export const RecommendedSection = () => {
    return (
        <section className="flex flex-col gap-10 relative">
            <SectionTitle>Recommended List</SectionTitle>
            <div className="flex gap-10 relative">
                <div className="flex flex-col rounded-xl overflow-hidden border border-bg500 bg-white">
                    <div className="relative w-[720px] h-[560px]">
                        <Image src={'/images/ImagePlaceholder.png'} alt="Recommended" fill className="object-cover" />
                        <div className="absolute bottom-[27px] right-0 z-9999 bg-main500 px-3 py-2 rounded-l-xl">
                            <span className="pc-body-m-500 text-white">Best House!</span>
                        </div>
                    </div>
                    <div className="pt-4 px-6 pb-[26px] flex flex-col gap-[29px] items-start bg-white">
                        <div className="flex flex-col items-start w-full">
                            <div className="flex items-center justify-between w-full">
                                <span className="pc-body-l-700 text-gray910">Gwanak-gu, Seoul, Republic of Korea</span>
                                <div className="flex items-center">
                                    <MdAttachMoney fill={'#FC6B1C'} size={24} />
                                    <span className="pc-body-l-700 text-main500">280,000</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border border-x-0 border-t-0 border-b-main500 pr-1">
                                <MapMarkerOutline fill={'#FC6B1C'} />
                                <span className="pc-title-s-500 text-main500">12, Gwanak-ro 30-gil</span>
                            </div>
                        </div>
                        <div className="flex gap-[21px] items-center justify-between">
                            <div className="flex gap-2 items-center justify-between w-full">
                                <div className="size-6 "></div>
                                <span className="pc-body-s-500 text-information500">3 Beds</span>
                            </div>
                            <div className="w-[2px] h-full bg-bg500"></div>
                            <div className="flex gap-2 items-center justify-between w-full">
                                <div className="size-6 "></div>
                                <span className="pc-body-s-500 text-information500">3 Beds</span>
                            </div>
                            <div className="w-[2px] h-full bg-bg500"></div>
                            <div className="flex gap-2 items-center justify-between w-full">
                                <div className="size-6 "></div>
                                <span className="pc-body-s-500 text-information500">3 Beds</span>
                            </div>
                            <div className="w-[2px] h-full bg-bg500"></div>
                            <div className="flex gap-2 items-center justify-between w-full">
                                <div className="size-6 "></div>
                                <span className="pc-body-s-500 text-information500">3 Beds</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="relative w-[684px] h-[336px] rounded-[20px] overflow-hidden">
                        <Image src={'/images/ImagePlaceholder.png'} alt="Recommended" fill className="object-cover" />
                    </div>
                    <div className="flex gap-10">
                        <div className="relative w-[322px] h-[344px] rounded-[20px] overflow-hidden">
                            <Image
                                src={'/images/ImagePlaceholder.png'}
                                alt="Recommended"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-[322px] h-[344px] rounded-[20px] overflow-hidden">
                            <Image
                                src={'/images/ImagePlaceholder.png'}
                                alt="Recommended"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <button className="absolute z-9999 -left-6 top-1/2 -translate-y-1/2 size-12 bg-sub940 bg-opacity-50 rounded-full flex items-center justify-center">
                    <MdOutlineArrowBackIos fill={'#fff'} size={24} />
                </button>
                <button className="absolute z-9999 -right-6 top-1/2 -translate-y-1/2 size-12 bg-sub940 bg-opacity-50 rounded-full flex items-center justify-center">
                    <MdOutlineArrowForwardIos fill={'#fff'} size={24} />
                </button>
            </div>
            <div className="flex gap-4 absolute -bottom-[62px] left-1/2 -translate-x-1/2 z-9999">
                <div className="w-5 h-2 rounded-[4px] bg-sub940"></div>
                <div className="size-2 bg-sub200 rounded-full"></div>
                <div className="size-2 bg-sub200 rounded-full"></div>
                <div className="size-2 bg-sub200 rounded-full"></div>
                <div className="size-2 bg-sub200 rounded-full"></div>
            </div>
        </section>
    );
};
