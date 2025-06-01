import React from 'react';
import { SectionTitle } from './UI';
import Button from '@/components/Buttons/Button';
import { ChevronRight } from '../assets';
import Image from 'next/image';

export const InformationSection = () => {
    return (
        <section className="flex flex-col gap-10 items-start">
            <SectionTitle>Information</SectionTitle>
            <div className="flex items-center justify-center gap-10">
                <div className="pr-[70px] pl-[56px] pt-[56px] pb-[69px] flex flex-col justify-between gap-[136px] border-4 border-sub100 rounded-lg bg-sub50">
                    <div className="flex flex-col">
                        <span className="font-semibold text-information500 text-[48px] leading-[135%] tracking-[-2.5%]">
                            Looking for
                        </span>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center">
                                <Image
                                    src={'/text/RealEstate.png'}
                                    alt="Real Estate"
                                    width={248}
                                    height={65}
                                    className="shrink-0"
                                />
                            </div>
                            <span className="font-semibold text-information500 text-[48px] leading-[135%] tracking-[-2.5%]">
                                Information?
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[154px]">
                        <span className="font-medium text-information500 text-[36px] leading-[135%] tracking-[-2.5%]">
                            You can get it by following the button.
                        </span>
                        <Button priority={'secondary'} size={'md'} icon={<ChevronRight fill={'#F55A00'} />}>
                            Find Information
                        </Button>
                    </div>
                </div>
                <div className="px-[35px] pt-[56px] py-[70px] flex flex-col items-start gap-[73px] border-4 border-sub100 rounded-lg bg-sub50">
                    <div className="flex flex-col">
                        <span className="font-semibold text-information500 text-[48px] leading-[135%] tracking-[-2.5%]">
                            Are you a
                        </span>
                        <span className="font-semibold text-information500 text-[48px] leading-[135%] tracking-[-2.5%]">
                            Real Estate
                        </span>
                        <div className="flex items-center h-[65px]">
                            <Image src={'/text/Agent.png'} alt="Real Estate" width={157} height={64} />
                        </div>
                    </div>
                    <Button priority={'secondary'} size={'md'} icon={<ChevronRight fill={'#F55A00'} />}>
                        Click Here
                    </Button>
                </div>
            </div>
        </section>
    );
};
