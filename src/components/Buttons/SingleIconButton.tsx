import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva('flex justify-center items-center border font-medium transition-all', {
    variants: {
        priority: {
            primary: ' text-white',
            secondary: 'bg-white',
            tertiary: 'bg-white'
        },
        size: {
            sm: 'w-8 h-8 text-xl mo:w-6 mo:h-6 mo:text-base',
            md: 'w-9 h-9 text-2xl mo:w-7 mo:h-7 mo:text-xl',
            lg: 'w-9 h-9 mo:w-8 mo:h-8 text-2xl'
        },
        shape: {
            circle: 'rounded-full',
            square: ''
        },
        isDisabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer active:scale-90'
        }
    },
    compoundVariants: [
        { size: 'sm', shape: 'square', className: 'rounded' },
        { size: 'md', shape: 'square', className: 'rounded-md mo:rounded' },
        { size: 'lg', shape: 'square', className: 'rounded mo:rounded-md' },
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
        }
    ],
    defaultVariants: {
        priority: 'primary',
        size: 'md',
        shape: 'square',
        isDisabled: false
    }
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type ButtonProps = {
    icon: ReactNode;
} & ButtonVariantProps &
    ComponentProps<'button'>;

const SingleIconButton = ({ priority, size, shape, icon, isDisabled, ...props }: ButtonProps) => {
    return (
        <button
            className={buttonVariant({ priority, size, shape, isDisabled })}
            disabled={isDisabled || false}
            {...props}
        >
            <span className="flex justify-center items-center">{icon}</span>
        </button>
    );
};

export default SingleIconButton;
