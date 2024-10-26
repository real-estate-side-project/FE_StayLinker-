import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

const buttonVariant = cva(
    'flex justify-center items-center gap-1 text-center font-medium whitespace-nowrap transition-all',
    {
        variants: {
            intent: {
                primary: 'text-gray-500'
            },
            size: {
                sm: 'px-3 py-1.5 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-5 py-2.5 text-lg'
            },
            isDisabled: {
                true: 'cursor-not-allowed brightness-125',
                false: 'cursor-pointer active:scale-90 hover:brightness-90'
            }
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            isDisabled: false
        }
    }
);

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type ButtonProps = {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
} & ButtonVariantProps &
    ComponentProps<'button'>;

const TextButton = ({ intent, size, icon, iconPosition = 'left', isDisabled, children, ...props }: ButtonProps) => {
    return (
        <button className={buttonVariant({ intent, size, isDisabled })} disabled={isDisabled || false} {...props}>
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            {children || 'Text Button'}
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
};

export default TextButton;
