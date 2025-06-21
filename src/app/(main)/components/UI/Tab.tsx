import { cva } from 'class-variance-authority';
import React from 'react';

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isActive?: boolean;
}

const tabVariants = cva('rounded-t-lg border-bg500 px-6 py-2', {
    variants: {
        isActive: {
            true: 'border-t-2 border-x-2 border-bg500 bg-white',
            false: 'bg-[#FFFFFF]/70 backdrop-blur-sm'
        }
    },
    defaultVariants: {
        isActive: true
    }
});

const tabTitleVariants = cva('', {
    variants: {
        isActive: {
            true: 'text-main700 pc-body-s-700',
            false: 'text-main500 pc-body-s-500'
        }
    }
});
export const Tab = ({ title, isActive, ...props }: TabProps) => {
    return (
        <button className={tabVariants({ isActive })} {...props}>
            <span className={tabTitleVariants({ isActive })}>{title}</span>
        </button>
    );
};

export default Tab;
