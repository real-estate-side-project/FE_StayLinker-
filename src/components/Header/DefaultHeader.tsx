'use client';

import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAdd, MdGTranslate } from 'react-icons/md';
import Button from '../Buttons/Button';

const DefaultHeader = () => {
    const pathname = usePathname();

    const { isLoggedIn, role, nickname } = useAuth();
    const { logout } = useLogout();

    const isActive = (href: string) => pathname === href;
    const isBusiness = role === 'BUSINESS' || role === 'TEMP_BUSINESS';

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="flex justify-between items-center py-3.5 px-60 h-24 bg-white border-b border-gray300">
            <div role="banner" className="flex justify-center items-center gap-12">
                <Link href={'/'}>
                    <Image src="/svg/orangeLogo.svg" alt="스테이링커 로고" width={210} height={47} />
                </Link>

                <nav className="relative">
                    <ul className="flex gap-8">
                        <li>
                            <Link href={'/real-estate'} className="relative text-gray910 flex flex-col items-center">
                                <span className={`${isActive('/real-estate') ? 'text-main400' : ''}`}>Listing</span>
                                {isActive('/real-estate') && (
                                    <span className="absolute -bottom-9 w-full h-0.5 bg-main400"></span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/korea-information'}
                                className="relative text-gray910 flex flex-col items-center"
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
                            <Link href={'/community'} className="relative text-gray910 flex flex-col items-center">
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
                {isLoggedIn ? (
                    <>
                        <Image src="/svg/bell-default-black.svg" alt="alert icon" width={32} height={32} />
                        <MdGTranslate size={32} />
                        <p className="pc-body-s-500 text-gray910">{nickname}</p>
                        <button onClick={handleLogout} className="pc-body-s-500 text-gray910">
                            Logout
                        </button>
                        {isBusiness && (
                            <Button priority="tertiary" size="md" icon={<MdAdd />} iconPosition="right">
                                Add Property
                            </Button>
                        )}
                    </>
                ) : (
                    <>
                        <MdGTranslate size={32} />
                        <Link href={'/log-in/customer'}>
                            <Button priority="secondary">Login/Join</Button>
                        </Link>
                    </>
                )}
            </aside>
        </header>
    );
};

export default DefaultHeader;
