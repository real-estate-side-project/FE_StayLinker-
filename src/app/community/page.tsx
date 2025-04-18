'use client';

import React, { useEffect, useRef, useState } from 'react';
import TopRating from './components/TopRating';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import http from '@/http/http.interceptors.request';
import { useInfiniteQuery } from '@tanstack/react-query';

import SingleSelect from '@/components/Chips/SingleSelect';
import Threads from '@/components/Threads';
import { MdOutlineEdit } from 'react-icons/md';

interface FormData {
    searchTerm: string;
}

interface FetchPostsParams {
    pageParam: string | null;
    boardType: string;
    sortBy: string;
}

interface Thread {
    type: string;
    useId: string;
    category: string;
    writer: string;
    title: string;
    summary: string;
    comment: string;
    liked: number;
}

interface Page {
    data: Thread[];
}

// 후에 이 함수는 이동시킬까
const fetchPosts = async ({ pageParam = null, boardType, sortBy }: FetchPostsParams) => {
    const response = await http.get('/posts', {
        params: {
            cursor: pageParam ?? '',
            boardType,
            sortBy
        }
    });

    return response.data;
};

const CommunityPage = () => {
    const router = useRouter();
    const [boardType, setBoardType] = useState('See All');
    const { register, handleSubmit, reset } = useForm<FormData>({ mode: 'onSubmit' });

    const goToWriteThread = () => {
        router.push('./community/components/WriteThread');
    };

    return (
        <div className="bg-[#F5F5F5] h-screen">
            <div className="max-w-[1440px] mx-auto mt-36">
                <div className="flex justify-between">
                    <SingleSelect
                        optionList={['See All', 'Information', 'Community', 'Sale']}
                        selectedOption={boardType}
                        setSelectedOption={setBoardType}
                    />
                    {/* search bar */}
                </div>
                <TopRating type={boardType} />
                <div className="mt-[104px]">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-[#070707] text-[28px] mb-10">Threads</h3>
                        <div className="h-9 w-24 px-4 py-1.5 bg-[#fc861c] rounded border border-[#f45900] justify-center items-center gap-1 flex">
                            <button onClick={goToWriteThread} className="ml-3 text-white font-medium">
                                Write
                            </button>
                            <MdOutlineEdit />
                        </div>
                    </div>
                    <Threads />
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
