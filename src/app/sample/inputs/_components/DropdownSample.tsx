'use client';

import Dropdown from '@/components/Inputs/Dropdown';
import { useState } from 'react';

const DropdownSample = () => {
    const options = ['aaaaa', 'bbbbb', 'ccccc'];

    const [selectedOption, setSelectedOption] = useState<string>('');

    return (
        <div className="flex flex-col gap-2 items-start justify-start border-2 p-6">
            <h1 className="text-3xl font-bold">Dropdown</h1>
            <div className="flex gap-2 items-end justify-start">
                <Dropdown
                    options={options}
                    placeholder="Select Options..."
                    value={selectedOption}
                    setValue={setSelectedOption}
                />
                <Dropdown
                    options={options}
                    label="Label"
                    placeholder="Select Options..."
                    value={selectedOption}
                    setValue={setSelectedOption}
                />
            </div>
            <div className="flex gap-2 items-end justify-start">
                <Dropdown
                    options={options}
                    placeholder="Select Options..."
                    validationMessage="Select Options..."
                    value={selectedOption}
                    setValue={setSelectedOption}
                />
                <Dropdown
                    options={options}
                    label="Label"
                    placeholder="Select Options..."
                    validationMessage="Select Options..."
                    value={selectedOption}
                    setValue={setSelectedOption}
                />
            </div>
        </div>
    );
};

export default DropdownSample;
