'use client';

import { useGetRealEstates } from '@/querys/real-estate/RealEstateQueries';
import Map from './Map';
import SideBar from './SideBar';

// const data = {
//     totalPages: 1,
//     totalElements: 3,
//     first: true,
//     last: true,
//     size: 3,
//     content: [
//         {
//             id: 1,
//             businessId: 101,
//             name: 'Gyeongbokgung Palace',
//             address: '서울특별시 종로구 사직로 161',
//             houseType: HouseType.HANOK,
//             goodsType: GoodsType.MONTHLY_RENT,
//             security: 5000000,
//             rent: 500000,
//             maintenanceCost: 100000
//         },
//         {
//             id: 2,
//             businessId: 102,
//             name: 'Namsan Seoul Tower',
//             address: '서울특별시 용산구 남산공원길 105',
//             houseType: HouseType.HANOK,
//             goodsType: GoodsType.MONTHLY_RENT,
//             security: 6000000,
//             rent: 400000,
//             maintenanceCost: 80000
//         },
//         {
//             id: 3,
//             businessId: 103,
//             name: 'Myeongdong Street',
//             address: '서울특별시 중구 명동길 43 일대',
//             houseType: HouseType.HANOK,
//             goodsType: GoodsType.MONTHLY_RENT,
//             security: 4000000,
//             rent: 300000,
//             maintenanceCost: 50000
//         }
//     ],
//     number: 0,
//     sort: {
//         empty: true,
//         sorted: true,
//         unsorted: true
//     },
//     numberOfElements: 3,
//     pageable: {
//         offset: 0,
//         sort: {
//             empty: true,
//             sorted: true,
//             unsorted: true
//         },
//         paged: true,
//         pageNumber: 0,
//         pageSize: 3,
//         unpaged: false
//     },
//     empty: false
// };

const ListingPage = () => {
    const { data, isLoading, error } = useGetRealEstates();

    console.log(data);

    return (
        <main className="flex">
            <SideBar data={data} />
            <Map data={data} />
        </main>
    );
};

export default ListingPage;
