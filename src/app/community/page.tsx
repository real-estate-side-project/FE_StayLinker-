'use client';

import React, { useEffect, useRef, useState } from 'react';
import TopRating from './components/TopRating';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import DropBox from './components/DropBox';
import http from '@/http/http.interceptors.request';
import { useInfiniteQuery } from '@tanstack/react-query';
import Threads from './components/Threads';

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
    const [boardType, setBoardType] = useState<string>('See All');
    const [sortBy, setSortBy] = useState<string>('latest');
    const { register, handleSubmit, reset } = useForm<FormData>({ mode: 'onSubmit' });

    const changeBoard = (board: string) => {
        setBoardType(board);
    };

    const goToWriteThread = () => {
        router.push('./community/components/WriteThread');
    };

    // 이동할까
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

    ////
    // const observerRef = useRef(null);
    // const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    //     queryKey: ['posts'],
    //     queryFn: ({ pageParam = null }) => fetchPosts({ pageParam, boardType, sortBy }),
    //     getNextPageParam: (lastPage) => lastPage.nextCursor,
    //     initialPageParam: null
    // });

    // useEffect(() => {
    //     if (!observerRef.current || !hasNextPage || isFetchingNextPage) return;

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             if (entries[0].isIntersecting) {
    //                 fetchNextPage();
    //             }
    //         },
    //         { threshold: 1 }
    //     );

    //     observer.observe(observerRef.current);

    //     return () => observer.disconnect();
    // }, [hasNextPage, isFetchingNextPage]);

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
                        <DropBox optionList={['latest', 'popular']} setValue={setSortBy} />
                        <button onClick={goToWriteThread} className="ml-[12px]">
                            Write
                        </button>
                    </div>
                </div>
                {/*  */}
                {/* <div>
                    {data?.pages.map((page: Page, pageIndex) => (
                        <div key={pageIndex}>
                            {page.data.map((thread) => (
                                <Threads thread={thread} />
                            ))}
                        </div>
                    ))}
                </div>
                <div ref={observerRef} className="h-10" />
                {isFetchingNextPage && <p>Loading more...</p>} */}
            </div>
        </>
    );
};

export default CommunityPage;
