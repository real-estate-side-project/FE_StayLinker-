import { ModalType } from '@/types/modal.type';
import { useEffect } from 'react';
import Button from '../Buttons/Button';

type ModalProps = {
    modal: ModalType;
};

const Modal = ({ modal }: ModalProps) => {
    const { message: label, onConfirm, onCancel, hasCancel = true, confirmButtonContent, cancelButtonContent } = modal;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center backdrop-brightness-75 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center bg-white rounded-2xl gap-4 p-6">
                <div className="font-medium text-base">{label}</div>
                {hasCancel ? (
                    <div className="flex gap-2">
                        <Button onClick={onCancel} size={'lg'} icon={cancelButtonContent?.icon || null}>
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
