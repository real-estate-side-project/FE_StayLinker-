// components/SearchBar.tsx
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() === '') return;
        onSearch(query);
    };

    return (
        <div className="flex gap-1 h-9 cursor-pointer">
            <input
                type="text"
                className="border-b border-[#878787] w-[452px] bg-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
            />
            <div
                className="bg-white rounded border border-[#f45900] flex justify-center items-center w-9"
                onClick={handleSearch}
            >
                <IoMdSearch className="text-[#f45900]" />
            </div>
        </div>
    );
};

export default SearchBar;
