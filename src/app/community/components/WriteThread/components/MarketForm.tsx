import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import MapModal from './MapModal';

interface MarketFormProps {
    register: any;
    setValue: any;
    detailInput: string;
}

type Preview = {
    file: File;
    previewUrl: string;
};

const MarketForm = ({ register, setValue, detailInput }: MarketFormProps) => {
    const [fileCount, setFileCount] = useState<number>(0);
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
    const [filePreviews, setFilePreviews] = useState<Preview[]>([]);

    const trackFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        if (files.length > 6) {
            event.target.value = '';
            // 알림 추가
            return;
        }

        const previews = Array.from(files).map((file) => ({
            file,
            previewUrl: URL.createObjectURL(file)
        }));

        setFilePreviews((prev) => {
            const addedPreviews = [...previews, ...prev];
            const uniquePreviews = addedPreviews.filter(
                (preview, index, self) => index === self.findIndex((el) => el.file.name === preview.file.name)
            );
            setFileCount(uniquePreviews.length);
            return uniquePreviews;
        });
    };

    return (
        <>
            <input
                {...register('title', {
                    required: 'Enter title',
                    maxLength: { value: 100, message: 'max length is 100' }
                })}
                className="border border-gray-800"
                placeholder="title"
            />
            <label htmlFor="addPicture" className="inline-block border border-black">
                <p>Add Picture</p>
                <p>CameraIcon</p>
                <input
                    {...register('picture', {
                        validate: {
                            size: (files: FileList) => {
                                if (!files || files.length === 0) return 'No File';
                                if (files.length > 6) return 'Limit is 6';
                                // 파일크기 제한?
                            }
                        }
                    })}
                    onChange={trackFileChange}
                    type="file"
                    accept="image/*"
                    multiple
                    id="addPicture"
                    className="absolute opacity-0"
                />
                <p>{fileCount}/6</p>
            </label>
            {filePreviews.map(({ file, previewUrl }, index) => (
                <div key={index}>
                    <Image src={previewUrl} alt={file.name} width={100} height={100} />
                </div>
            ))}
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
            <input
                {...register('detail', {
                    required: 'Enter detail',
                    maxLength: { value: 500, message: 'max length is 500' }
                })}
                className="border border-gray-500"
                maxLength="500"
                placeholder="detail"
            />
            <p>{detailInput.length}/500</p>
            {isMapOpen && <MapModal setIsMapOpen={setIsMapOpen} setValue={setValue} />}
        </>
    );
};

export default MarketForm;
