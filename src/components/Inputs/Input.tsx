import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode, useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const labelVariant = cva('font-semibold text-xl mo:text-base', {
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
    'w-full flex items-center border transition-all font-medium py-2 text-lg mo:text-sm rounded focus:border-gray900 focus:text-gray900 outline-none',
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

const textVariant = cva('font-medium text-lg mo:text-sm', {
    variants: {
        state: {
            default: 'text-gray500 cursor-default',
            filled: 'text-gray500 cursor-default',
            error: 'text-gray500 cursor-default',
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
        {
            state: 'default',
            iconPosition: 'left',
            className: 'cursor-default'
        },
        {
            state: 'filled',
            iconPosition: 'left',
            className: 'cursor-default'
        },
        {
            state: 'error',
            iconPosition: 'left',
            className: 'cursor-default'
        },
        {
            state: 'default',
            iconPosition: 'right',
            className: 'cursor-pointer'
        },
        {
            state: 'filled',
            iconPosition: 'right',
            className: 'cursor-pointer'
        },
        {
            state: 'error',
            iconPosition: 'right',
            className: 'cursor-pointer'
        }
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
    validationMessage?: string;
    label?: string;
    handleClickIcon?: () => void;
} & InputVariantProps &
    ComponentProps<'input'>;

const Input = ({
    name,
    state,
    icon,
    iconPosition = 'right',
    validationMessage,
    label,
    handleClickIcon,
    id,
    ...props
}: InputProps) => {
    const randomId = useId();
    const inputId = id || randomId;

    const { control, formState } = useFormContext();
    const errorMessage = formState.errors[name]?.message as string;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className="w-full flex flex-col gap-3 mo:gap-2">
                    {label && (
                        <label htmlFor={inputId} className={labelVariant({ state })}>
                            {label}
                        </label>
                    )}
                    <div className="w-full relative group focus-within:text-gray900">
                        <input
                            id={inputId}
                            className={inputVariant({
                                state,
                                hasIcon: !!icon,
                                iconPosition
                            })}
                            disabled={state === 'disable'}
                            {...props}
                            {...field}
                        />
                        {icon && (
                            <span
                                className={iconVariant({ state, iconPosition })}
                                onClick={state === 'disable' ? undefined : handleClickIcon}
                            >
                                {icon}
                            </span>
                        )}
                    </div>
                    {(validationMessage || errorMessage) && (
                        <span className={textVariant({ state })}>{errorMessage || validationMessage}</span>
                    )}
                </div>
            )}
        />
    );
};

export default Input;
