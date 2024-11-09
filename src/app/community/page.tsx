import React from 'react';
import ThreadContainer from './components/ThreadContainer';
import TopRating from './components/TopRating';

const CommunityPage = () => {
    // dafault > all
    // threadContainer > props: type filtered threads
    return (
        <>
            <div>
                <div>
                    <button>all</button>
                    <button>infomation</button>
                    <button>freeChat</button>
                    <button>secondHandMarket</button>
                </div>
                <div>
                    <input type="text" />
                    <div>icon</div>
                </div>
            </div>
            <TopRating />
            <ThreadContainer />
        </>
    );
};

export default CommunityPage;
