import { ToastType } from '@/types/modal.type';
import { cva, VariantProps } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { MdError } from 'react-icons/md';

const toastVariant = cva(
    'flex justify-start items-center gap-2 rounded-lg font-medium text-gray910 transition-all duration-500 px-4 py-4 text-base mt-2 border',
    {
        variants: {
            isOpen: {
                true: 'translate-y-0 opacity-1',
                false: '-translate-y-full opacity-0'
            },
            color: {
                sub: 'bg-sub50 border-sub100',
                warning: 'bg-warning50 border-warning200',
                danger: 'bg-danger50 border-danger100'
            }
        },
        defaultVariants: {
            isOpen: false,
            color: 'sub'
        }
    }
);

const iconVariant = cva('text-2xl', {
    variants: {
        color: {
            sub: 'text-sub500',
            warning: 'text-warning500',
            danger: 'text-danger600'
        }
    },
    defaultVariants: {
        color: 'sub'
    }
});

type ToastVariantProps = VariantProps<typeof toastVariant>;

type ToastProps = {
    toast: ToastType;
} & ToastVariantProps;

const Toast = ({ toast, color }: ToastProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setIsOpen(true), 10);

        const autoCloseTimeout = setTimeout(() => {
            setIsOpen(false);
        }, 2000 - 500);

        return () => clearTimeout(autoCloseTimeout);
    }, []);

    return (
        <div className={toastVariant({ isOpen, color })}>
            <span className={iconVariant({ color })}>
                <MdError />
            </span>
            {toast.message}
        </div>
    );
};

export default Toast;
