'use client';
import React, { useState } from 'react';
import MarketForm from './components/MarketForm';
import CommonForm from './components/CommonForm';

const WriteThreadPage = () => {
    const [category, setCategory] = useState('category');

    const today = new Date();

    const dateFormat = (date: Date): string => {
        const monthDayYear: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const weekday: Intl.DateTimeFormatOptions = {
            weekday: 'short'
        };
        const formattedDate = `${date.toLocaleDateString('en-US', monthDayYear)}(${date.toLocaleDateString(
            'en-US',
            weekday
        )})`;

        return formattedDate;
    };

    // Wed, January 8, 2025  > December 17, 2024(Tue)

    // study react hook form
    // Use modal Sample
    // valiation: check 1. category !== "category" & no blank

    const cancelWriting = () => {};

    return (
        <>
            <div className="flex">
                <div>drop box: category , setCategory</div>
                {dateFormat(today)}
            </div>
            {category === 'market' ? <MarketForm /> : <CommonForm />}
            <div>
                <button onClick={() => {}}>cancel</button>
                {/* cancel check modal */}
                <button onClick={() => {}}>save</button>
                {/* check validation > save */}
            </div>
        </>
    );
};

export default WriteThreadPage;
