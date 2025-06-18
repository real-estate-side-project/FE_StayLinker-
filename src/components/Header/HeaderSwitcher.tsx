'use client';

import DefaultHeader from '@/components/Header/DefaultHeader';
import MainHeader from '@/components/Header/MainHeader';
import { usePathname } from 'next/navigation';

export default function HeaderSwitcher() {
    const pathname = usePathname();
    const useMainHeader = pathname === '/' || pathname.startsWith('/korea-information');

    return useMainHeader ? <MainHeader /> : <DefaultHeader />;
}
