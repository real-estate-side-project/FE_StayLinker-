'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    if (pathname === '/real-estate' || pathname === '/real-estate/') {
        return null;
    }

    return (
        <footer className="bg-main300 w-full h-44 flex justify-between items-start py-6 px-60 gap-60">
            <div className="flex justify-start gap-40">
                <section className="flex flex-col gap-12 justify-center items-start">
                    <div className="flex gap-4 items-center">
                        <Link href={'/'}>
                            <Image src="/svg/whiteLogoSymbol.svg" alt="스테이링커 로고" width={39} height={47} />
                        </Link>
                        <p className="pc-body-s-500 text-white ">We provide a place to connect and introduce homes.</p>
                    </div>
                    <address className="not-italic text-white">
                        Copyright ⓒ 2025 by <strong className="font-bold">StayLinker</strong>
                    </address>
                </section>

                <nav className="flex gap-32" aria-label="Footer navigation">
                    <ul className="text-white">
                        <li className="pc-title-xs-700">Sitemap</li>
                        <li className="pc-body-s-500 whitespace-nowrap">About us</li>
                        <li className="pc-body-s-500 whitespace-nowrap">Blog</li>
                        <li className="pc-body-s-500 whitespace-nowrap">Contact us</li>
                    </ul>
                    <ul className="text-white">
                        <li className="pc-title-xs-700 ">Help</li>
                        <li className="pc-body-s-500 whitespace-nowrap">Getting started</li>
                        <li className="pc-body-s-500 whitespace-nowrap">FAQs</li>
                    </ul>
                    <ul className="text-white">
                        <li className="pc-title-xs-700">Policy</li>
                        <li className="pc-body-s-500 whitespace-nowrap">Terms of Service</li>
                        <li className="pc-body-s-500 whitespace-nowrap">Privacy Policy</li>
                    </ul>
                </nav>
            </div>

            <aside className="flex gap-4">
                <a href="#" aria-label="Facebook">
                    <Image src="/svg/facebook-logo.svg" alt="Facebook" width={32} height={32} />
                </a>
                <a href="#" aria-label="Twitter">
                    <Image src="/svg/twitter-logo.svg" alt="Twitter" width={32} height={32} />
                </a>
                <a href="#" aria-label="Instagram">
                    <Image src="/svg/instagram-logo.svg" alt="Instagram" width={32} height={32} />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
