import React, { useState } from 'react';

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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
                                fill="#878787"
                            />
                        </svg>
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
