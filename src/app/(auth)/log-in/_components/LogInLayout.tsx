'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import SocialLogIn from '../customer/_components/SocialLogIn';
import JoinBottomLinks from './JoinBottomLinks';
import LogInSwitcher from './LogInSwitcher';

interface Props {
    children: React.ReactNode;
}

const LogInLayout = ({ children }: Props) => {
    const pathname = usePathname();
    const isAgent = pathname.includes('/agent');
    const accountType = isAgent ? 'agent' : 'customer';

    return (
        <div className="w-[454px] mt-[72px]">
            <LogInSwitcher accountType={accountType} />
            {children}
            <JoinBottomLinks accountType={accountType} />
            {accountType === 'customer' && <SocialLogIn />}
        </div>
    );
};

export default LogInLayout;
