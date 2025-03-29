'use client';

import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
import Filter from '@/components/Chips/Filter';
import Tag from '@/components/Chips/Tag';
import { useInitialFilterFromQuery } from '@/hooks/useInitialFilterFromQuery';
import { FilterOption, RealEstatePagination } from '@/types/realEstate.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdOutlineKeyboardArrowDown, MdOutlineReplay, MdTune } from 'react-icons/md';
import FilterModal from './FilterModal';
import RealEstateListBox from './RealEstateListBox';

interface SideBarProps {
    data: RealEstatePagination | undefined;
}

const SideBar = ({ data }: SideBarProps) => {
    const router = useRouter();
    const initialFiltersFromQuery = useInitialFilterFromQuery();

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
    const [appliedFilters, setAppliedFilters] = useState<FilterOption>(initialFiltersFromQuery);

    const toggleSidebar = (): void => {
        setIsOpen(!isOpen);
    };

    const openFilterModal = (): void => setIsFilterModalOpen(true);
    const closeFilterModal = (): void => setIsFilterModalOpen(false);

    const hasFilterOption = (): boolean => {
        return (
            appliedFilters.bedrooms > 0 ||
            appliedFilters.bathrooms > 0 ||
            appliedFilters.features.length > 0 ||
            appliedFilters.others.length > 0
        );
    };

    const removeFilter = (key: keyof FilterOption, valueToRemove?: string): void => {
        const updated: FilterOption = {
            ...appliedFilters,
            [key]:
                key === 'features' || key === 'others'
                    ? (appliedFilters[key] as string[]).filter((v) => v !== valueToRemove)
                    : 0
        };

        setAppliedFilters(updated);

        const query = new URLSearchParams();
        if (updated.bedrooms > 0) query.set('bedrooms', updated.bedrooms.toString());
        if (updated.bathrooms > 0) query.set('bathrooms', updated.bathrooms.toString());
        updated.features.forEach((f) => query.append('features', f));
        updated.others.forEach((o) => query.append('others', o));

        router.push(`/real-estate?${query.toString()}`);
    };

    const handleFilterApply = (filters: FilterOption): void => {
        setAppliedFilters(filters);

        const query = new URLSearchParams();

        if (filters.bedrooms > 0) query.set('bedrooms', filters.bedrooms.toString());
        if (filters.bathrooms > 0) query.set('bathrooms', filters.bathrooms.toString());
        filters.features.forEach((f) => query.append('features', f));
        filters.others.forEach((o) => query.append('others', o));

        router.push(`/real-estate?${query.toString()}`);
    };

    const handleResetAll = (): void => {
        setAppliedFilters({ bedrooms: 0, bathrooms: 0, features: [], others: [] });
        router.push('/real-estate');
    };

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0 w-[45.83vw] py-6 px-10' : '-translate-x-full w-0'
            } relative flex flex-col z-10 h-[calc(100vh-96px)] transition-all duration-300`}
        >
            {isOpen ? (
                <>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                        <SingleIconButton icon={<MdChevronLeft />} priority={'tertiary'} onClick={toggleSidebar} />
                    </div>
                    <div className="flex items-start justify-start flex-wrap flex-col gap-6 mb-6">
                        <h1 className="text-[28px] font-bold whitespace-nowrap cursor-default">Listing</h1>
                        <div className="flex items-start justify-start gap-4">
                            <Filter
                                icon={<MdTune />}
                                handleClickFilter={openFilterModal}
                                state={hasFilterOption() ? 'pressed' : 'default'}
                            />
                            <div className="flex flex-wrap items-center justify-start gap-2">
                                {appliedFilters.bedrooms > 0 && (
                                    <Tag
                                        handleClickDeleteIcon={() => removeFilter('bedrooms')}
                                    >{`${appliedFilters.bedrooms} Bedrooms`}</Tag>
                                )}
                                {appliedFilters.bathrooms > 0 && (
                                    <Tag handleClickDeleteIcon={() => removeFilter('bathrooms')}>
                                        {`${appliedFilters.bathrooms} Bathrooms`}
                                    </Tag>
                                )}
                                {appliedFilters.features.map((feature) => (
                                    <Tag key={feature} handleClickDeleteIcon={() => removeFilter('features', feature)}>
                                        {feature}
                                    </Tag>
                                ))}

                                {appliedFilters.others.map((other) => (
                                    <Tag key={other} handleClickDeleteIcon={() => removeFilter('others', other)}>
                                        {other}
                                    </Tag>
                                ))}
                                {hasFilterOption() && (
                                    <>
                                        <div className="border h-10 border-gray200 mx-2"></div>
                                        <button
                                            className="text-base text-gray500 font-medium flex items-center justify-center gap-1"
                                            onClick={handleResetAll}
                                        >
                                            Reset <MdOutlineReplay size={'20px'} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="flex flex-row items-center justify-between mb-4">
                            <span className="text-base font-medium whitespace-nowrap cursor-default">{`${data?.size} results`}</span>
                            <Button priority={'gray'} size={'sm'} icon={<MdOutlineKeyboardArrowDown />}>
                                Array
                            </Button>
                        </div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                            {data?.content.map((item) => (
                                <div key={item.id} onClick={() => router.push(`/real-estate/${item.id}`)}>
                                    <RealEstateListBox item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <FilterModal
                        isOpen={isFilterModalOpen}
                        onClose={closeFilterModal}
                        onApply={handleFilterApply}
                        initialFilters={appliedFilters}
                    />
                </>
            ) : (
                <div className="fixed top-1/2 left-7 transform -translate-y-1/2">
                    <SingleIconButton icon={<MdChevronRight />} priority={'tertiary'} onClick={toggleSidebar} />
                </div>
            )}
        </div>
    );
};

export default SideBar;
