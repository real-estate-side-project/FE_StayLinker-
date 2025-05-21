'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdGTranslate } from 'react-icons/md';
import Button from '../Buttons/Button';

const MainHeader = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <header className="absolute top-0 left-0 w-full h-24 z-50 bg-white/20 backdrop-blur-[50px] flex justify-between items-center px-60">
            <div role="banner" className="flex items-center gap-12">
                <Link href={'/'}>
                    <Image src="/svg/whiteLogo.svg" alt="스테이링커 로고" width={210} height={47} />
                </Link>

                <nav className="relative">
                    <ul className="flex gap-8">
                        <li>
                            <Link href={'/real-estate'} className="relative text-white flex flex-col items-center">
                                <span className={`${isActive('/real-estate') ? 'text-main400' : ''}`}>Listing</span>
                                {isActive('/real-estate') && (
                                    <span className="absolute -bottom-9 w-full h-0.5 bg-main400"></span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/korea-information'}
                                className="relative text-white flex flex-col items-center"
                            >
                                <span className={`${isActive('/korea-information') ? 'text-main400' : ''}`}>
                                    Article
                                </span>
                                {isActive('/korea-information') && (
                                    <span className="absolute -bottom-9 w-full h-0.5 bg-main400"></span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link href={'/community'} className="relative text-white flex flex-col items-center">
                                <span className={`${isActive('/community') ? 'text-main400' : ''}`}>Community</span>
                                {isActive('/community') && (
                                    <span className="absolute -bottom-9 w-full h-0.5 bg-main400"></span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <aside className="flex justify-center items-center gap-6">
                <MdGTranslate size={32} className="text-white" />
                <Link href={'/log-in/customer'}>
                    {/* <Button priority="primary">Login/Join</Button> */}
                    <Button priority="overlay" size="lg">
                        Login/Join
                    </Button>
                </Link>
            </aside>
        </header>
    );
};

export default MainHeader;
