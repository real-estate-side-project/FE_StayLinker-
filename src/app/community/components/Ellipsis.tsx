import { useRouter } from 'next/navigation';
import React from 'react';

interface EllipsisProps {
    isMarket: boolean;
    isMain: boolean;
}

const Ellipsis = ({ isMarket, isMain }: EllipsisProps) => {
    const router = useRouter();
    // ___ftn2-2(author): if author === loginUser > delet ftn!! & modify ftn!!( move and modify ftn action)

    // tem ftn name

    const callDeclare = () => {
        console.log('declare api call');
    };

    const callChat = () => {
        console.log('chat api call');
    };

    const callModify = () => {
        console.log('Modify api call');
        // router.push(./~)
    };

    const callDelet = () => {
        // modal
        console.log('delet api call');
    };

    return (
        <div className="absolute bg-white rounded border border-[#6d6d6d] overflow-hidden flex">
            <button onClick={() => callDeclare()} className="px-3 py-2 text-[#6d6d6d] hover:bg-[#f8f5f1]">
                <span>report</span>
            </button>
            {isMarket && (
                <button onClick={() => callChat()}>
                    <p>채팅하기</p>
                </button>
            )}
            {isMain && (
                <div>
                    <button onClick={() => callModify()}>
                        <p>수정하기</p>
                    </button>
                    <button onClick={() => callDelet()}>
                        <p>삭제하기</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Ellipsis;
