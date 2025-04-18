import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface DropBoxProps {
    optionList: string[];
    setValue: (value: string) => void;
    dummyValue?: string;
}

const DropBox: React.FC<DropBoxProps> = ({ optionList, setValue, dummyValue }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(dummyValue ? dummyValue : optionList[0]);

    const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
        const clickedValue = (event.target as HTMLLIElement).getAttribute('value');
        if (clickedValue !== null) {
            setValue(clickedValue);
            setSelectedValue(clickedValue);
            setIsOpen(false);
        }
    };

    // 다른곳 포커스 or 드롭박스 blur시 닫아야함
    // 드롭박스 펼쳐지면 보더 오렌지
    return (
        <div className="relative">
            <div className="h-10 py-2 px-3 bg-white rounded-lg border border-[#878787] justify-center items-center gap-2 inline-block text-sm">
                <div className="flex flex-nowrap">
                    <p className="text-[#878787]">{selectedValue}</p>
                    <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
                        <BiChevronDown />
                    </div>
                </div>
            </div>
            {isOpen && (
                <ul
                    onClick={handleClick}
                    className="w-full p-2 bg-white rounded-lg border border-[#878787] flex flex-col items-center gap-3 absolute top-11"
                >
                    {optionList
                        .filter((option) => option !== selectedValue)
                        .map((option, index) => (
                            <li
                                key={index}
                                value={option}
                                className="text-[#878787] text-sm cursor-pointer hover:text-[#fc6a1c] hover:bg-[#fef1e5]"
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default DropBox;
