import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode, useId } from 'react';

const labelVariant = cva('font-medium mb-1 text-sm', {
    variants: {
        isDisabled: {
            true: 'cursor-not-allowed brightness-125',
            false: 'cursor-pointer'
        },
        isError: {
            true: 'text-red-500',
            false: 'text-gray-500'
        }
    },
    defaultVariants: {
        isDisabled: false,
        isError: false
    }
});

const inputVariant = cva(
    'w-full bg-white flex items-center gap-1 border transition-all font-normal py-1.5 text-base rounded-lg',
    {
        variants: {
            isDisabled: {
                true: 'cursor-not-allowed brightness-125',
                false: 'cursor-text focus:outline-gray-900 focus:text-gray-900'
            },
            isError: {
                true: 'border-red-500 text-red-500 placeholder-transparent',
                false: 'border-gray-500 text-gray-500'
            },
            hasIcon: {
                true: '',
                false: 'px-3'
            },
            iconPosition: {
                left: '',
                right: ''
            }
        },
        compoundVariants: [
            { hasIcon: true, iconPosition: 'left', className: 'pl-9 pr-3' },
            { hasIcon: true, iconPosition: 'right', className: 'pl-3 pr-9' }
        ],
        defaultVariants: {
            isDisabled: false,
            isError: false,
            hasIcon: false,
            iconPosition: 'right'
        }
    }
);

const textVariant = cva('font-normal text-sm mt-1', {
    variants: {
        isDisabled: {
            true: 'brightness-125',
            false: ''
        },
        isError: {
            true: 'text-red-500',
            false: 'text-gray-500'
        }
    },
    defaultVariants: {
        isDisabled: false,
        isError: false
    }
});

const iconVariant = cva('absolute top-1/2 -translate-y-1/2 font-normal text-base', {
    variants: {
        isDisabled: {
            true: 'cursor-not-allowed brightness-125',
            false: ''
        },
        isError: {
            true: 'text-red-500',
            false: 'text-gray-500'
        },
        iconPosition: {
            left: 'left-3',
            right: 'right-3'
        }
    },
    compoundVariants: [
        { isDisabled: false, iconPosition: 'left', className: 'cursor-default' },
        { isDisabled: false, iconPosition: 'right', className: 'cursor-pointer' }
    ],
    defaultVariants: {
        isDisabled: false,
        isError: false,
        iconPosition: 'right'
    }
});

type InputVariantProps = VariantProps<typeof inputVariant>;

type InputProps = {
    icon?: ReactNode;
    validationMessage?: string;
    label?: string;
    handleClickIcon?: () => void;
} & InputVariantProps &
    ComponentProps<'input'>;

const Input = ({
    isDisabled,
    isError,
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

    return (
        <div className="w-full flex flex-col">
            {label && (
                <label htmlFor={inputId} className={labelVariant({ isDisabled, isError })}>
                    {label}
                </label>
            )}
            <div className="w-full relative">
                <input
                    id={inputId}
                    className={inputVariant({ isDisabled, isError, hasIcon: !!icon, iconPosition })}
                    disabled={isDisabled || false}
                    {...props}
                />
                {icon && (
                    <span
                        className={iconVariant({ isDisabled, isError, iconPosition })}
                        onClick={isDisabled ? undefined : handleClickIcon}
                    >
                        {icon}
                    </span>
                )}
            </div>
            {validationMessage && (
                <span className={textVariant({ isDisabled, isError })}>{`* ${validationMessage}`}</span>
            )}
        </div>
    );
};

export default Input;
