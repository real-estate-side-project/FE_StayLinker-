'use client';

import { ComponentProps, Dispatch, SetStateAction, useId, useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type DropdownProps = {
    options: string[];
    label?: string;
    validationMessage?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
} & ComponentProps<'input'>;

const Dropdown = ({ options, label, validationMessage, value, setValue, id, ...props }: DropdownProps) => {
    const randomId = useId();
    const dropdownId = id || randomId;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleDropdown = (): void => {
        setIsOpen((prev) => !prev);
    };

    const handleSelectOption = (option: string): void => {
        setValue(option);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={dropdownId} className="font-medium text-sm mb-1 text-gray-500 cursor-pointer">
                    {label}
                </label>
            )}
            <div className="w-full relative">
                <input
                    id={dropdownId}
                    type="text"
                    readOnly
                    value={value}
                    className="flex items-center justify-around w-full px-3 py-1.5 border border-gray-500 text-gray-500 rounded-lg bg-white font-normal text-base focus:outline-gray-900 focus:text-gray-900 transition-all cursor-default"
                    {...props}
                />
                <span
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-base text-gray-500 cursor-pointer"
                    onClick={handleToggleDropdown}
                >
                    {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                </span>
            </div>
            {isOpen && (
                <ul className="w-full border bg-gray-100 rounded-lg px-2 py-1.5 mt-1 flex flex-col gap-1">
                    {options.length > 0 &&
                        options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectOption(option)}
                                className="px-1 text-gray-500 text-base cursor-pointer hover:bg-gray-200 rounded transition-all"
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            )}
            {validationMessage && (
                <span className="mt-1 font-normal text-sm text-gray-500">{`* ${validationMessage}`}</span>
            )}
        </div>
    );
};

export default Dropdown;
