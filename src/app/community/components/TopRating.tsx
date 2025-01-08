import Link from 'next/link';
import React, { useState } from 'react';

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
            id: 5,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 7,
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
        <div className="border border-green-500 mt-8">
            <h3 className="font-bold text-[28px] mb-[40px]">Top threads</h3>
            <div className="font-medium text-[18px]">
                {topThreads.map((el, index) => {
                    return (
                        <div key={el.id} className="flex justify-between">
                            <div className="flex space-x-[36px]">
                                <p>{index + 1}</p>
                                <Link href={`./community/${el.id}`} className="flex">
                                    <p>{el.title}</p>
                                    <p>{el.content}</p>
                                    <p>{el.writer}</p>
                                </Link>
                            </div>
                            <div className="flex">
                                <div>heartIcon</div>
                                <div className="ml-[4px]">{el.liked}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopRating;
