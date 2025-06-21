import SingleSelect from '@/components/Chips/SingleSelect';
import Threads from '@/components/Threads';
import React, { useState } from 'react';
import { FaGripLinesVertical } from 'react-icons/fa6';

const CommunityPost = () => {
    // const [threadList, setThreadList] = useState([]);
    const [isMyPost, setIsMyPost] = useState<boolean>(true);
    const [postType, setPostType] = useState<string>('See All');

    // call threadList get api

    return (
        <div className="w-[1070px]">
            <div className="flex justify-between mt-2">
                <div className="flex items-center gap-x-3">
                    <p
                        onClick={() => setIsMyPost(true)}
                        className={`text-xl cursor-pointer ${isMyPost ? 'text-[#fc6a1c] font-bold' : 'text-[#222222]'}`}
                    >
                        My Post
                    </p>
                    <FaGripLinesVertical size={20} color="#b9b9b9" />
                    <p
                        onClick={() => setIsMyPost(false)}
                        className={`text-xl cursor-pointer ${
                            !isMyPost ? 'text-[#fc6a1c] font-bold' : 'text-[#222222]'
                        }`}
                    >
                        Saved Post
                    </p>
                </div>
                <SingleSelect
                    optionList={['See All', 'Infomation', 'Community', 'Resale Market']}
                    selectedOption={postType}
                    setSelectedOption={setPostType}
                />
            </div>
            <div className="mt-10 mb-16 flex-col gap-10">
                <Threads />
            </div>
            {/* {threadList.map((thread) => (
            ))} */}
        </div>
    );
};

export default CommunityPost;
