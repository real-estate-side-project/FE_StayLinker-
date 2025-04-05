'use client';

import Button from '@/components/Buttons/Button';
import Link from 'next/link';

type AccountType = 'customer' | 'agent';

interface LogInSwitcherProps {
    accountType: AccountType;
}

const LogInSwitcher = ({ accountType }: LogInSwitcherProps) => {
    return (
        <>
            <p className="font-bold text-[28px] mb-10 text-center">LogIn</p>
            <div className="flex gap-10 mb-10 w-[454px]">
                <Link href={`/log-in/customer`} className="w-full">
                    <Button priority={accountType === 'customer' ? 'primary' : 'secondary'} size="md" fullWidth>
                        Customer
                    </Button>
                </Link>
                <Link href={`/log-in/agent`} className="w-full">
                    <Button priority={accountType === 'agent' ? 'primary' : 'secondary'} size="md" fullWidth>
                        Agent
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default LogInSwitcher;
