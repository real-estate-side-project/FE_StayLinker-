import { ComponentProps, FormEvent } from 'react';
import { IoIosSearch } from 'react-icons/io';

type SearchBarProps = {
    onSubmit: (e: FormEvent) => void;
} & ComponentProps<'input'>;

const SearchBar = ({ onSubmit, ...props }: SearchBarProps) => {
    return (
        <form className="flex w-full items-center justify-between border-b text-base text-gray-500" onSubmit={onSubmit}>
            <input className="px-1 focus:outline-none" placeholder="Search.." {...props} />
            <button type="submit">
                <IoIosSearch />
            </button>
        </form>
    );
};

export default SearchBar;
