'use client';

import { PropsWithChildren } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface ToggleProps {
    name: string;
    initialState?: boolean;
    onToggle?: (state: boolean) => void;
    disabled?: boolean;
    size?: 'md' | 'lg';
}

const Toggle = ({
    children,
    name,
    initialState = false,
    onToggle,
    disabled = false,
    size = 'md'
}: PropsWithChildren<ToggleProps>) => {
    const { control } = useFormContext();

    const sizeStyles = {
        md: {
            container: 'w-8 h-5',
            circle: 'w-4 h-4',
            translate: 'translate-x-3',
            label: 'text-base mo:text-sm'
        },
        lg: {
            container: 'w-10 h-6 mo:w-8 mo:h-5',
            circle: 'w-5 h-5 mo:w-4 mo:h-4',
            translate: 'translate-x-4 mo:translate-x-3',
            label: 'text-lg mo:text-sm'
        }
    };

    const { container, circle, translate, label } = sizeStyles[size];

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={initialState}
            render={({ field }) => {
                const { value, onChange } = field;

                const handleToggle = (): void => {
                    if (disabled) return;

                    onChange(!value);
                    onToggle?.(!value);
                };

                return (
                    <div className="flex items-center justify-center gap-2">
                        <div
                            onClick={handleToggle}
                            className={`flex items-center rounded-full p-0.5 transition-colors  ${
                                disabled
                                    ? 'cursor-not-allowed bg-gray100'
                                    : `cursor-pointer ${value ? 'bg-main400' : 'bg-gray100'}`
                            } ${container}`}
                        >
                            <div
                                className={`rounded-full transform transition-transform ${
                                    value ? translate : 'translate-x-0'
                                } ${disabled ? 'bg-gray300' : 'bg-white'} ${circle}`}
                            />
                        </div>
                        <label
                            className={`font-medium whitespace-nowrap ${label} ${
                                disabled ? 'cursor-not-allowed text-gray500' : 'cursor-default text-gray910'
                            }`}
                        >
                            {children || 'Switch'}
                        </label>
                    </div>
                );
            }}
        />
    );
};

export default Toggle;
