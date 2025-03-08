import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdGTranslate } from 'react-icons/md';
import Button from '../Buttons/Button';

const MainHeader = () => {
    return (
        <header className="flex justify-between items-center py-3.5 px-60 h-24 backdrop-blur-lg bg-slate-200">
            <div className="flex justify-center items-center gap-12">
                <Link href={'/'}>
                    <Image src="/svg/whiteLogo.svg" alt={`스테이링커로고`} width={210} height={47} />
                </Link>
                <section className="flex gap-3">
                    <Link href={'/'} className="text-white">
                        Listing
                    </Link>
                    <Link href={'/korea-information'} className="text-white">
                        Article
                    </Link>
                    <Link href={'/community'} className="text-white">
                        Community
                    </Link>
                </section>
            </div>
            <section className="flex justify-center items-center gap-6">
                <MdGTranslate size={32} color="white" />
                <Link href={'/log-in'}>
                    <Button priority="secondary">Login/Join</Button>
                </Link>
            </section>
        </header>
    );
};

export default MainHeader;
