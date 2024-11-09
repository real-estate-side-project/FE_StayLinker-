'use client';

import SearchBar from '@/components/Inputs/SearchBar';
import { useToast } from '@/providers/ToastProvider';
import { ChangeEvent, FormEvent, useState } from 'react';

const SearchBarSample = () => {
    const toast = useToast();

    const [keyword, setKeyword] = useState<string>('');

    const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>): void => setKeyword(e.target.value);

    const handleSubmitSearchKeyword = (e: FormEvent): void => {
        e.preventDefault();
        toast.on({ message: `Searching for: ${keyword}` });
    };

    return (
        <div className="flex flex-col border-2 p-6 gap-1">
            <h1 className="text-3xl font-bold pb-1">Search Bar</h1>
            <SearchBar onSubmit={handleSubmitSearchKeyword} value={keyword} onChange={handleChangeKeyword} />
        </div>
    );
};

export default SearchBarSample;
