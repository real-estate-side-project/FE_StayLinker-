import { QUERY_KEYS } from '@/constants/queryKeys';
import { RealEstateService } from '@/service/realEstateService';
import { useQuery } from '@tanstack/react-query';

export const useGetRealEstates = (query?: string) => {
    return useQuery({
        queryKey: QUERY_KEYS.REAL_ESTATES(query),
        queryFn: () => RealEstateService.getRealEstates(query)
    });
};

export const useGetRealEstateDetailInformation = (id: number) => {
    return useQuery({
        queryKey: QUERY_KEYS.REAL_ESTATE_DETAIL(id),
        queryFn: () => RealEstateService.getRealEstateById(id)
    });
};
