'use client';

import Button from '@/components/Buttons/Button';
import { useToast } from '@/providers/ToastProvider';
import { FaArrowRightLong } from 'react-icons/fa6';

const ToastSample = () => {
    const toast = useToast();

    const handleClickOpenToast = (): void => {
        toast.on({ message: 'Toast Message:)' });
    };

    return (
        <Button icon={<FaArrowRightLong />} iconPosition="right" outline onClick={handleClickOpenToast}>
            Toast Open
        </Button>
    );
};

export default ToastSample;
