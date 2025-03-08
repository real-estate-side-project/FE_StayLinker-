'use client';

import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
import Filter from '@/components/Chips/Filter';
import { RealEstatePagination } from '@/types/realEstate.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdOutlineKeyboardArrowDown, MdTune } from 'react-icons/md';
import RealEstateListBox from './RealEstateListBox';

interface SideBarProps {
    data: RealEstatePagination | undefined;
}

const SideBar = ({ data }: SideBarProps) => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleSidebar = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0 w-[880px] py-6 px-10' : '-translate-x-full w-0'
            } relative flex flex-col z-10 h-[calc(100vh-96px)] transition-all duration-300`}
        >
            {isOpen ? (
                <>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                        <SingleIconButton icon={<MdChevronLeft />} priority={'tertiary'} onClick={toggleSidebar} />
                    </div>
                    <div className="flex items-start justify-start flex-col gap-6 mb-6">
                        <h1 className="text-[28px] font-bold whitespace-nowrap">Listing</h1>
                        <Filter icon={<MdTune />} />
                    </div>
                    <div className="overflow-y-auto">
                        <div className="flex flex-row items-center justify-between mb-4">
                            <span className="text-base font-medium whitespace-nowrap">{`${data?.size} results`}</span>
                            <Button priority={'gray'} size={'sm'} icon={<MdOutlineKeyboardArrowDown />}>
                                Array
                            </Button>
                        </div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                            {data?.content.map((item) => (
                                <div key={item.id} onClick={() => router.push(`/real-estate/${item.id}`)}>
                                    <RealEstateListBox item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="fixed top-1/2 left-7 transform -translate-y-1/2">
                    <SingleIconButton icon={<MdChevronRight />} priority={'tertiary'} onClick={toggleSidebar} />
                </div>
            )}
        </div>
    );
};

export default SideBar;
