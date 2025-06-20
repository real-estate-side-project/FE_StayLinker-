import { useModal } from '@/providers/ModalProvider';
import { ModalType } from '@/types/modal.type';
import { useEffect } from 'react';
import Button from '../Buttons/Button';

type ModalProps = {
    modal: ModalType;
};

const Modal = ({ modal }: ModalProps) => {
    const {
        message: label,
        onConfirm,
        onCancel,
        hasCancel = true,
        confirmButtonContent,
        cancelButtonContent,
        backgroundClassName = 'bg-white'
    } = modal;

    const { close } = useModal();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-brightness-75 backdrop-blur-sm"
            onClick={close}
        >
            <div
                className={`flex flex-col items-center justify-center ${backgroundClassName} rounded-2xl gap-4 ${
                    typeof label === 'string' ? 'p-7' : ''
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="font-medium text-base">{label}</div>

                {modal.customButtons ? (
                    <div className="flex gap-2">{modal.customButtons}</div>
                ) : hasCancel ? (
                    <div className="flex gap-2">
                        <Button
                            onClick={onCancel}
                            size={'lg'}
                            priority={'secondary'}
                            icon={cancelButtonContent?.icon || null}
                        >
                            {cancelButtonContent?.children || 'cancel'}
                        </Button>
                        <Button onClick={onConfirm} size={'lg'} icon={confirmButtonContent?.icon || null}>
                            {confirmButtonContent?.children || 'confirm'}
                        </Button>
                    </div>
                ) : (
                    <Button onClick={onConfirm} size={'lg'} fullWidth icon={confirmButtonContent?.icon || null}>
                        {confirmButtonContent?.children || 'confirm'}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Modal;
