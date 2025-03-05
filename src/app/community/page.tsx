'use client';

import React, { useEffect, useRef, useState } from 'react';
import TopRating from './components/TopRating';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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
        <div className="bg-[#F5F5F5] h-screen">
            <div className="max-w-[1440px] mx-auto mt-36">
                <div className="flex justify-between">
                    {/* 이거 아티클 쪽에서도 쓰이는데 공통으로 빼려면 어디 폴더로 보내야 할까 */}
                    {/* 이거 아래에 있는 검색 부분도 가져오네 묶어버릴까 안그래도 이 파일 너무 길었는데 */}
                    {/* 그렇게 할꺼면 훅폼 이용 빼자 번거로움 필요도 없고 */}
                    {/* 검색도 따로 분리하기 faq에도 있음 */}
                    <div className="h-10 gap-4 flex">
                        {['See All', 'Information', 'Community', 'Sale'].map((board) => (
                            <button
                                key={board}
                                className={`px-3 py-2 rounded-lg border justify-center items-center flex ${
                                    boardType === board
                                        ? 'text-orange-500 border-orange-500 font-bold'
                                        : 'text-gray-500 border-gray-500'
                                }`}
                                onClick={() => {
                                    setBoardType(board);
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
                            className="text-[#878787] w-[724px] border-b-2 border-[#878787] mr-1 bg-transparent"
                        />
                        <button type="submit">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" />
                                <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#F55A00" />
                                <path
                                    d="M15.5 9C17.2239 9 18.8772 9.68482 20.0962 10.9038C21.3152 12.1228 22 13.7761 22 15.5C22 17.11 21.41 18.59 20.44 19.73L20.71 20H21.5L26.5 25L25 26.5L20 21.5V20.71L19.73 20.44C18.5504 21.4465 17.0506 21.9996 15.5 22C13.7761 22 12.1228 21.3152 10.9038 20.0962C9.68482 18.8772 9 17.2239 9 15.5C9 13.7761 9.68482 12.1228 10.9038 10.9038C12.1228 9.68482 13.7761 9 15.5 9ZM15.5 11C13 11 11 13 11 15.5C11 18 13 20 15.5 20C18 20 20 18 20 15.5C20 13 18 11 15.5 11Z"
                                    fill="#F55A00"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <TopRating type={boardType} />
                <div className="mt-[104px]">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-[#070707] text-[28px] mb-10">Threads</h3>
                        <div className="h-9 w-24 px-4 py-1.5 bg-[#fc861c] rounded border border-[#f45900] justify-center items-center gap-1 flex">
                            <button onClick={goToWriteThread} className="ml-3 text-white font-medium">
                                Write
                            </button>
                            <div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.7167 7.5L12.5 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.5ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Threads />
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
            </div>
        </div>
    );
};

export default CommunityPage;
