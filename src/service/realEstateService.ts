import http from '@/http/http.interceptors.request';
import { RealEstateDetailInformation, RealEstatePagination } from '@/types/realEstate.type';

const getRealEstates = async (): Promise<RealEstatePagination> => {
    try {
        const response = await http.get('/real-estate');

        if (response.status !== 200) {
            throw new Error('Failed to fetch real estate listings.');
        }

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getRealEstateById = async (id: number): Promise<RealEstateDetailInformation> => {
    try {
        const response = await http.get(`/real-estate/${id}`);

        if (response.status !== 200) {
            throw new Error('Failed to fetch real estate listings.');
        }

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const RealEstateService = {
    getRealEstates,
    getRealEstateById
};
