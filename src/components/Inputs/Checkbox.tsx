'use client';

import Indeterminate from '@/assets/icons/checkbox/Indeterminate';
import IndeterminateDisabled from '@/assets/icons/checkbox/IndeterminateDisabled';
import Off from '@/assets/icons/checkbox/Off';
import OffDisabled from '@/assets/icons/checkbox/OffDisabled';
import On from '@/assets/icons/checkbox/On';
import OnDisabled from '@/assets/icons/checkbox/OnDisabled';
import { CheckboxMode, CheckboxSelectType } from '@/types/input.type';
import { PropsWithChildren, useState } from 'react';

interface CheckboxProps {
    mode?: CheckboxMode;
    initialState?: CheckboxSelectType;
    onChange?: (state: CheckboxSelectType) => void;
    disabled?: boolean;
}

const Checkbox = ({
    children,
    mode = 'on-off',
    initialState = 'off',
    onChange,
    disabled = false
}: PropsWithChildren<CheckboxProps>) => {
    const [state, setState] = useState<CheckboxSelectType>(initialState);

    const changeState = (): void => {
        if (disabled) return;

        let nextState: CheckboxSelectType;

        if (mode === 'on-off') {
            nextState = state === 'on' ? 'off' : 'on';
        } else if (mode === 'indeterminate-off') {
            nextState = state === 'indeterminate' ? 'off' : 'indeterminate';
        } else {
            nextState = state === 'off' ? 'indeterminate' : state === 'indeterminate' ? 'on' : 'off';
        }

        setState(nextState);
        onChange?.(nextState);
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {disabled ? (
                <span className="cursor-not-allowed w-5 h-5">
                    {state === 'on' ? <OnDisabled /> : state === 'off' ? <OffDisabled /> : <IndeterminateDisabled />}
                </span>
            ) : (
                <span className="flex cursor-pointer w-5 h-5" onClick={changeState}>
                    {state === 'on' ? <On /> : state === 'off' ? <Off /> : <Indeterminate />}
                </span>
            )}
            <label
                className={`font-medium text-lg mo:text-base whitespace-nowrap ${
                    disabled ? 'cursor-not-allowed text-gray500' : 'cursor-default text-gray910'
                }`}
            >
                {children || 'Label'}
            </label>
        </div>
    );
};

export default Checkbox;
