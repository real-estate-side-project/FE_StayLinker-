'use client';

import Button from '@/components/Buttons/Button';
import { FEATURE_OPTIONS, OTHER_OPTIONS } from '@/constants/filterOptions';
import { FilterOption } from '@/types/realEstate.type';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { MdAdd, MdOutlineRemove, MdOutlineReplay, MdOutlineSearch } from 'react-icons/md';
import SelectControl from '../Buttons/SelectControl';

type SelectState = 'on' | 'off';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: FilterOption) => void;
    initialFilters: FilterOption;
}

const FilterModal = ({ isOpen, onClose, onApply, initialFilters }: FilterModalProps) => {
    const [mounted, setMounted] = useState<boolean>(false);
    const [bedrooms, setBedrooms] = useState<number>(0);
    const [bathrooms, setBathrooms] = useState<number>(0);
    const [selectedFeatures, setSelectedFeatures] = useState<Record<string, SelectState>>({});
    const [selectedOthers, setSelectedOthers] = useState<Record<string, SelectState>>({});

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        setBedrooms(initialFilters.bedrooms);
        setBathrooms(initialFilters.bathrooms);

        const featureMap: Record<string, SelectState> = {};
        initialFilters.features.forEach((f) => {
            featureMap[f] = 'on';
        });
        setSelectedFeatures(featureMap);

        const otherMap: Record<string, SelectState> = {};
        initialFilters.others.forEach((o) => {
            otherMap[o] = 'on';
        });
        setSelectedOthers(otherMap);
    }, [isOpen, initialFilters]);

    if (!mounted || !isOpen) return null;

    const toggleFeature = (feature: string): void => {
        setSelectedFeatures((prev) => ({
            ...prev,
            [feature]: prev[feature] === 'on' ? 'off' : 'on'
        }));
    };

    const toggleOther = (option: string): void => {
        setSelectedOthers((prev) => ({
            ...prev,
            [option]: prev[option] === 'on' ? 'off' : 'on'
        }));
    };

    const handleClickReset = (): void => {
        setBedrooms(0);
        setBathrooms(0);
        setSelectedFeatures({});
        setSelectedOthers({});
    };

    const handleClickApply = (): void => {
        const selectedFeatureList = Object.entries(selectedFeatures)
            .filter(([, value]) => value === 'on')
            .map(([key]) => key);

        const selectedOtherList = Object.entries(selectedOthers)
            .filter(([, value]) => value === 'on')
            .map(([key]) => key);

        onApply({ bedrooms, bathrooms, features: selectedFeatureList, others: selectedOtherList });
        onClose();
    };

    return createPortal(
        <div className="fixed inset-0 z-10 flex flex-wrap justify-center items-center bg-black bg-opacity-40 p-11">
            <div className="flex flex-col backdrop-blur-3xl backdrop-brightness-150 rounded-xl w-[700px] shadow-xl  max-h-[calc(100vh-88px)]">
                <div className="flex flex-row items-center justify-center relative py-6">
                    <h2 className="text-2xl font-bold text-center cursor-default">Filter</h2>
                    <button className="absolute right-5 text-2xl" onClick={onClose}>
                        <IoMdClose />
                    </button>
                </div>
                <div className="flex-1 overflow-auto scrollbar-hidden flex flex-col px-8 pt-3 pb-6 gap-12">
                    <section className="flex flex-col gap-3">
                        <h3 className="font-bold text-2xl cursor-default">Rooms</h3>
                        <div className="flex flex-col gap-6 items-start justify-center">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-bold text-xl cursor-default">Bedrooms</span>
                                <div className="flex items-center">
                                    <button
                                        className={`border rounded-full p-2.5 ${
                                            bedrooms === 0
                                                ? 'bg-gray100 border-gray300 cursor-not-allowed'
                                                : 'bg-white border-gray100 cursor-pointer active:scale-90 transition-all'
                                        }`}
                                        onClick={() => setBedrooms((prev) => Math.max(0, prev - 1))}
                                        disabled={bedrooms === 0}
                                    >
                                        <MdOutlineRemove />
                                    </button>
                                    <span className="w-[50px] text-center font-medium cursor-default text-base">
                                        {bedrooms}
                                    </span>
                                    <button
                                        className={`border rounded-full p-2.5 ${
                                            bedrooms === 10
                                                ? 'bg-gray100 border-gray300 cursor-not-allowed'
                                                : 'bg-white border-gray100 cursor-pointer active:scale-90 transition-all'
                                        }`}
                                        onClick={() => setBedrooms((prev) => Math.min(10, prev + 1))}
                                        disabled={bedrooms === 10}
                                    >
                                        <MdAdd />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <span className="font-bold text-xl cursor-default">Bathrooms</span>
                                <div className="flex items-center">
                                    <button
                                        className={`border rounded-full p-2.5 ${
                                            bathrooms === 0
                                                ? 'bg-gray100 border-gray300 cursor-not-allowed'
                                                : 'bg-white border-gray100 cursor-pointer active:scale-90 transition-all'
                                        }`}
                                        onClick={() => setBathrooms((prev) => Math.max(0, prev - 1))}
                                        disabled={bathrooms === 0}
                                    >
                                        <MdOutlineRemove />
                                    </button>
                                    <span className="w-[50px] text-center font-medium cursor-default text-base">
                                        {bathrooms}
                                    </span>
                                    <button
                                        className={`border rounded-full p-2.5 ${
                                            bathrooms === 10
                                                ? 'bg-gray100 border-gray300 cursor-not-allowed'
                                                : 'bg-white border-gray100 cursor-pointer active:scale-90 transition-all'
                                        }`}
                                        onClick={() => setBathrooms((prev) => Math.min(10, prev + 1))}
                                        disabled={bathrooms === 10}
                                    >
                                        <MdAdd />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="border border-bg100"></div>
                    <section className="flex flex-col gap-3">
                        <h3 className="font-bold text-2xl cursor-default">Features</h3>
                        <div className="flex flex-wrap gap-5">
                            {FEATURE_OPTIONS.map((feature) => (
                                <SelectControl
                                    key={feature}
                                    select={selectedFeatures[feature] || 'off'}
                                    onClick={() => toggleFeature(feature)}
                                >
                                    {feature}
                                </SelectControl>
                            ))}
                        </div>
                    </section>
                    <div className="border border-bg100"></div>
                    <section className="flex flex-col gap-3">
                        <h3 className="font-bold text-2xl cursor-default">Others</h3>
                        <div className="flex flex-wrap gap-5">
                            {OTHER_OPTIONS.map((other) => (
                                <SelectControl
                                    key={other}
                                    select={selectedOthers[other] || 'off'}
                                    onClick={() => toggleOther(other)}
                                >
                                    {other}
                                </SelectControl>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="flex items-center justify-center py-8 gap-2">
                    <Button priority={'gray'} size={'sm'} icon={<MdOutlineReplay />} onClick={handleClickReset}>
                        Reset
                    </Button>
                    <Button size={'sm'} icon={<MdOutlineSearch />} onClick={handleClickApply}>
                        Apply
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default FilterModal;
