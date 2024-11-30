import React, { useState } from 'react';
import ThreadContainer from './components/ThreadContainer';
import TopRating from './components/TopRating';

const CommunityPage = () => {
    const [type, setType] = useState<string>('all');

    return (
        <>
            <div>
                {/* section */}
                <div>
                    <button
                        onClick={() => {
                            setType('all');
                        }}
                    >
                        all
                    </button>
                    <button
                        onClick={() => {
                            setType('infomation');
                        }}
                    >
                        infomation
                    </button>
                    <button
                        onClick={() => {
                            setType('freeChat');
                        }}
                    >
                        freeChat
                    </button>
                    <button
                        onClick={() => {
                            setType('secondHandMarket');
                        }}
                    >
                        secondHandMarket
                    </button>
                </div>
                {/* search */}
                <div>
                    <input type="text" />
                    <div>searchIcon</div>
                </div>
            </div>
            <TopRating type={type} />
            <ThreadContainer type={type} />
        </>
    );
};

export default CommunityPage;
