'use client';

import React, { useState } from 'react';
import TopRating from './components/TopRating';
import { useRouter } from 'next/navigation';

import SingleSelect from '@/components/Chips/SingleSelect';
import Threads from '@/components/Threads';
import { MdOutlineEdit } from 'react-icons/md';
import SearchBar from '@/components/SearchBar';

// interface FormData {
//     searchTerm: string;
// }

// interface FetchPostsParams {
//     pageParam: string | null;
//     boardType: string;
//     sortBy: string;
// }

interface Thread {
    type: string;
    userId: string;
    postId: string;
    category: string;
    writer: string;
    title: string;
    summary: string;
    comment: string;
    liked: boolean;
    likedCount: number;
}

// interface Page {
//     data: Thread[];
// }

// 후에 이 함수는 이동시킬까
// const fetchPosts = async ({ pageParam = null, boardType, sortBy }: FetchPostsParams) => {
//     const response = await http.get('/posts', {
//         params: {
//             cursor: pageParam ?? '',
//             boardType,
//             sortBy
//         }
//     });

//     return response.data;
// };

const CommunityPage = () => {
    const router = useRouter();
    const [boardType, setBoardType] = useState('See All');
    const [threadList, setThreadList] = useState<Thread[]>([]);
    // const { register, handleSubmit, reset } = useForm<FormData>({ mode: 'onSubmit' });
    console.log(threadList);

    const goToWriteThread = () => {
        router.push('./community/components/WriteThread');
    };

    const handleSearch = (query: string) => {
        fetch(`/communtiy?search=${query}`)
            .then((res) => res.json())
            .then((data) => setThreadList(data));
    };

    // const handleToggle = async (id: string) => {
    //     const currentThread = threadList.find((t) => t.postId === id);
    //     const wasLiked = currentThread?.liked;

    //     if (wasLiked === undefined) return;

    //     setThreadList((prev) =>
    //         prev.map((thread) =>
    //             thread.postId === id
    //                 ? {
    //                       ...thread,
    //                       liked: !thread.liked,
    //                       likedCount: thread.liked ? thread.likedCount - 1 : thread.likedCount + 1
    //                   }
    //                 : thread
    //         )
    //     );

    //     try {
    //         if (wasLiked) {
    //             await CommunityService.deleteLikeAPI(id);
    //         } else {
    //             await CommunityService.postLikeAPI(id);
    //         }
    //     } catch (error) {
    //         console.error('좋아요 API 실패', error);

    //         setThreadList((prev) =>
    //             prev.map((thread) =>
    //                 thread.postId === id
    //                     ? {
    //                           ...thread,
    //                           liked: wasLiked,
    //                           likedCount: wasLiked ? thread.likedCount + 1 : thread.likedCount - 1
    //                       }
    //                     : thread
    //             )
    //         );
    //     }
    // };

    return (
        <div className="bg-[#F5F5F5] min-h-screen pt-14 pb-10">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between">
                    <SingleSelect
                        optionList={['See All', 'Information', 'Community', 'Sale']}
                        selectedOption={boardType}
                        setSelectedOption={setBoardType}
                    />
                    <SearchBar onSearch={handleSearch} />
                </div>
                {/* type={boardType} */}
                <TopRating />
                <div className="mt-[104px]">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-[#070707] text-[28px] mb-10">Threads</h3>
                        <div className="h-9 px-4 py-1.5 bg-[#fc861c] rounded border border-[#f45900] justify-center items-center gap-1 flex">
                            <button onClick={goToWriteThread} className="ml-3 text-white font-medium">
                                Write
                            </button>
                            <MdOutlineEdit size={24} color="white" />
                        </div>
                    </div>
                    {/* threadList.map(() => (
                    <Threads />
                    )) */}
                    <Threads />
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
