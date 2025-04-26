import FAB from '@/components/FAB';
import Footer from '@/components/Footer/Footer';
import DefaultHeader from '@/components/Header/DefaultHeader';
import { ModalProvider } from '@/providers/ModalProvider';
import QueryProvider from '@/providers/TanStackQueryClientProvider';
import { ToastProvider } from '@/providers/ToastProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
                            <Footer />
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
