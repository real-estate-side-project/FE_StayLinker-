import FAB from '@/components/FAB';
import { ModalProvider } from '@/providers/ModalProvider';
import QueryProvider from '@/providers/TanStackQueryClientProvider';
import { ToastProvider } from '@/providers/ToastProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import MainHeader from '@/components/Header/MainHeader';
import DefaultHeader from '@/components/Header/DefaultHeader';

const pretendard = localFont({
    src: '../fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard'
});

export const metadata: Metadata = {
    title: 'Find Your Home in Korea',
    description:
        'Discover homes, valuable insights, and essential information for living in Korea. Your guide to settling in comfortably.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${pretendard.variable} font-pretendard`}>
                <QueryProvider>
                    <ToastProvider>
                        <ModalProvider>
                            <DefaultHeader />
                            {children}
                            <div className="mo:hidden">
                                <FAB />
                            </div>
                        </ModalProvider>
                    </ToastProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
