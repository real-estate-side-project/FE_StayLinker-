'use client';

import { PropsWithChildren, useState } from 'react';

interface ToggleProps {
    initialState?: boolean;
    onToggle?: (state: boolean) => void;
    disabled?: boolean;
    size?: 'md' | 'lg';
}

const Toggle = ({
    children,
    initialState = false,
    onToggle,
    disabled = false,
    size = 'md'
}: PropsWithChildren<ToggleProps>) => {
    const [isOn, setIsOn] = useState<boolean>(initialState);

    const handleToggle = (): void => {
        if (disabled) return;

        const newState = !isOn;
        setIsOn(newState);

        if (onToggle) {
            onToggle(newState);
        }
    };

    const sizeStyles = {
        md: {
            container: 'w-8 h-5',
            circle: 'w-4 h-4',
            translate: 'translate-x-3'
        },
        lg: {
            container: 'w-10 h-6',
            circle: 'w-5 h-5',
            translate: 'translate-x-4'
        }
    };

    const { container, circle, translate } = sizeStyles[size];

    return (
        <div className={`flex items-center justify-center gap-2 ${disabled ? 'text-gray500' : 'text-gray910'}`}>
            <div
                onClick={handleToggle}
                className={`flex items-center rounded-full p-0.5 transition-colors  ${
                    disabled ? 'cursor-not-allowed bg-gray100' : `cursor-pointer ${isOn ? 'bg-main400' : 'bg-gray100'}`
                } ${container}`}
            >
                <div
                    className={`rounded-full transform transition-transform ${isOn ? translate : 'translate-x-0'} ${
                        disabled ? 'bg-gray300' : 'bg-white'
                    } ${circle}`}
                />
            </div>
            {children || 'Switch'}
        </div>
    );
};

export default Toggle;
