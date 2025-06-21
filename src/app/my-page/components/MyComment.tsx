import SingleSelect from '@/components/Chips/SingleSelect';
import Threads from '@/components/Threads';
import React, { useState } from 'react';

const MyComment = () => {
    // const [commentList, setCommentList] = useState([]);
    const [boardType, setBoardType] = useState('See All');

    // call commentList get api

    return (
        <div className="mt-2 w-[1070px]">
            <SingleSelect
                optionList={['See All', 'Infomation', 'Community', 'Resale Market']}
                selectedOption={boardType}
                setSelectedOption={setBoardType}
            />
            <div className="mt-10 mb-14 flex-col gap-10">
                <Threads />
                {/* {commentList.map((thread) => (
                ))} */}
            </div>
        </div>
    );
};

export default MyComment;
