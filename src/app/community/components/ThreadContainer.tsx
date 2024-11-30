import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Threads from './Threads';

interface ThreadContainerProps {
    type: string;
}
const ThreadContainer = ({ type }: ThreadContainerProps) => {
    const router = useRouter();
    const [sort, setSort] = useState('latest');
    const [threadList, setThreadList] = useState([]);

    // 무한 스크롤
    // ftn0: api call (type, sort): 무한스크롤로 구현하려면 parameter 이 2개 넣어서 완성된 [] 가져와야 할 것 같은데
    const ftn0 = (type: string, sort: string) => {
        console.log('api call');
        // setThreadList
    };

    const goToWriteThread = () => {
        router.push('./components/WriteThread');
    };

    return (
        <>
            <div>
                <p>Threads</p>
                {/* use dropBox*/}
                {/* dropBox: latest, old, like */}
                <button
                    onClick={() => {
                        // ftn0
                    }}
                >
                    정렬
                </button>
                <button onClick={() => goToWriteThread()}>글쓰기</button>
            </div>
            {threadList.map((thread) => {
                <Threads thread={thread} />;
            })}
        </>
    );
};

export default ThreadContainer;
