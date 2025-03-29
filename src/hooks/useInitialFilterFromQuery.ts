import { FilterOption } from '@/types/realEstate.type';
import { useSearchParams } from 'next/navigation';

export const useInitialFilterFromQuery = (): FilterOption => {
    const params = useSearchParams();

    const bedrooms = Number(params.get('bedrooms') || 0);
    const bathrooms = Number(params.get('bathrooms') || 0);

    const features = params.getAll('features');
    const others = params.getAll('others');

    return {
        bedrooms: isNaN(bedrooms) ? 0 : bedrooms,
        bathrooms: isNaN(bathrooms) ? 0 : bathrooms,
        features,
        others
    };
};
