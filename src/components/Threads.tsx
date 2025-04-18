import React, { useState } from 'react';
import { HiMiniArrowUpTray } from 'react-icons/hi2';
import { MdChatBubbleOutline, MdMoreHoriz } from 'react-icons/md';
import { TiHeartOutline } from 'react-icons/ti';

interface Thread {
    userId: string;
    category: string;
    writer: string;
    title: string;
    summary: string;
    comment: number;
    liked: number;
}

interface ThreadsProps {
    thread: Thread;
}

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
// … 클릭시 나오는 드롭박스 내용 확인 후 코멘트에 사용될 경우 고려할 Nbe
const Threads = () => {
    const isMarket = thread.category === 'market';
    const isMain = thread.userId === 'middleWare userId check';
    const [view, setView] = useState(false); // ...

    const handleLikeClick = () => {
        console.log('like api call');
    };

    // after the design finished
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
                <div>
                    <button
                        onClick={() => {
                            setView(!view);
                        }}
                    >
                        <MdMoreHoriz />
                    </button>
                    {view && <div className="absolute text-red-600 text-lg font-bold">Qyd</div>}
                    {/* {view && <Ellipsis isMarket={isMarket} isMain={isMain} />} */}
                </div>
            </div>

            <div className="flex-col gap-8 flex">
                <div className="flex-col gap-6 flex">
                    <p className="text-[#070707] text-xl font-bold">{thread.title}</p>
                    <p className="text-[#070707] text-lg font-medium">{thread.summary}</p>
                </div>

                <div className="flex gap-1">
                    <button onClick={() => handleLikeClick()} className="flex items-center gap-1">
                        <TiHeartOutline />
                        <p className="text-lg">{thread.liked}</p>
                    </button>
                    <button onClick={() => callComment()} className="flex items-center gap-1">
                        <MdChatBubbleOutline />
                        <p className="text-lg">{thread.comment}</p>
                    </button>
                    <button onClick={() => {}}>
                        <HiMiniArrowUpTray />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Threads;
