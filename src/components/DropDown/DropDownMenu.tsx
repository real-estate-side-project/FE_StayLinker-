'use client';

type DropdownItem = {
    label: string;
    value: string | number;
};

type DropdownMenuProps = {
    items: DropdownItem[];
    selectedValue: string | number;
    onSelect: (value: string | number) => void;
};

const DropdownMenu = ({ items, selectedValue, onSelect }: DropdownMenuProps) => {
    return (
        <ul className="absolute top-full left-0 z-10 bg-white border border-gray600 w-auto min-w-fit max-h-60 overflow-y-auto mt-1 rounded">
            {items.map((item) => (
                <li
                    key={item.value}
                    onClick={() => onSelect(item.value)}
                    className={`px-4 py-2 cursor-pointer pc-body-s-500 text-gray600 hover:bg-bg100 whitespace-nowrap ${
                        selectedValue === item.value ? 'bg-bg100' : 'bg-white'
                    }`}
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

export default DropdownMenu;
