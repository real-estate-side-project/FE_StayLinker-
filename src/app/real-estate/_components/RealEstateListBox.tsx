'use client';

import { useToast } from '@/providers/ToastProvider';
import { RealEstate } from '@/types/realEstate.type';
import { MouseEvent } from 'react';
import { MdAttachMoney, MdBookmarkBorder, MdOutlineSingleBed } from 'react-icons/md';

interface RealEstateListBoxProps {
    item: RealEstate;
}

const RealEstateListBox = ({ item }: RealEstateListBoxProps) => {
    const toast = useToast();

    const handleClickBookmark = (e: MouseEvent<SVGElement, globalThis.MouseEvent>): void => {
        e.stopPropagation();

        toast.on({ message: 'Please use after logging in', color: 'danger' });
    };

    return (
        <div className="flex flex-col items-start justify-start border border-bg500  rounded-lg p-6 gap-6 cursor-pointer">
            <div className="w-full h-[242px] bg-gray300 flex items-center justify-center">Main Image</div>
            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col w-full gap-1">
                    <div className="flex flex-row w-full items-center justify-between">
                        <span className="flex flex-row items-center justify-start text-main500 font-bold text-xl">
                            <MdAttachMoney size={'24px'} />
                            {item.rent}
                        </span>
                        <MdBookmarkBorder
                            size={'24px'}
                            className="text-gray500"
                            onClick={(e) => handleClickBookmark(e)}
                        />
                    </div>
                    <h3 className="font-bold text-xl">{item.name}</h3>
                </div>
                <div className="text-information500 font-medium text-base whitespace-nowrap flex flex-col gap-1">
                    <div className="flex flex-row gap-3">
                        <div className="flex gap-2">
                            <MdOutlineSingleBed size={'24px'} />1 Beds
                        </div>
                        <div className="border-2 border-bg500"></div>
                        <div className="flex gap-2">
                            <MdOutlineSingleBed size={'24px'} />1 Baths
                        </div>
                        <div className="border-2 border-bg500"></div>
                        <div className="flex gap-2">
                            <MdOutlineSingleBed size={'24px'} />
                            28 m2
                        </div>
                        <div className="border-2 border-bg500"></div>
                    </div>
                    <div className="flex gap-2">
                        <MdOutlineSingleBed size={'24px'} />
                        {item.houseType}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealEstateListBox;
