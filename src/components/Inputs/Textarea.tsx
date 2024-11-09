import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, useId } from 'react';

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

const wrapperVariant = cva('w-full flex flex-col justify-start items-end gap-1.5 border rounded-lg overflow-hidden', {
    variants: {
        isDisabled: {
            true: 'cursor-not-allowed',
            false: 'focus-within:border-gray-900'
        },
        isError: {
            true: 'border-red-500',
            false: 'border-gray-500'
        }
    },
    defaultVariants: {
        isDisabled: false,
        isError: false
    }
});

const textareaVariant = cva(
    'w-full bg-white flex transition-all font-normal px-3 py-1.5 text-base rounded-lg resize-none outline-none',
    {
        variants: {
            isDisabled: {
                true: 'cursor-not-allowed brightness-125',
                false: 'cursor-text'
            },
            isError: {
                true: 'text-red-500 placeholder-transparent',
                false: 'text-gray-500'
            }
        },
        defaultVariants: {
            isDisabled: false,
            isError: false
        }
    }
);

const lengthVariant = cva('text-xs pb-1.5 px-3', {
    variants: {
        isDisabled: {
            true: 'brightness-125',
            false: 'cursor-default'
        },
        isError: {
            true: 'text-red-400',
            false: 'text-gray-400'
        }
    },
    defaultVariants: {
        isDisabled: false,
        isError: false
    }
});

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

type TextareaVariantProps = VariantProps<typeof textareaVariant>;

type TextareaProps = {
    validationMessage?: string;
    label?: string;
    maxLength?: number;
} & TextareaVariantProps &
    ComponentProps<'textarea'>;

const Textarea = ({ isDisabled, isError, validationMessage, label, maxLength, id, ...props }: TextareaProps) => {
    const randomId = useId();
    const textareaId = id || randomId;

    return (
        <div className="w-full flex flex-col">
            {label && (
                <label htmlFor={textareaId} className={labelVariant({ isDisabled, isError })}>
                    {label}
                </label>
            )}
            <div className={wrapperVariant({ isDisabled, isError })}>
                <textarea
                    id={textareaId}
                    className={textareaVariant({ isDisabled, isError })}
                    disabled={isDisabled || false}
                    {...props}
                    maxLength={maxLength}
                />
                {maxLength && maxLength > 0 && (
                    <span className={lengthVariant({ isDisabled, isError })}>
                        {props.value?.toString().length || 0}/{maxLength}
                    </span>
                )}
            </div>
            {validationMessage && (
                <span className={textVariant({ isDisabled, isError })}>{`* ${validationMessage}`}</span>
            )}
        </div>
    );
};

export default Textarea;
