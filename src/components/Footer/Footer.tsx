'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    if (pathname === '/real-estate' || pathname === '/real-estate/') return null;

    return (
        <footer
            className="
        bg-main300 w-full
        border-t border-white/10
      "
            aria-label="Site footer"
        >
            {/* 1920 기준 중앙 고정 컨테이너: 좌우 여백은 안정적으로 */}
            <div
                className="
          mx-auto
          max-w-[1440px]
          px-12
          py-10
        "
            >
                {/* 레이아웃: 좌측(브랜드+내비 그리드) / 우측(소셜) */}
                <div
                    className="
            grid
            grid-cols-[minmax(420px,1fr)_auto]
            gap-x-20
          "
                >
                    {/* 좌측: 브랜드+문구+카피라이트 + 내비게이션 */}
                    <div className="grid grid-cols-[minmax(420px,520px)_1fr] gap-x-20 gap-y-8 items-start">
                        {/* 브랜드 & 카피 */}
                        <section className="flex flex-col gap-5 justify-start items-start">
                            <div className="flex items-center gap-4">
                                <Link href="/" aria-label="Go to home">
                                    <Image
                                        src="/svg/whiteLogoSymbol.svg"
                                        alt="스테이링커 로고"
                                        width={39}
                                        height={47}
                                        priority
                                    />
                                </Link>
                                <p className="pc-body-s-500 text-white">
                                    We provide a place to connect and introduce homes.
                                </p>
                            </div>

                            <address className="not-italic text-white/90 pc-body-s-500">
                                Copyright ⓒ 2025 by <strong className="font-bold text-white">StayLinker</strong>
                            </address>
                        </section>

                        {/* 내비게이션 3컬럼 */}
                        <nav
                            className="
                grid grid-cols-3 gap-12
                text-white
              "
                            aria-label="Footer navigation"
                        >
                            <ul className="space-y-3">
                                <li className="pc-title-xs-700">Sitemap</li>
                                <li className="pc-body-s-500 whitespace-nowrap">About us</li>
                                <li className="pc-body-s-500 whitespace-nowrap">Blog</li>
                                <li className="pc-body-s-500 whitespace-nowrap">Contact us</li>
                            </ul>

                            <ul className="space-y-3">
                                <li className="pc-title-xs-700">Help</li>
                                <li className="pc-body-s-500 whitespace-nowrap">Getting started</li>
                                <li className="pc-body-s-500 whitespace-nowrap">FAQs</li>
                            </ul>

                            <ul className="space-y-3">
                                <li className="pc-title-xs-700">Policy</li>
                                <li className="pc-body-s-500 whitespace-nowrap">Terms of Service</li>
                                <li className="pc-body-s-500 whitespace-nowrap">Privacy Policy</li>
                            </ul>
                        </nav>
                    </div>

                    {/* 우측: 소셜 아이콘 (콘텐츠 높이에 자연 정렬) */}
                    <aside className="flex items-start justify-end gap-4">
                        <a href="#" aria-label="Facebook" className="shrink-0">
                            <Image src="/svg/facebook-logo.svg" alt="Facebook" width={32} height={32} />
                        </a>
                        <a href="#" aria-label="Twitter" className="shrink-0">
                            <Image src="/svg/twitter-logo.svg" alt="Twitter" width={32} height={32} />
                        </a>
                        <a href="#" aria-label="Instagram" className="shrink-0">
                            <Image src="/svg/instagram-logo.svg" alt="Instagram" width={32} height={32} />
                        </a>
                    </aside>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
