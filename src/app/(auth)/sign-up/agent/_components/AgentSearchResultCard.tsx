'use client';

type AgentSearchResultCardProps = {
    agentName: string;
    businessName: string;
    registrationCode: string;
    address: string;
};

const AgentSearchResultCard = ({ agentName, businessName, registrationCode, address }: AgentSearchResultCardProps) => {
    return (
        <div className="self-stretch p-5 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-start gap-20">
                <div className="w-28 justify-center text-gray500 pc-body-s-500">대표자명</div>
                <div className="flex-1 justify-center text-gray910 pc-body-s-500">{agentName}</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-20">
                <div className="w-28 justify-center text-gray500 pc-body-s-500">상호명</div>
                <div className="flex-1 justify-center text-gray910 pc-body-s-500">{businessName}</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-20">
                <div className="w-28 justify-center text-gray500 pc-body-s-500">중개등록번호</div>
                <div className="flex-1 justify-center text-gray910 pc-body-s-500">{registrationCode}</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-20">
                <div className="w-28 justify-center text-gray500 pc-body-s-500">주소</div>
                <div className="flex-1 justify-center text-gray910 pc-body-s-500">{address}</div>
            </div>
        </div>
    );
};

export default AgentSearchResultCard;
