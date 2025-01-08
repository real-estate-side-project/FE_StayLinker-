'use client';

import React, { useState } from 'react';
import ThreadContainer from './components/ThreadContainer';
import TopRating from './components/TopRating';

const CommunityPage = () => {
    const [boardType, setBoardType] = useState<string>('See All');

    const changeBoard = (board: string) => {
        setBoardType(board);
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
                {/* search */}
                <div>searchBar</div>
            </div>
            <TopRating type={boardType} />
            <ThreadContainer type={boardType} />
        </>
    );
};

export default CommunityPage;
