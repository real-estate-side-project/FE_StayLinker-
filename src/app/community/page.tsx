'use client';

import React, { useState } from 'react';
import TopRating from './components/TopRating';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import DropBox from './components/DropBox';

interface FormData {
    searchTerm: string;
}

const CommunityPage = () => {
    const router = useRouter();
    // 다 만들어서 넘기기
    const [boardType, setBoardType] = useState<string>('See All');
    const [sorting, setSorting] = useState<string>('latest');

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

    const goToWriteThread = () => {
        router.push('./community/components/WriteThread');
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
            <div>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[28px] mb-[40px]">Threads</h3>
                    <div className="flex">
                        <DropBox optionList={['latest', 'popular']} setValue={setSorting} />
                        <button onClick={goToWriteThread} className="ml-[12px]">
                            Write
                        </button>
                    </div>
                </div>
                {/* {threadList.map((thread) => {
                <Threads thread={thread} />;
            })} */}
            </div>
        </>
    );
};

export default CommunityPage;
