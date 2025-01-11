'use client';
import React, { useState } from 'react';
import MarketForm from './components/MarketForm';
import CommonForm from './components/CommonForm';
import { SubmitHandler, useForm } from 'react-hook-form';

interface threadForm {
    category: string;
    title: string;
    detail: string;
    picture?: FileList;
}

const WriteThreadPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [category, setCategory] = useState<string>('');

    const today = new Date();

    //
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
    //

    const tempFtn = (data: any) => {
        console.log(data);
    };

    const changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit(tempFtn)}>
                <div className="flex">
                    <select
                        {...register('category', { required: 'Choose Category' })}
                        onChange={changeCategory}
                        className="border-2 border-black p-1"
                    >
                        <option value="">Category</option>
                        <option value="Resale Market">Resale Market</option>
                        <option value="Community">Community</option>
                        <option value="Information">Information</option>
                    </select>
                    {dateFormat(today)}
                </div>

                <div>
                    {category === 'Resale Market' ? (
                        <MarketForm register={register} />
                    ) : (
                        <CommonForm register={register} errors={errors} />
                    )}
                </div>

                <div className="flex">
                    <button onClick={() => {}} className="border-2 border-black p-1">
                        cancel
                    </button>
                    <button type="submit" className="ml-2 border-2 border-orange-500 p-1">
                        save
                    </button>
                </div>
            </form>
        </>
    );
};

export default WriteThreadPage;
