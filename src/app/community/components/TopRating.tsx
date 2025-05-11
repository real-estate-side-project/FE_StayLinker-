import Link from 'next/link';
import React, { useState } from 'react';
import { TiHeartOutline } from 'react-icons/ti';

interface TopRatingProps {
    type: string;
}

// tem, recheck api, maybeM commen type
interface Item {
    id: number;
    title: string;
    content: string;
    writer: string;
    liked: number;
}

const TopRating = ({ type }: TopRatingProps) => {
    const [topThreads, setTopThreads] = useState<Item[]>([
        {
            id: 1,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 2,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 3,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 4,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 5,
            title: 'BEST Korean Diner  22222',
            content: 'List of the best diner2222',
            writer: 'writer2',
            liked: 3
        }
    ]);

    const callTopThread = () => {
        // ftn0: call type thread list limt in latest 1 month -> setTopthreads
        // 필요한 개수 만큼의 데이터만 받아와야함(6개 or 5개)
    };

    return (
        <div className="h-[300px] mt-8">
            <h3 className="mb-10 text-[#070707] text-[28px] font-bold">Top threads</h3>
            <div className="flex flex-col gap-4">
                {topThreads.map((el, index) => (
                    <div key={el.id} className="flex justify-between items-center">
                        <div className="flex space-x-9 font-medium text-[#070707] text-lg">
                            <p>{index + 1}</p>
                            <Link href={`./community/${el.id}`} className="flex space-x-9">
                                <p>{el.title}</p>
                                <p className="text-[#878787]">{el.content}</p>
                                <p>{el.writer}</p>
                            </Link>
                        </div>
                        <div className="flex justify-center gap-1">
                            <TiHeartOutline />
                            <div>{el.liked}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRating;
