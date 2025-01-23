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
    return (
        <div className="w-[124px] h-[40px] py-[8px] px-[12px] border border-black">
            <div className="flex flex-nowrap">
                {selectedValue}
                <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer ml-[8px]">
                    (Icon)
                </div>
            </div>
            {isOpen && (
                <ul onClick={handleClick} className="">
                    {optionList
                        .filter((option) => option !== selectedValue)
                        .map((option, index) => (
                            <li key={index} value={option} className="">
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default DropBox;
