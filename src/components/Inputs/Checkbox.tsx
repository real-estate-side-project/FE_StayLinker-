'use client';

import Indeterminate from '@/assets/icons/checkbox/Indeterminate';
import IndeterminateDisabled from '@/assets/icons/checkbox/IndeterminateDisabled';
import Off from '@/assets/icons/checkbox/Off';
import OffDisabled from '@/assets/icons/checkbox/OffDisabled';
import On from '@/assets/icons/checkbox/On';
import OnDisabled from '@/assets/icons/checkbox/OnDisabled';
import { CheckboxMode, CheckboxSelectType } from '@/types/input.type';
import { PropsWithChildren } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface CheckboxProps {
    name: string;
    mode?: CheckboxMode;
    initialState?: CheckboxSelectType;
    handleChangeState?: (state: CheckboxSelectType) => void;
    disabled?: boolean;
}

const Checkbox = ({
    children,
    name,
    mode = 'on-off',
    initialState = 'off',
    handleChangeState,
    disabled = false
}: PropsWithChildren<CheckboxProps>) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={initialState}
            render={({ field }) => {
                const { value, onChange } = field;

                const changeState = (): void => {
                    if (disabled) return;

                    let nextState: CheckboxSelectType;

                    if (mode === 'on-off') {
                        nextState = value === 'on' ? 'off' : 'on';
                    } else if (mode === 'indeterminate-off') {
                        nextState = value === 'indeterminate' ? 'off' : 'indeterminate';
                    } else {
                        nextState = value === 'off' ? 'indeterminate' : value === 'indeterminate' ? 'on' : 'off';
                    }

                    onChange(nextState);
                    handleChangeState?.(nextState);
                };

                return (
                    <div className="flex items-center justify-center gap-2">
                        {disabled ? (
                            <span className="cursor-not-allowed w-5 h-5">
                                {value === 'on' ? (
                                    <OnDisabled />
                                ) : value === 'off' ? (
                                    <OffDisabled />
                                ) : (
                                    <IndeterminateDisabled />
                                )}
                            </span>
                        ) : (
                            <span className="flex cursor-pointer w-5 h-5" onClick={changeState}>
                                {value === 'on' ? <On /> : value === 'off' ? <Off /> : <Indeterminate />}
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
            }}
        />
    );
};

export default Checkbox;
