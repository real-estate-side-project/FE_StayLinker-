import Link from 'next/link';
import React from 'react';

interface ServiceButtonProps {
    href: string;
    icon: React.ReactNode;
    title: string;
}

export const ServiceButton = ({ href, icon, title }: ServiceButtonProps) => {
    return (
        <Link href={href}>
            <div className="w-[200px] h-[240px] border border-bg500 rounded-lg bg-bg50 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center justify-center gap-4">
                    {icon}
                    <span className="pc-title-s-700">{title}</span>
                </div>
            </div>
        </Link>
    );
};
