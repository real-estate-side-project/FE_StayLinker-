'use client';

import ArrowUp from '@/assets/icons/fab/ArrowUp';
import ServiceCenter from '@/assets/icons/fab/ServiceCenter';
import { usePathname, useRouter } from 'next/navigation';

const FAB = () => {
    const router = useRouter();
    const pathname = usePathname();

    const isHiddenPage = ['/real-estate'].includes(pathname);

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToServiceCenter = (): void => {
        router.push('/service-center');
    };

    return (
        !isHiddenPage && (
            <div className="z-10 fixed bottom-14 right-8 flex flex-col justify-center items-center gap-5">
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
        )
    );
};

export default FAB;
