import React from 'react';
import Threads from './Threads';

const ThreadContainer = () => {
    // props type filtered threads
    return (
        <>
            <div>
                <button>sort</button>
                <button>new thread</button>
            </div>
            <Threads />
        </>
    );
};

export default ThreadContainer;
