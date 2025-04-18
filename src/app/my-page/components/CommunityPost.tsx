import SingleSelect from '@/components/Chips/SingleSelect';
import Threads from '@/components/Threads';
import React, { useState } from 'react';

const CommunityPost = () => {
    const [threadList, setThreadList] = useState([]);
    const [isMyPost, setIsMyPost] = useState<boolean>(true);
    const [postType, setPostType] = useState<string>('See All');

    // call threadList get api

    return (
        <div>
            <div>
                <div>
                    <p onClick={() => setIsMyPost(true)}>My Post</p>
                    <div>icon, mdi:drag-vertical-variant</div>
                    <p onClick={() => setIsMyPost(false)}>Saved Post</p>
                </div>
                <SingleSelect
                    optionList={['See All', 'Infomation', 'Community', 'Resale Market']}
                    selectedOption={postType}
                    setSelectedOption={setPostType}
                />
            </div>
            {threadList.map((thread) => (
                <div>
                    <Threads />
                </div>
            ))}
        </div>
    );
};

export default CommunityPost;
