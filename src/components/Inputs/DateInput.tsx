'use client';

import { cva } from 'class-variance-authority';
import { format } from 'date-fns';
import { useId, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import { MdCalendarMonth } from 'react-icons/md';

type DateInputProps = {
    name: string;
    label?: string;
    placeholder?: string;
};

const wrapperVariant = cva('w-full flex flex-col gap-2 mb-5');

const labelVariant = cva('pc-title-s-700 mo:text-base', {
    variants: {
        state: {
            default: 'text-gray910',
            error: 'text-danger600',
            disable: 'text-gray300'
        }
    },
    defaultVariants: {
        state: 'default'
    }
});

const inputVariant = cva(
    'w-full flex items-center border transition-all font-medium py-2 text-lg mo:text-sm rounded outline-none px-4 pr-10',
    {
        variants: {
            state: {
                default: 'bg-white text-gray900 border-gray500 focus:border-gray900 focus:text-gray900',
                error: 'bg-white text-danger600 border-danger600 focus:border-danger600 focus:text-danger600',
                disable: 'bg-gray100 text-gray300 border-gray300 cursor-not-allowed'
            }
        },
        defaultVariants: {
            state: 'default'
        }
    }
);

const iconVariant = cva('absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer', {
    variants: {
        state: {
            default: 'text-gray500',
            error: 'text-danger600',
            disable: 'text-gray300'
        }
    },
    defaultVariants: {
        state: 'default'
    }
});

const DateInput = ({ name, label, placeholder }: DateInputProps) => {
    const randomId = useId();
    const { control, formState } = useFormContext();
    const isError = !!formState.errors[name];

    const state = isError ? 'error' : 'default';

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={wrapperVariant()}>
            {label && (
                <label htmlFor={randomId} className={labelVariant({ state })}>
                    {label}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="relative w-full">
                        {/* input은 포맷된 텍스트 보여주기 */}
                        <input
                            id={randomId}
                            value={field.value ? format(new Date(field.value), 'yyyy년 M월 d일') : ''}
                            readOnly
                            placeholder={placeholder || '날짜를 선택해 주세요.'}
                            className={inputVariant({ state })}
                        />
                        {/* 달력 아이콘 */}
                        <MdCalendarMonth className={iconVariant({ state })} onClick={() => setIsOpen(true)} />
                        {/* DatePicker */}
                        {isOpen && (
                            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-20">
                                <DatePicker
                                    selected={field.value ? new Date(field.value) : null}
                                    onChange={(date: Date | null) => {
                                        if (!date) return;
                                        const formattedDate = format(date, 'yyyy-MM-dd');
                                        field.onChange(formattedDate);
                                        setIsOpen(false);
                                    }}
                                    inline
                                />
                            </div>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default DateInput;
