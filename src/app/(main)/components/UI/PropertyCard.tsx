import Image from 'next/image';
import { MdBookmark, MdAttachMoney } from 'react-icons/md';

interface PropertyCardProps {
    image?: string;
    price: number;
    title: string;
    location: string;
    description: string;
}

export const PropertyCard = ({
    image = '/images/ImagePlaceholder.png',
    price,
    title,
    location,
    description
}: PropertyCardProps) => {
    return (
        <div className="p-6 flex flex-col gap-6 border border-bg500 bg-white rounded-lg">
            <div className="w-[280px] h-[240px] relative">
                <Image src={'/images/ImagePlaceholder.png'} alt="Property" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-col gap-1 items-start w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <MdAttachMoney fill={'#FC6B1C'} size={24} />
                            <span className="pc-body-l-700 text-main500">1234567890</span>
                        </div>
                        <MdBookmark fill={'#FC6B1C'} size={24} />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="pc-title-s-700 text-gray10">Cozy Apartment</span>
                        <span className="pc-body-m-500 text-gray500">Gwanak-gu, Seoul,</span>
                        <span className="pc-body-m-500 text-gray500">Republic of Korea</span>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-regular text-[16px] text-information300 leading-[135%] tracking-[-2.5%]">
                        Cozy Apartment for family.
                    </span>
                    <span className="font-regular text-[16px] text-information300 leading-[135%] tracking-[-2.5%]">
                        3beds, 2baths. This house is perfect for
                    </span>
                    <span className="font-regular text-[16px] text-information300 leading-[135%] tracking-[-2.5%]">
                        a family of 4.
                    </span>
                </div>
            </div>
        </div>
    );
};
