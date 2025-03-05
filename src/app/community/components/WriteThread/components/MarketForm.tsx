import React, { useState } from 'react';

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
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="white" />
                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#3997C6" />
                        <path
                            d="M18.5003 20.1665H21.0003V17.6665H22.667V20.1665H25.167V21.8332H22.667V24.3332H21.0003V21.8332H18.5003V20.1665ZM13.5003 11.4165C14.667 11.4165 15.5837 12.3332 15.5837 13.4998C15.5837 14.6665 14.667 15.5832 13.5003 15.5832C12.3337 15.5832 11.417 14.6665 11.417 13.4998C11.417 12.3332 12.3337 11.4165 13.5003 11.4165ZM13.5003 7.6665C16.7503 7.6665 19.3337 10.2498 19.3337 13.4998C19.3337 17.8332 13.5003 24.3332 13.5003 24.3332C13.5003 24.3332 7.66699 17.8332 7.66699 13.4998C7.66699 10.2498 10.2503 7.6665 13.5003 7.6665ZM13.5003 9.33317C11.167 9.33317 9.33366 11.1665 9.33366 13.4998C9.33366 14.3332 9.33366 15.9998 13.5003 21.5832C17.667 15.9998 17.667 14.3332 17.667 13.4998C17.667 11.1665 15.8337 9.33317 13.5003 9.33317Z"
                            fill="#3997C6"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default MarketForm;
