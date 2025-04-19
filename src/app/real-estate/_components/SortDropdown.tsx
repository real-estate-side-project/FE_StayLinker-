'use client';

import Button from '@/components/Buttons/Button';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const SORT_OPTIONS = ['Recent', 'Price: High to Low', 'Price: Low to High'];

interface SortDropdownProps {
    selected: string | null;
    onSelect: (option: string) => void;
}

const SortDropdown = ({ selected, onSelect }: SortDropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <Button
                priority={'gray'}
                size={'sm'}
                icon={isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selected || 'Array'}
            </Button>
            {isOpen && (
                <ul className="absolute z-10 right-0 mt-2 bg-white border border-gray600 rounded">
                    {SORT_OPTIONS.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                onSelect(option);
                                setIsOpen(false);
                            }}
                            className={`px-3 py-2 text-base font-medium cursor-pointer hover:bg-bg100 whitespace-nowrap transition-all`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;
