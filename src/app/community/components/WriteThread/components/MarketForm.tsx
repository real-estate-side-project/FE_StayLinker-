import React, { useState } from 'react';

interface MarketFormProps {
    register: any;
    setValue: any;
    detailInput: string;
}

const MarketForm = ({ register, setValue, detailInput }: MarketFormProps) => {
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

    return (
        <>
            <input
                {...register('productName', { required: 'Enter productName' })}
                className="border border-gray-600"
                placeholder="productName"
            />
            <input
                type="number"
                {...register('price', { required: 'Enter price' })}
                className="border border-gray-600"
                placeholder="price"
            />
            <div>
                <label>
                    <input
                        {...register('method', { reauired: 'Choose a trading method' })}
                        type="radio"
                        value="In-Person"
                    />
                    In-Person
                </label>
                <label>
                    <input {...register('method')} type="radio" value="Delivery" />
                    Delivery
                </label>
                <label>
                    <input {...register('method')} type="radio" value="Both Options" />
                    Both Options
                </label>
            </div>
            <div>
                <input
                    {...register('address', { required: 'Enter location' })}
                    className="border border-gray-600"
                    placeholder="location"
                />
                <button onClick={() => setIsMapOpen(true)}>Map</button>
            </div>
        </>
    );
};

export default MarketForm;
