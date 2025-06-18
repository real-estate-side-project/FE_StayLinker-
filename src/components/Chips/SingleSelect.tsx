import React from 'react';

interface SingleSelectProps {
    optionList: string[];
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const SingleSelect = ({ optionList, selectedOption, setSelectedOption }: SingleSelectProps) => {
    return (
        <div className="h-10 gap-4 flex">
            {optionList.map((option) => (
                <button
                    key={option}
                    className={`px-3 py-2 rounded-lg border justify-center items-center flex ${
                        selectedOption === option
                            ? 'text-orange-500 border-orange-500 font-bold'
                            : 'text-gray-500 border-gray-500'
                    }`}
                    onClick={() => {
                        setSelectedOption(option);
                    }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default SingleSelect;
