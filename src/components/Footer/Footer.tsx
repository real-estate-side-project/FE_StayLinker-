import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-main300 w-full h-44 flex justify-center items-center">
            <div className="flex gap-96">
                <div className="flex justify-start gap-40">
                    <section className="flex flex-col gap-12 justify-center items-start">
                        <div className="flex gap-4 items-center">
                            <Image src="/svg/whiteLogoSymbol.svg" alt="스테이링커 로고" width={39} height={47} />
                            <p className="text-white">
                                We provide a place to connect and introduce <br />
                                homes.
                            </p>
                        </div>
                        <address className="not-italic text-white">
                            Copyright ⓒ 2025 by <strong className="font-bold">StayLinker</strong>
                        </address>
                    </section>

                    <nav className="flex gap-28" aria-label="Footer navigation">
                        <ul className="text-white">
                            <li className="font-bold">Sitemap</li>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                        <ul className="text-white">
                            <li className="font-bold">Help</li>
                            <li>Getting started</li>
                            <li>FAQs</li>
                        </ul>
                    </nav>
                </div>

                <aside className="flex gap-4 items-start">
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
            </div>
        </footer>
    );
};

export default Footer;
