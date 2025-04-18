import Threads from '@/components/Threads';
import React, { useState } from 'react';

const MyComment = () => {
    const [commentList, setCommentList] = useState([]);

    // call commentList get api

    return (
        <div>
            <div>{/* Use chip component */}</div>
            {commentList.map((thread) => (
                <div>
                    <Threads />
                </div>
            ))}
        </div>
    );
};

export default MyComment;
