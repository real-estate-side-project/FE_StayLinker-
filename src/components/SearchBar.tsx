import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const SearchBar = () => {
    const search = () => {};

    return (
        <div className="flex gap-1 h-9">
            <input onClick={() => search()} type="text" className="border-b border-[#878787] w-[452px]" />
            <div className="bg-white rounded border border-[#f45900] flex justify-center items-center w-9">
                <IoMdSearch className="text-[#f45900]" />
            </div>
        </div>
    );
};

export default SearchBar;
