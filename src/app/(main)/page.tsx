import React from 'react';
import { InformationSection, OurServiceSection, SearchSection, WishlistSection } from './components';

const MainPage = () => {
    return (
        <div className="flex flex-col gap-40 ">
            <SearchSection />
            <div className="flex flex-col gap-40 items-center">
                <OurServiceSection />
                <InformationSection />
            </div>
            <div className="flex flex-col gap-40 items-start bg-bg50 py-40">
                <WishlistSection />
            </div>
        </div>
    );
};

export default MainPage;
