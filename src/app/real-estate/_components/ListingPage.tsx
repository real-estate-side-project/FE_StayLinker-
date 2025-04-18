'use client';

import { GoodsType, HouseType, RealEstatePagination } from '@/types/realEstate.type';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Map from './Map';
import SideBar from './SideBar';
// import { useGetRealEstates } from '@/querys/real-estate/RealEstateQueries';

const data = {
    totalPages: 1,
    totalElements: 3,
    first: true,
    last: true,
    size: 3,
    content: [
        {
            id: 1,
            businessId: 101,
            name: 'Gyeongbokgung Palace',
            address: '서울특별시 종로구 사직로 161',
            houseType: 'APARTMENT',
            goodsType: 'MONTHLY_RENT',
            security: 5000000,
            rent: 500000,
            maintenanceCost: 100000
        },
        {
            id: 2,
            businessId: 102,
            name: 'Namsan Seoul Tower',
            address: '서울특별시 용산구 남산공원길 105',
            houseType: 'APARTMENT',
            goodsType: 'MONTHLY_RENT',
            security: 6000000,
            rent: 400000,
            maintenanceCost: 80000
        },
        {
            id: 3,
            businessId: 103,
            name: 'Myeongdong Street',
            address: '서울특별시 중구 명동길 43 일대',
            houseType: 'APARTMENT',
            goodsType: 'MONTHLY_RENT',
            security: 4000000,
            rent: 300000,
            maintenanceCost: 50000
        }
    ],
    number: 0,
    sort: {
        empty: true,
        sorted: true,
        unsorted: true
    },
    numberOfElements: 3,
    pageable: {
        offset: 0,
        sort: {
            empty: true,
            sorted: true,
            unsorted: true
        },
        paged: true,
        pageNumber: 0,
        pageSize: 3,
        unpaged: false
    },
    empty: false
};

const ListingPage = () => {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

    // const { data } = useGetRealEstates(queryString);

    const formattedData = useMemo(() => {
        if (!data) return undefined;

        return {
            ...data,
            content: data.content.map((item) => ({
                ...item,
                houseType: item.houseType as HouseType,
                goodsType: item.goodsType as GoodsType
            }))
        } satisfies RealEstatePagination;
    }, [data]);

    if (!formattedData) return null;

    return (
        <main className="flex">
            <SideBar data={formattedData} />
            <Map data={formattedData} />
        </main>
    );
};

export default ListingPage;
