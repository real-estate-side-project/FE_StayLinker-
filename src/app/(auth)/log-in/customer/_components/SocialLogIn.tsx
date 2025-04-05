import Image from 'next/image';

const SocialLogIn = () => {
    return (
        <div className="flex flex-col w-full h-28 gap-6 mt-20">
            <div className="relative flex items-center">
                <hr className="w-full border-gray-300" />
                <span className="absolute bg-white px-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-[16px] whitespace-nowrap">
                    Login/Join with SNS account
                </span>
            </div>

            <div className="flex gap-10 justify-center">
                <Image src="/svg/google-logo.svg" alt="Google" width={56} height={56} />
                <Image src="/svg/apple-logo.svg" alt="Apple" width={56} height={56} />
            </div>
        </div>
    );
};

export default SocialLogIn;
