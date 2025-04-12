'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { useEffect, useRef, useState } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { IoIosArrowUp } from 'react-icons/io';

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
            lg: 'w-80'
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

const dropdownButton = cva(
    'relative w-full p-2 rounded text-left flex items-center justify-between border transition-colors text-ellipsis whitespace-nowrap',
    {
        variants: {
            error: {
                true: 'border-danger600',
                false: 'border-gray300 hover:border-gray600'
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

const dropdownMenu = cva(
    'absolute top-full left-0 z-10 bg-white border border-gray300 w-full max-h-60 overflow-y-auto mt-1 rounded shadow-md'
);

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
                    {label && <label className="font-medium mb-1">{label}</label>}
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
                        <span className="overflow-hidden text-ellipsis">
                            {items.find((item) => item.value === field.value)?.label || placeholder || ''}
                        </span>
                        <IoIosArrowUp
                            className={`w-[14px] h-[14px] transition-transform ${!show ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {show && (
                        <ul className={dropdownMenu()}>
                            {items.map((item) => (
                                <li
                                    key={item.value}
                                    onClick={() => {
                                        field.onChange(item.value);
                                        setShow(false);
                                        onSelect?.(item.value);
                                    }}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray100 ${
                                        selectedValue === item.value ? 'bg-gray100' : 'bg-white'
                                    }`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}

                    {description && <span className="text-sm text-gray500 mt-1">{description}</span>}
                    {(errorMessage || validationMessage) && (
                        <span className="text-sm text-danger600 mt-1">{errorMessage || validationMessage}</span>
                    )}
                </div>
            )}
        />
    );
};

export default Dropdown;
