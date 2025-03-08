import { Coordinates } from '@/types/geocoding.type';
import axios from 'axios';

export const getCoordinatesFromAddress = async (address: string): Promise<Coordinates> => {
    try {
        const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
            params: { query: address },
            headers: {
                Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_REST_KEY}`
            }
        });

        const data = response.data;

        if (data.documents && data.documents.length > 0) {
            const { x, y } = data.documents[0];
            return {
                latitude: parseFloat(y),
                longitude: parseFloat(x)
            };
        }

        throw new Error('Address not found');
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};
