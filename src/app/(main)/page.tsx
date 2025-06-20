import React from 'react';
import {
    InformationSection,
    OurServiceSection,
    RecommendedSection,
    SearchSection,
    WishlistSection
} from './components';
import clsx from 'clsx';
const MainPage = () => {
    return (
        <div className="flex flex-col gap-40 ">
            <SearchSection />
            <div className="flex flex-col gap-40 items-center">
                <OurServiceSection />
                <InformationSection />
            </div>
            <div>
                <div className="flex flex-col gap-40 items-start bg-bg50 py-40">
                    <WishlistSection />
                </div>
                <div className={clsx('flex flex-col gap-40 items-center bg-bg50', true && 'py-40')}>
                    <RecommendedSection />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
