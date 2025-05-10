import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';

const buttonVariant = cva('px-5 py-2 rounded border font-medium text-xl mo:text-base transition-all', {
    variants: {
        select: {
            on: 'border-main500 text-main600 bg-main50',
            off: 'border-gray500 text-gray910 bg-white',
            disabled: 'border-gray300 text-gray500 bg-gray100 cursor-not-allowed'
        }
    },
    defaultVariants: {
        select: 'off'
    }
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

type SelectControlProps = { onClick?: () => void; icon?: ReactNode } & ButtonVariantProps;

const SelectControl = ({ children, select, onClick }: PropsWithChildren<SelectControlProps>) => {
    const isDisabled = select === 'disabled';

    return (
        <button className={buttonVariant({ select })} disabled={isDisabled} onClick={isDisabled ? undefined : onClick}>
            {children}
        </button>
    );
};

export default SelectControl;
