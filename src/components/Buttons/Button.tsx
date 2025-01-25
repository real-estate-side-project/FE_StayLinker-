import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva(
    'flex justify-center items-center gap-1 text-center whitespace-nowrap border font-medium transition-all',
    {
        variants: {
            priority: {
                primary: 'text-white',
                secondary: 'bg-white',
                tertiary: 'bg-white',
                gray: 'bg-white'
            },
            size: {
                sm: 'px-4 py-1.5 text-base rounded mo:py-1 mo:text-sm',
                md: 'px-5 py-2 text-lg rounded-md mo:px-4 mo:py-1.5 mo:rounded mo:text-base',
                lg: 'px-5 py-2 text-xl rounded mo:rounded-md mo:text-lg'
            },
            halfWidth: {
                true: 'w-1/2',
                false: ''
            },
            fullWidth: {
                true: 'w-full',
                false: ''
            },
            isDisabled: {
                true: 'cursor-not-allowed',
                false: 'cursor-pointer active:scale-90'
            }
        },
        compoundVariants: [
            { priority: 'primary', isDisabled: true, className: 'bg-main100 border-main200' },
            { priority: 'primary', isDisabled: false, className: 'bg-main400 border-main600 hover:bg-main600' },
            { priority: 'secondary', isDisabled: true, className: 'border-main100 text-main100' },
            {
                priority: 'secondary',
                isDisabled: false,
                className: 'border-main600 text-main600 hover:border-main800 hover:text-main800'
            },
            { priority: 'tertiary', isDisabled: true, className: 'border-sub200 text-sub200' },
            {
                priority: 'tertiary',
                isDisabled: false,
                className: 'border-sub600 text-sub600 hover:border-sub800 hover:text-sub800'
            },
            { priority: 'gray', isDisabled: true, className: 'border-gray200 text-gray200' },
            {
                priority: 'gray',
                isDisabled: false,
                className: 'border-gray600 text-gray600 hover:border-gray800 hover:text-gray800'
            }
        ],
        defaultVariants: {
            priority: 'primary',
            size: 'md',
            halfWidth: false,
            fullWidth: false,
            isDisabled: false
        }
    }
);

const iconVariant = cva('flex justify-center items-center', {
    variants: {
        size: {
            sm: 'text-xl mo:text-base',
            md: 'text-2xl mo:text-xl',
            lg: 'text-2xl'
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type ButtonProps = {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
} & ButtonVariantProps &
    ComponentProps<'button'>;

const Button = ({
    priority,
    size,
    halfWidth,
    fullWidth,
    icon,
    iconPosition = 'right',
    isDisabled,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={buttonVariant({ priority, size, halfWidth, fullWidth, isDisabled })}
            disabled={isDisabled || false}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className={iconVariant({ size })}>{icon}</span>}
            {children || 'Button'}
            {icon && iconPosition === 'right' && <span className={iconVariant({ size })}>{icon}</span>}
        </button>
    );
};

export default Button;
