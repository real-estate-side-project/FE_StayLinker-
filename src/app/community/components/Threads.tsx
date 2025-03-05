import React, { useState } from 'react';
import Ellipsis from './Ellipsis';

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
// { thread }: ThreadsProps
const Threads = () => {
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
    const isMarket = thread.category === 'market';
    const isMain = thread.userId === 'middleWare userId check';
    const [view, setView] = useState(false); // ...

    // do thread form need this?
    const goToThread = () => {
        //router.push("./~")
    };

    const callLike = () => {
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
                        <div className="p-1">
                            <svg
                                width="16"
                                height="4"
                                viewBox="0 0 16 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C12 1.46957 12.2107 0.96086 12.5858 0.585787C12.9609 0.210714 13.4696 0 14 0C14.5304 0 15.0391 0.210714 15.4142 0.585787C15.7893 0.96086 16 1.46957 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2ZM6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2ZM0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2Z"
                                    fill="#080808"
                                />
                            </svg>
                        </div>
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
                    <button onClick={() => callLike()} className="flex items-center gap-1">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.1 16.05L10 16.15L9.89 16.05C5.14 11.74 2 8.89 2 6C2 4 3.5 2.5 5.5 2.5C7.04 2.5 8.54 3.5 9.07 4.86H10.93C11.46 3.5 12.96 2.5 14.5 2.5C16.5 2.5 18 4 18 6C18 8.89 14.86 11.74 10.1 16.05ZM14.5 0.5C12.76 0.5 11.09 1.31 10 2.58C8.91 1.31 7.24 0.5 5.5 0.5C2.42 0.5 0 2.91 0 6C0 9.77 3.4 12.86 8.55 17.53L10 18.85L11.45 17.53C16.6 12.86 20 9.77 20 6C20 2.91 17.58 0.5 14.5 0.5Z"
                                fill="black"
                            />
                        </svg>
                        <p className="text-lg">{thread.liked}</p>
                    </button>
                    <button onClick={() => callComment()} className="flex items-center gap-1">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 2.5H4C2.9 2.5 2 3.4 2 4.5V22.5L6 18.5H20C21.1 18.5 22 17.6 22 16.5V4.5C22 3.4 21.1 2.5 20 2.5ZM20 16.5H5.2L4 17.7V4.5H20V16.5Z"
                                fill="black"
                            />
                        </svg>
                        <p className="text-lg">{thread.comment}</p>
                    </button>
                    <button onClick={() => {}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V12ZM12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Threads;
