import React, { useState } from 'react';
import { MdOutlineAddLocationAlt } from 'react-icons/md';

interface MarketFormProps {
    register: any;
    setValue: any;
    detailInput: string;
}

const MarketForm = ({ register, setValue, detailInput }: MarketFormProps) => {
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

    // 미리보기 사진에 x 추가
    // 라디오 라벨 인풋구조 재확인
    return (
        <>
            <div>
                <label htmlFor="productName" className="text-lg font-bold mr-4">
                    Product
                </label>
                <input
                    id="productName"
                    {...register('productName', { required: 'Enter productName' })}
                    className="border-b border-[#878787] text-lg outline-none w-[360px] cursor-pointer"
                    placeholder=" Product Name  ex)Vintage Table"
                />
            </div>
            <div>
                <label htmlFor="price" className="text-lg font-bold mr-4">
                    Price
                </label>
                <input
                    id="price"
                    type="number"
                    {...register('price', { required: 'Enter price' })}
                    className="border-b border-[#878787] text-lg outline-none w-[360px] cursor-pointer"
                    placeholder=" Product Price  ex)10,000KRW"
                />
            </div>
            <div className="flex">
                <div className="text-lg font-bold mr-4">Method</div>
                <div className="flex gap-6">
                    <label className="flex gap-2 cursor-pointer">
                        <input
                            {...register('method', { reauired: 'Choose a trading method' })}
                            type="radio"
                            value="In-Person"
                            className="cursor-pointer"
                        />
                        In-Person
                    </label>
                    <label className="flex gap-2 cursor-pointer">
                        <input {...register('method')} type="radio" value="Delivery" className="cursor-pointer" />
                        Delivery
                    </label>
                    <label className="flex gap-2 cursor-pointer">
                        <input {...register('method')} type="radio" value="Both Options" className="cursor-pointer" />
                        Both Options
                    </label>
                </div>
            </div>
            <div className="flex items-center">
                <label htmlFor="location" className="text-lg font-bold mr-4">
                    Location
                </label>
                <input
                    id="location"
                    {...register('location', { required: 'Enter location' })}
                    className="border-b border-[#878787] text-lg outline-none w-[360px] cursor-pointer mr-2"
                    placeholder=" Don't expose too much detailed information."
                />
                <button onClick={() => setIsMapOpen(true)}>
                    <MdOutlineAddLocationAlt />
                </button>
            </div>
        </>
    );
};

export default MarketForm;
