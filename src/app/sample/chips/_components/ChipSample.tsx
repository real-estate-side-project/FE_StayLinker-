'use client';

import Chip from '@/components/Chips/Chip';
import { useState } from 'react';

const ChipSample = () => {
    const [intent, setIntent] = useState<'default' | 'primary'>('default');

    const handleClickChip = (): void => {
        setIntent((prev) => (prev === 'primary' ? 'default' : 'primary'));
    };

    return (
        <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1">Chip</h1>
            <div className="flex items-start justify-start gap-1">
                <Chip />
                <Chip>Basic Chip</Chip>
            </div>
            <div className="flex items-start justify-start gap-1">
                <Chip isClickable intent={intent} onClick={handleClickChip} />
                <Chip isClickable intent={intent} onClick={handleClickChip}>
                    Clickable Chip
                </Chip>
            </div>
        </div>
    );
};

export default ChipSample;
