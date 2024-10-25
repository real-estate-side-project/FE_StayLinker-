import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva('flex justify-center items-center border font-medium transition-all', {
    variants: {
        intent: {
            primary: 'border-gray-500'
        },
        outline: {
            true: '',
            false: 'text-white'
        },
        size: {
            sm: 'w-4 h-4 text-xs',
            md: 'w-5 h-5 text-base',
            lg: 'w-6 h-6 text-xl'
        },
        shape: {
            circle: 'rounded-full',
            square: ''
        },
        isDisabled: {
            true: 'cursor-not-allowed brightness-125',
            false: 'cursor-pointer active:scale-90 hover:brightness-90'
        }
    },
    compoundVariants: [
        { intent: 'primary', outline: true, className: 'text-gray-500' },
        { intent: 'primary', outline: false, className: 'bg-gray-500' },
        { size: 'sm', shape: 'square', className: 'rounded-[4px]' },
        { size: 'md', shape: 'square', className: 'rounded-md' },
        { size: 'lg', shape: 'square', className: 'rounded-lg' }
    ],
    defaultVariants: {
        intent: 'primary',
        outline: false,
        size: 'md',
        shape: 'circle',
        isDisabled: false
    }
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type ButtonProps = {
    icon: ReactNode;
} & ButtonVariantProps &
    ComponentProps<'button'>;

const SingleIconButton = ({ intent, outline, size, shape, icon, isDisabled, ...props }: ButtonProps) => {
    return (
        <button
            className={buttonVariant({ intent, outline, size, shape, isDisabled })}
            disabled={isDisabled || false}
            {...props}
        >
            <span className="flex justify-center items-center">{icon}</span>
        </button>
    );
};

export default SingleIconButton;
