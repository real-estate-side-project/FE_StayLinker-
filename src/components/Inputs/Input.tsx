'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode, useId } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

const labelVariant = cva('pc-title-s-700 mo:text-base', {
    variants: {
        state: {
            default: 'text-gray910 cursor-pointer',
            filled: 'text-success600 cursor-pointer',
            error: 'text-danger600 cursor-pointer',
            disable: 'text-gray300 cursor-not-allowed'
        }
    },
    defaultVariants: {
        state: 'default'
    }
});

const inputVariant = cva(
    'w-full h-[43px] flex items-center border transition-all font-medium py-2 text-lg mo:text-sm rounded focus:border-gray900 focus:text-gray900 outline-none',
    {
        variants: {
            state: {
                default: 'bg-white text-gray500 border-gray500',
                filled: 'bg-white text-gray900 border-success600',
                error: 'bg-white text-gray900 border-danger600',
                disable: 'bg-gray100 text-gray300 border-gray300 cursor-not-allowed'
            },
            hasIcon: {
                true: '',
                false: 'px-4'
            },
            iconPosition: {
                left: '',
                right: ''
            }
        },
        compoundVariants: [
            { hasIcon: true, iconPosition: 'left', className: 'pl-11 pr-4' },
            { hasIcon: true, iconPosition: 'right', className: 'pl-4 pr-10' }
        ],
        defaultVariants: {
            state: 'default',
            hasIcon: false,
            iconPosition: 'right'
        }
    }
);

const textVariant = cva('pc-body-m-500 ml-2 mo:text-sm', {
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

const iconVariant = cva('absolute top-1/2 -translate-y-1/2 font-medium text-2xl group-focus-within:text-gray900', {
    variants: {
        state: {
            default: 'text-gray500',
            filled: 'text-gray900',
            error: 'text-gray900',
            disable: 'text-gray300 cursor-not-allowed'
        },
        iconPosition: {
            left: 'left-4',
            right: 'right-4'
        }
    },
    compoundVariants: [
        { state: 'default', iconPosition: 'left', className: 'cursor-default' },
        { state: 'filled', iconPosition: 'left', className: 'cursor-default' },
        { state: 'error', iconPosition: 'left', className: 'cursor-default' },
        { state: 'default', iconPosition: 'right', className: 'cursor-pointer' },
        { state: 'filled', iconPosition: 'right', className: 'cursor-pointer' },
        { state: 'error', iconPosition: 'right', className: 'cursor-pointer' }
    ],
    defaultVariants: {
        state: 'default',
        iconPosition: 'right'
    }
});

type InputVariantProps = VariantProps<typeof inputVariant>;

type InputProps = {
    name: string;
    icon?: ReactNode;
    label?: string;
    description?: string;
    validationMessage?: string | ReactNode;
    handleClickIcon?: () => void;
    rules?: RegisterOptions;
    rightSlot?: ReactNode;
    buttonSlot?: ReactNode;
} & InputVariantProps &
    ComponentProps<'input'>;

const Input = ({
    name,
    state,
    icon,
    iconPosition = 'right',
    label,
    description,
    validationMessage,
    handleClickIcon,
    rules,
    rightSlot,
    buttonSlot,
    id,
    ...props
}: InputProps) => {
    const randomId = useId();
    const inputId = id || randomId;

    const { control, formState } = useFormContext();
    const errorMessage = formState.errors[name]?.message as string;

    const isError = !!formState.errors[name];
    const resolvedState = state ?? (isError ? 'error' : 'default');

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <div className="w-full flex flex-col gap-2 mb-5 z-0 ">
                    {/* Label */}
                    {label && (
                        <label htmlFor={inputId} className={labelVariant({ state: resolvedState })}>
                            {label}
                        </label>
                    )}

                    {/* Input + Button */}
                    <div className="flex gap-3 items-start">
                        <div className="flex-1 relative">
                            <input
                                id={inputId}
                                className={inputVariant({
                                    state: resolvedState,
                                    hasIcon: !!icon,
                                    iconPosition
                                })}
                                disabled={resolvedState === 'disable'}
                                {...props}
                                {...field}
                            />
                            {icon && (
                                <span
                                    className={iconVariant({ state: resolvedState, iconPosition })}
                                    onClick={resolvedState === 'disable' ? undefined : handleClickIcon}
                                >
                                    {icon}
                                </span>
                            )}
                            {rightSlot && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-base">{rightSlot}</div>
                            )}
                        </div>

                        {buttonSlot && <div className="w-[120px] ">{buttonSlot}</div>}
                    </div>

                    {/* Description */}
                    {description && (
                        <span className={`${textVariant({ state: 'default' })} whitespace-pre-line`}>
                            {description}
                        </span>
                    )}

                    {/* validation & Error */}
                    {(validationMessage || errorMessage) && (
                        <span className={`${textVariant({ state: 'error' })} whitespace-pre-wrap`}>
                            {validationMessage || errorMessage}
                        </span>
                    )}
                </div>
            )}
        />
    );
};

export default Input;
