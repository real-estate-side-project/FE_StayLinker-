'use client';

import Link from 'next/link';

interface Props {
    accountType: 'agent' | 'customer';
}

const JoinBottomLinks = ({ accountType }: Props) => {
    const isAgent = accountType === 'agent';

    return (
        <div className="flex w-full justify-between text-gray-500 text-[16px]">
            <Link href={`/forgot-password/${accountType}`}>
                <p className="underline">Forgot password?</p>
            </Link>
            <p>
                {isAgent ? 'Don’t have an Agent account?' : "Don't have an account?"}
                <Link href={`/sign-up/${accountType}`}>
                    <span className="text-sub500 underline"> Join</span>
                </Link>
            </p>
        </div>
    );
};

export default JoinBottomLinks;
