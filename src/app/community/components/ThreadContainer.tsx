import React, { useState } from 'react';
import Threads from './Threads';
import { useRouter } from 'next/navigation';

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
        router.push('./community/components/WriteThread');
    };

    return (
        <>
            <div className="border border-red-500 mt-8">
                <div className="flex justify-between">
                    <h3 className="font-bold text-[28px] mb-[40px]">Threads</h3>
                    <div className="flex">
                        <button onClick={() => {}}>Array(sorting)</button>
                        <button onClick={() => goToWriteThread()} className="ml-[12px]">
                            Write
                        </button>
                    </div>
                </div>
            </div>
            {threadList.map((thread) => {
                <Threads thread={thread} />;
            })}
        </>
    );
};

export default ThreadContainer;
