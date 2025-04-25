'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { useEffect, useRef, useState } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { IoIosArrowUp } from 'react-icons/io';
import DropdownMenu from './\bDropDownMenu';

type DropdownItem = {
    label: string;
    value: string | number;
};

type DropdownProps = {
    name: string;
    label?: string;
    description?: string;
    validationMessage?: string;
    placeholder?: string;
    rules?: RegisterOptions;
    items: DropdownItem[];
    disabled?: boolean;
    onSelect?: (value: string | number) => void;
} & VariantProps<typeof dropdownContainer>;

const dropdownContainer = cva('flex flex-col relative', {
    variants: {
        size: {
            sm: 'w-48',
            md: 'w-64',
            lg: 'w-80',
            full: 'w-full'
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

const dropdownButton = cva(
    'group relative w-full p-2 rounded text-left flex items-center justify-between border transition-colors text-ellipsis whitespace-nowrap border transition-all font-medium py-2 text-lg outline-none text-gray910 ',
    {
        variants: {
            error: {
                true: 'border-danger600',
                false: 'border-gray300 '
            },
            disabled: {
                true: 'bg-gray100 text-gray400 cursor-not-allowed',
                false: 'bg-white cursor-pointer'
            }
        },
        compoundVariants: [{ error: true, disabled: false, className: 'focus:border-danger600' }],
        defaultVariants: {
            error: false,
            disabled: false
        }
    }
);

const textVariant = cva('font-medium text-lg mo:text-sm', {
    variants: {
        state: {
            default: 'text-gray500 cursor-default',
            filled: 'text-gray500 cursor-default',
            error: 'text-danger600 cursor-default',
            disable: 'text-gray300 cursor-not-allowed'
        }
    },
    defaultVariants: {
        state: 'default'
    }
});

const Dropdown = ({
    name,
    label,
    placeholder,
    description,
    validationMessage,
    rules,
    items,
    disabled,
    onSelect,
    size
}: DropdownProps) => {
    const { control, getValues, formState } = useFormContext();
    const selectRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);
    const errorMessage = formState.errors[name]?.message as string;
    const selectedValue = getValues(name);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <div ref={selectRef} className={dropdownContainer({ size })}>
                    {label && (
                        <label
                            className={
                                label.trim() === ''
                                    ? 'invisible h-[28px] mb-3'
                                    : 'visible text-gray910 cursor-pointer font-semibold text-xl mb-3'
                            }
                        >
                            {label || ' '}
                        </label>
                    )}

                    <button
                        type="button"
                        disabled={disabled}
                        className={dropdownButton({
                            error: !!errorMessage,
                            disabled: !!disabled
                        })}
                        onClick={() => {
                            if (!disabled) setShow((prev) => !prev);
                        }}
                    >
                        <span className="overflow-hidden text-ellipsis text-gray500 group-focus-within:text-gray900">
                            {items.find((item) => item.value === field.value)?.label || placeholder || ''}
                        </span>
                        <IoIosArrowUp
                            className={`w-[14px] h-[14px] transition-transform ${!show ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {show && (
                        <DropdownMenu
                            items={items}
                            selectedValue={selectedValue}
                            onSelect={(value) => {
                                field.onChange(value);
                                setShow(false);
                                onSelect?.(value);
                            }}
                        />
                    )}

                    {description && (
                        <span className={`${textVariant({ state: 'default' })} whitespace-pre-line mt-3`}>
                            {description}
                        </span>
                    )}
                    {(errorMessage || validationMessage) && (
                        <span className="text-sm text-danger600 mt-1">{errorMessage || validationMessage}</span>
                    )}
                </div>
            )}
        />
    );
};

export default Dropdown;
