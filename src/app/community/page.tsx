'use client';

import React, { useState } from 'react';
import ThreadContainer from './components/ThreadContainer';
import TopRating from './components/TopRating';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
    searchTerm: string;
}

const CommunityPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');
    const { register, handleSubmit, reset, setError } = useForm<FormData>({ mode: 'onSubmit' });
    const changeBoard = (board: string) => {
        setBoardType(board);
    };

    const search: SubmitHandler<FormData> = (data) => {
        if (data.searchTerm.trim().length < 2) {
            // setError('searchTerm', { type: 'manual', message: 'Search term must be at least 2 characters' });
            alert('tut');
            return;
        }
        // data.searchTerm을 백엔드로 보내서 이 단어가 있는 thread만 호출
        console.log(data.searchTerm);
        reset();
    };

    return (
        <>
            <div className="flex justify-between border border-black">
                <div className="flex space-x-[16px]">
                    {['See All', 'Information', 'Community', 'Sale'].map((board) => (
                        <button
                            key={board}
                            className={`flex justify-center items-center px-[12px] py-[8px] rounded-[8px] border-[1px] ${
                                boardType === board
                                    ? 'text-orange-500 border-orange-500'
                                    : 'text-gray-500 border-gray-500'
                            }`}
                            onClick={() => {
                                changeBoard(board);
                            }}
                        >
                            {board}
                        </button>
                    ))}
                </div>
                <form onSubmit={handleSubmit(search)}>
                    <input
                        {...register('searchTerm', {
                            required: 'Please enter a search term'
                        })}
                        placeholder="Enter search term"
                    />
                    <button type="submit">search</button>
                </form>
            </div>
            <TopRating type={boardType} />
            <ThreadContainer type={boardType} />
        </>
    );
};

export default CommunityPage;
