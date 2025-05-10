import React from 'react';

interface Article {
    type: string;
    image: string;
    title: string;
    summary: string;
    mainText: string;
}

const ArticleDetail = ({ article }: { article: Article }) => {
    return (
        <div>
            <div className="text-[#878787] text-lg w-[1440px] h-8 border-b border-[#878787] mb-10">
                <p>Article</p>
                <p>&gt;</p>
                <p>{article.type}</p>
            </div>
            <div className="mb-5">
                <p className="text-[#070707] text-[28px] font-bold">{article.title}</p>
                <p className=" text-[#070707] text-xl">{article.summary}</p>
            </div>
            <div className="flex gap-10">
                <div
                    className="rounded-2xl overflow-hidden mb-3 bg-cover bg-center w-[453px] h-[318px]"
                    style={{
                        backgroundImage: `url(${article.image})`
                    }}
                ></div>
                <div className=" columns-3 gap-10">{article.mainText}</div>
            </div>
        </div>
    );
};

export default ArticleDetail;
