'use client';

import DeletableChip from '@/components/Chips/DeletableChip';
import { useState } from 'react';

const DeletableChipSample = () => {
    const [intent, setIntent] = useState<'default' | 'primary'>('default');

    const handleClickChip = (): void => {
        setIntent((prev) => (prev === 'primary' ? 'default' : 'primary'));
    };

    return (
        <div className="flex flex-col items-start justify-start border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1"> Deletable Chip</h1>
            <div className="flex items-start justify-start gap-1">
                <DeletableChip intent={intent} handleClickDeleteIcon={handleClickChip} />
                <DeletableChip intent={intent} handleClickDeleteIcon={handleClickChip}>
                    Deletable Chip
                </DeletableChip>
            </div>
        </div>
    );
};

export default DeletableChipSample;
