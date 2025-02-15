import React, { useState } from 'react';
import Ellipsis from './Ellipsis';

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

interface ThreadsProps {
    thread: Thread;
}

const Threads = ({ thread }: ThreadsProps) => {
    const isMarket = thread.type === 'market';
    const isMain = thread.useId === 'middleWare useId check';
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
        <button>
            <div>
                <div>
                    {thread.category}
                    {thread.writer}
                </div>
                <div>
                    <button
                        onClick={() => {
                            setView(!view);
                        }}
                    >
                        ...
                    </button>
                    {view && <Ellipsis isMarket={isMarket} isMain={isMain} />}
                </div>
            </div>
            {thread.title}
            {thread.summary}
            <div>
                <div>
                    <div>
                        <button onClick={() => callLike()}>heartIcon</button>
                        {thread.liked}
                    </div>
                    <div>
                        <button onClick={() => callComment()}>commentIcon</button>
                        {thread.comment}
                    </div>
                    <button onClick={() => {}}>shareIcon</button>
                </div>
            </div>
        </button>
    );
};

export default Threads;
