import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva('flex justify-center items-center gap-1 text-center border font-medium transition-all', {
    variants: {
        intent: {
            primary: 'border-gray-500'
        },
        outline: {
            true: '',
            false: 'text-white'
        },
        size: {
            sm: 'px-3 py-1.5 text-sm rounded-lg',
            md: 'px-4 py-2 text-base rounded-xl',
            lg: 'px-5 py-2.5 text-lg rounded-2xl'
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
            true: 'cursor-not-allowed brightness-125',
            false: 'cursor-pointer active:scale-90 hover:brightness-90'
        }
    },
    compoundVariants: [
        { intent: 'primary', outline: true, className: 'text-gray-500' },
        { intent: 'primary', outline: false, className: 'bg-gray-500' }
    ],
    defaultVariants: {
        intent: 'primary',
        outline: false,
        size: 'md',
        halfWidth: false,
        fullWidth: false,
        isDisabled: false
    }
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type ButtonProps = {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
} & ButtonVariantProps &
    ComponentProps<'button'>;

const Button = ({
    intent,
    outline,
    size,
    halfWidth,
    fullWidth,
    icon,
    iconPosition = 'left',
    isDisabled,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={buttonVariant({ intent, outline, size, halfWidth, fullWidth, isDisabled })}
            disabled={isDisabled || false}
            {...props}
        >
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            {children || 'Button'}
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
};

export default Button;
