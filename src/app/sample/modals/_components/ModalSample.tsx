'use client';

import Button from '@/components/Buttons/Button';
import { useModal } from '@/providers/ModalProvider';
import { FaCheck } from 'react-icons/fa';
import { FaArrowRightLong, FaX } from 'react-icons/fa6';

const ModalSample = () => {
    const modal = useModal();

    const handleClickOpenModal = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            onCancel: () => modal.close()
        });
    };

    const handleClickOpenOneButtonModal = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            hasCancel: false
        });
    };

    const handleClickOpenModalWithContent = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            onCancel: () => modal.close(),
            confirmButtonContent: { children: '확인', icon: <FaCheck /> },
            cancelButtonContent: { children: '취소', icon: <FaX /> }
        });
    };

    const handleClickOpenOneButtonModalWithContent = (): void => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            hasCancel: false,
            confirmButtonContent: { children: '확인', icon: <FaCheck /> }
        });
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <Button icon={<FaArrowRightLong />} iconPosition="right" outline onClick={handleClickOpenModal}>
                Modal Open
            </Button>
            <Button icon={<FaArrowRightLong />} iconPosition="right" outline onClick={handleClickOpenOneButtonModal}>
                One Button Modal Open
            </Button>
            <Button icon={<FaArrowRightLong />} iconPosition="right" outline onClick={handleClickOpenModalWithContent}>
                Modal Open (With Content)
            </Button>
            <Button
                icon={<FaArrowRightLong />}
                iconPosition="right"
                outline
                onClick={handleClickOpenOneButtonModalWithContent}
            >
                One Button Modal Open (With Content)
            </Button>
        </div>
    );
};

export default ModalSample;
