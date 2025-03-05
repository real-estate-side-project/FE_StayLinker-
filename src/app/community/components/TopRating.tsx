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
            id: 5,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
        {
            id: 5,
            title: 'BEST Korean Diner by Foodie fighter Friend',
            content: 'List of the best diners I’ve visited in Seoul, South Korea. I really love sooooo',
            writer: 'writer1',
            liked: 7
        },
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
                            <div>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div>{el.liked}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRating;
