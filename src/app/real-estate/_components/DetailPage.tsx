'use client';

import Button from '@/components/Buttons/Button';
// import { useGetRealEstateDetailInformation } from '@/querys/real-estate/RealEstateQueries';
import TextButton from '@/components/Buttons/TextButton';
import Badge from '@/components/Chips/Badge';
import Toggle from '@/components/Inputs/Toggle';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdNavigateNext,
    MdOutlineBathtub,
    MdOutlineHome,
    MdOutlineLocalPrintshop,
    MdOutlineLocationOn,
    MdOutlineShare,
    MdOutlineSingleBed,
    MdSelectAll
} from 'react-icons/md';
import ImageViewModal from './ImageViewModal';

const data = {
    id: 1,
    businessId: 101,
    name: 'Gyeongbokgung Palace',
    address: '서울특별시 종로구 사직로 161',
    completionDate: '2022.08.08',
    houseType: 'APARTMENT',
    goodsType: 'MONTHLY_RENT',
    security: 5000000,
    rent: 500000,
    size: 28,
    maintenanceCost: 100000,
    roomCount: 2,
    floor: 7,
    contractPeriod: '1 year',
    description:
        'Welcome to your new home in the heart of the city: a bright, open-concept two-bedroom, two-bath condominium featuring floor‑to‑ceiling windows and panoramic skyline views. Step inside to discover a spacious living area with hardwood floors, a gourmet kitchen equipped with quartz countertops, stainless steel appliances, and a breakfast bar perfect for casual dining. Both bedrooms offer generous closets, plush carpeting, and private ensuites, while the master suite boasts a spa‑inspired bathroom with a rainfall shower and soaking tub. Enjoy year‑round comfort with central air conditioning, in‑unit laundry, and smart home controls. Building amenities include a 24‑hour concierge, fitness center, rooftop terrace with grilling stations, and secure underground parking. Ideally situated just steps from trendy cafés, boutique shops, and public transit, this residence combines modern luxury with urban convenience—experience city living at its finest!',
    bathroomCount: 1,
    isParked: true,
    rate: 100,
    options: [
        'Bed',
        'Closet',
        'Table',
        'Sofa',
        'Refrigerator',
        'Air Conditioner',
        'Washer',
        'Induction',
        'TV',
        'Wifi & Internet'
    ]
};

const imageData = ['main img', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9'];

type FormValues = {
    USD: boolean;
};

const RealEstateDetailPage = () => {
    const params = useParams();
    const id = params.id as string;

    // const { data } = useGetRealEstateDetailInformation(id);

    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    const [useUSD, setUseUSD] = useState<boolean>(false);
    const [exchangeRate, setExchangeRate] = useState<number>(1300);
    const [isOpenOverview, setIsOpenOverview] = useState<boolean>(false);

    useEffect(() => {
        if (!useUSD) return;

        const fetchRate = async () => {
            try {
                const res = await fetch('https://api.exchangerate.host/latest?base=KRW&symbols=USD');
                const data = await res.json();
                if (data && data.rates && data.rates.USD) {
                    setExchangeRate(data.rates.USD);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchRate();
    }, [useUSD]);

    const methods = useForm<FormValues>({
        defaultValues: { USD: false }
    });

    const openImageModal = (): void => setIsImageModalOpen(true);
    const closeImageModal = (): void => setIsImageModalOpen(false);

    const formatPrice = (krw: number): number => {
        if (!useUSD) {
            return krw;
        }
        const usd = krw * exchangeRate;
        return usd;
    };

    return (
        <main className="max-w-[1440px] mx-auto py-12">
            <section className="grid grid-cols-2 gap-5 h-[540px] mb-8 w-full">
                <div className="col-span-1">
                    <div className="w-full h-full bg-gray300 rounded-l-[20px] flex items-center justify-center">
                        {imageData[0]}
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-5">
                    {Array.from({ length: 4 }).map((_, index) => {
                        const img = imageData[index + 1];

                        const roundedClass = index === 1 ? 'rounded-tr-[20px]' : index === 3 ? 'rounded-br-[20px]' : '';

                        return (
                            <div
                                key={index}
                                className={`relative ${
                                    img ? 'bg-gray100' : ''
                                } flex items-center justify-center ${roundedClass}`}
                            >
                                {img ?? ''}
                                {index === 3 && (
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-br-[20px]">
                                        <Button
                                            priority={'tertiary'}
                                            onClick={openImageModal}
                                            icon={<MdNavigateNext />}
                                        >
                                            View All Photos
                                        </Button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                {isImageModalOpen && <ImageViewModal images={imageData} onClose={closeImageModal} />}
            </section>
            <div className="flex gap-20">
                <div className="flex-1 space-y-12">
                    <section className="flex justify-between cursor-default">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-base font-medium flex gap-2 text-gray500 items-center whitespace-nowrap">
                                    <MdOutlineLocationOn />
                                    {data.address}
                                </p>
                                <h1 className="text-[28px] font-bold flex gap-3 items-center whitespace-nowrap">
                                    {data.name}
                                    <Badge color={'sub'} type={'pastel'}>
                                        {data.goodsType}
                                    </Badge>
                                </h1>
                                <div className="text-information500 font-medium text-base whitespace-nowrap flex">
                                    <div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
                                        <div className="flex gap-2">
                                            <MdOutlineSingleBed size={'24px'} />
                                            {`${data.roomCount} Beds`}
                                        </div>
                                        <div className="border-2 border-bg500"></div>
                                        <div className="flex gap-2">
                                            <MdOutlineBathtub size={'24px'} />
                                            {`${data.bathroomCount} Baths`}
                                        </div>
                                        <div className="border-2 border-bg500"></div>
                                        <div className="flex gap-2">
                                            <MdSelectAll size={'24px'} />
                                            {`${data.size} m2`}
                                        </div>
                                        <div className="border-2 border-bg500"></div>
                                        <div className="flex gap-2">
                                            <MdOutlineHome size={'24px'} />
                                            {data.houseType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <span className="text-main500 font-bold text-2xl whitespace-nowrap">{`${
                                    useUSD ? '$' : '₩'
                                } ${formatPrice(data.security)}/${formatPrice(data.rent)}`}</span>
                                <FormProvider {...methods}>
                                    <Toggle name="USD" onToggle={(state) => setUseUSD(state)} size="lg">
                                        USD
                                    </Toggle>
                                </FormProvider>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <MdOutlineLocalPrintshop size={'36px'} className="cursor-pointer" />
                            <MdOutlineShare size={'36px'} className="cursor-pointer" />
                            <MdFavoriteBorder size={'36px'} className="cursor-pointer" />
                        </div>
                    </section>
                    <div className="w-full border my-12 border-gray200"></div>
                    <section className="flex flex-col gap-6 cursor-default">
                        <h2 className="text-xl font-bold whitespace-nowrap">Overview</h2>
                        <p className="font-medium text-xl flex flex-col gap-3 items-start">
                            {isOpenOverview ? data.description : `${data.description.slice(0, 200)}...`}
                            {data.description.length > 200 && !isOpenOverview && (
                                <TextButton
                                    size={'sm'}
                                    icon={<MdKeyboardArrowDown />}
                                    priority={'secondary'}
                                    onClick={() => setIsOpenOverview(true)}
                                >
                                    Show more
                                </TextButton>
                            )}
                        </p>
                    </section>
                </div>
                <aside className="block w-[452px] cursor-default">
                    <div className="sticky top-20 space-y-4 p-6 border rounded-lg border-bg500">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[28px] font-bold">부동산중개소 이름</h3>
                            <p className="text-base font-medium text-gray500">staylinker@gmail.com</p>
                            <div className="flex font-medium text-lg text-information500 gap-5">
                                <span>응답률 100%</span>
                                <div className="border border-bg500"></div>
                                <span>보통 1시간 이내 응답</span>
                            </div>
                        </div>
                        <p className=" text-border overflow-ellipsis">부동산 소개 내용입니다.</p>
                        <Button fullWidth size={'lg'}>
                            Send a Message
                        </Button>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default RealEstateDetailPage;
