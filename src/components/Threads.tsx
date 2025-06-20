import Ellipsis from '@/app/community/components/Ellipsis';
import React, { useState } from 'react';
import { HiOutlineChat } from 'react-icons/hi';
import { HiMiniArrowUpTray } from 'react-icons/hi2';
import { MdChatBubbleOutline, MdMoreHoriz } from 'react-icons/md';
import { TiHeartOutline } from 'react-icons/ti';

// interface Thread {
//     userId: string;
//     category: string;
//     writer: string;
//     title: string;
//     summary: string;
//     comment: number;
//     liked: number;
// }

// interface ThreadsProps {
//     thread: Thread;
// }

const thread = {
    category: 'Community',
    userId: 'asdf',
    writer: 'Foodie F.F',
    title: 'Best Korean Diner by Foodie Fighter Friend',
    summary:
        'List of the Best Diners I’ve Visited in Seoul, South Korea. dnfmfmfmRkRnd dkssudgktpdy wjsms wlrma tlatlagotj xptmxm answkdufdmf dlqfurgkrh dlTtmqslek. List of the Best Diners I’ve Visited in Seoul, South Korea. dnfmfmfmRkRnd dkssudgktpdy wjsms wlrma tlatlagotj xptmxm answkdufdmf dlqfurgkrh dlTtmqslek. List of the Best Diners I’ve Visited in Seoul, South Korea. dnfmfmfmRkRnd dkssudgktpdy wjsms wlrma tlatlagotj xptmxm answkdufdmf dlqfurgkrh dlTtmqslek. List of the Best Diners I’ve Visited in Seoul, South Korea. dnfmfmfmRkRnd dkssudgktpdy wjsms wlrma tlatlagotj xptmxm answkdufdmf dlqfurgkrh dlTtmqslek.',
    comment: 3,
    liked: 5
};
// { thread }: ThreadsProps

const Threads = () => {
    const isMarket = thread.category === 'market';
    const isMain = thread.userId === 'middleWare userId check';
    const [view, setView] = useState(false);

    const handleChat = () => {
        console.log('chat call');
    };

    const callComment = () => {
        console.log('comment process');
    };

    return (
        <div className="p-9 bg-white rounded-[32px] border border-[#ebe5d9] flex-col space-y-6">
            <div className="flex justify-between">
                <div className="text-[#878787] gap-4 flex">
                    <p className="font-bold">{thread.category}</p>
                    <p className="font-medium">{thread.writer}</p>
                </div>
                <div className="relative">
                    <button
                        onClick={() => {
                            setView((prev) => !prev);
                        }}
                    >
                        <MdMoreHoriz size={24} />
                    </button>
                    {view && <Ellipsis isMarket={isMarket} isMain={isMain} />}
                </div>
            </div>

            <div className="flex-col gap-8 flex">
                <div className="flex-col gap-6 flex">
                    <p className="text-[#070707] text-xl font-bold">{thread.title}</p>
                    <p className="text-[#070707] text-lg font-medium">{thread.summary}</p>
                </div>

                <div className="flex gap-4">
                    <button className="flex items-center gap-1">
                        <TiHeartOutline size={24} />
                        <p className="text-lg">{thread.liked}</p>
                    </button>
                    <button onClick={() => callComment()} className="flex items-center gap-1">
                        <MdChatBubbleOutline size={24} />
                        <p className="text-lg">{thread.comment}</p>
                    </button>
                    {isMarket && (
                        <button onClick={() => handleChat()} className="flex items-center gap-1">
                            <HiOutlineChat size={24} />
                            <p className="text-lg">1:1</p>
                        </button>
                    )}
                    <button onClick={() => {}}>
                        <HiMiniArrowUpTray size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Threads;
