'use client';

import Off from '@/assets/icons/radio-button/Off';
import OffDisabled from '@/assets/icons/radio-button/OffDisabled';
import On from '@/assets/icons/radio-button/On';
import OnDisabled from '@/assets/icons/radio-button/OnDisabled';
import { RadioButtonOption } from '@/types/input.type';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const radioButtonVariant = cva('', {
    variants: {
        radioSize: {
            md: 'w-5 h-5',
            lg: 'w-6 h-6 mo:w-5 mo:h-5'
        }
    },
    defaultVariants: {
        radioSize: 'md'
    }
});

const labelVariant = cva('font-medium', {
    variants: {
        radioSize: {
            md: 'text-base mo:text-sm',
            lg: 'text-lg mo:text-sm'
        }
    },
    defaultVariants: {
        radioSize: 'md'
    }
});

type RadioButtonVariantProps = VariantProps<typeof radioButtonVariant>;

type RadioButtonProps = {
    options: RadioButtonOption[];
    selectedValue?: string;
    groupStyle?: string;
    isDisabled?: boolean;
} & RadioButtonVariantProps &
    ComponentProps<'input'>;

const RadioButton = ({
    radioSize,
    isDisabled = false,
    options,
    selectedValue,
    groupStyle,
    ...props
}: RadioButtonProps) => {
    return (
        <div className={groupStyle || 'flex gap-4'}>
            {options.map((option: RadioButtonOption) => (
                <label key={option.value} className="flex items-center justify-center gap-2">
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        disabled={isDisabled}
                        className="hidden"
                        {...props}
                    />
                    {isDisabled ? (
                        <span className={`cursor-not-allowed ${radioButtonVariant({ radioSize })}`}>
                            {selectedValue === option.value ? <OnDisabled /> : <OffDisabled />}
                        </span>
                    ) : (
                        <span className={`cursor-pointer ${radioButtonVariant({ radioSize })}`}>
                            {selectedValue === option.value ? <On /> : <Off />}
                        </span>
                    )}
                    <span
                        className={`${labelVariant({ radioSize })} ${
                            isDisabled ? 'cursor-not-allowed text-gray500' : 'cursor-default text-gray910'
                        }`}
                    >
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
