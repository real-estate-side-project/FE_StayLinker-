import React from 'react';
import { InformationSection, OurServiceSection, SearchSection } from './components';

const MainPage = () => {
    return (
        <div className="flex flex-col gap-40 ">
            <SearchSection />
            <div className="flex flex-col gap-40 items-center">
                <OurServiceSection />
                <InformationSection />
            </div>
        </div>
    );
};

export default MainPage;
