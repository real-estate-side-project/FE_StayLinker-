'use client';

import { useParams } from 'next/navigation';

const realEstate = {
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
    description: 'StayLinker...',
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

const RealEstateDetailPage = () => {
    const params = useParams();
    const id = params.id as string;

    return <div>{id}</div>;
};

export default RealEstateDetailPage;
