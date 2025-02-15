'use client';

import ArrowUp from '@/assets/icons/fab/ArrowUp';
import ServiceCenter from '@/assets/icons/fab/ServiceCenter';
import { useRouter } from 'next/navigation';

const FAB = () => {
    const router = useRouter();

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToServiceCenter = (): void => {
        router.push('/service-center');
    };

    return (
        <div className="fixed bottom-20 right-20 flex flex-col justify-center items-center gap-5">
            <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:brightness-95 transition-all"
            >
                <ArrowUp />
            </button>
            <button
                onClick={goToServiceCenter}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-information200 shadow-md hover:brightness-95 transition-all"
            >
                <ServiceCenter />
            </button>
        </div>
    );
};

export default FAB;
