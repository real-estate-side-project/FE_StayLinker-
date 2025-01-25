import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva(
    'flex justify-center items-center gap-1 text-center font-medium whitespace-nowrap transition-all',
    {
        variants: {
            priority: {
                primary: '',
                secondary: '',
                tertiary: ''
            },
            size: {
                sm: 'text-base mo:text-sm',
                md: 'text-lg mo:text-base',
                lg: 'text-xl mo:text-lg'
            },
            isDisabled: {
                true: 'cursor-not-allowed',
                false: 'cursor-pointer'
            }
        },
        compoundVariants: [
            { priority: 'primary', isDisabled: true, className: 'text-main200' },
            { priority: 'primary', isDisabled: false, className: 'text-main400 hover:text-main600' },
            { priority: 'secondary', isDisabled: true, className: 'text-sub200' },
            {
                priority: 'secondary',
                isDisabled: false,
                className: 'text-sub600 hover:text-sub800'
            },
            { priority: 'tertiary', isDisabled: true, className: 'text-gray200' },
            {
                priority: 'tertiary',
                isDisabled: false,
                className: 'text-gray500 hover:text-gray800'
            }
        ],
        defaultVariants: {
            priority: 'primary',
            size: 'md',
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

const TextButton = ({ priority, size, icon, iconPosition = 'right', isDisabled, children, ...props }: ButtonProps) => {
    return (
        <button className={buttonVariant({ priority, size, isDisabled })} disabled={isDisabled || false} {...props}>
            {icon && iconPosition === 'left' && <span className={iconVariant({ size })}>{icon}</span>}
            {children || 'Text Button'}
            {icon && iconPosition === 'right' && <span className={iconVariant({ size })}>{icon}</span>}
        </button>
    );
};

export default TextButton;
