import React, { useState } from 'react';
import Ellipsis from './Ellipsis';

const Threads = ({ thread }: any) => {
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
                    <p>thread.category</p>
                    <p>thread.writer</p>
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
            <p>thread.title</p>
            <p>thread.summary</p>
            <div>
                <div>
                    <div>
                        <button onClick={() => callLike()}>heartIcon</button>
                        <p>thread.liked</p>
                    </div>
                    <div>
                        <button onClick={() => callComment()}>commentIcon</button>
                        <p>thread.comment</p>
                    </div>
                    <button onClick={() => {}}>shareIcon</button>
                </div>
            </div>
        </button>
    );
};

export default Threads;
