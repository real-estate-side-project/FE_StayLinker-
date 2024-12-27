import { ToastType } from '@/types/modal.type';
import { cva, VariantProps } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

const toastVariant = cva(
    'flex justify-center items-center gap-3 bg-gray-500 text-white rounded-lg font-normal transition-all duration-500 px-4 py-3 text-sm mt-2',
    {
        variants: {
            isOpen: {
                true: 'translate-y-0 opacity-1',
                false: '-translate-y-full opacity-0'
            }
        },
        defaultVariants: {
            isOpen: false
        }
    }
);

type ToastVariantProps = VariantProps<typeof toastVariant>;

type ToastProps = {
    toast: ToastType;
    onClose: () => void;
} & ToastVariantProps;

const Toast = ({ toast, onClose }: ToastProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setIsOpen(true), 10);

        const autoCloseTimeout = setTimeout(() => {
            setIsOpen(false);
        }, 2000 - 500);

        return () => clearTimeout(autoCloseTimeout);
    }, []);

    const handleClickClose = (): void => {
        setIsOpen(false);
        setTimeout(onClose, 500);
    };

    return (
        <div className={toastVariant({ isOpen })}>
            {toast.message}
            <span onClick={handleClickClose} className="cursor-pointer">
                <MdClose />
            </span>
        </div>
    );
};

export default Toast;
