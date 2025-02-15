'use client';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import MarketForm from './components/MarketForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import DropBox from '../DropBox';

type Preview = {
    file: File;
    previewUrl: string;
};

interface BaseForm {
    title: string;
    detail: string;
    picture?: FileList;
}

interface MarketForm extends BaseForm {
    productName: string;
    price: number;
    method: string;
    address: string;
}

type ThreadForm = BaseForm | MarketForm;

const WriteThreadPage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid, isSubmitting }
    } = useForm<ThreadForm>({
        mode: 'onChange'
    });
    const [category, setCategory] = useState<string>('');

    const today = new Date();
    const detailInput = watch('detail', '');

    // move
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

    const tempFtn = (data: ThreadForm) => {
        console.log(data);
    };

    const [fileCount, setFileCount] = useState<number>(0);
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
            <form onSubmit={handleSubmit(tempFtn, (errors) => console.error(errors))}>
                <div className="flex">{dateFormat(today)}</div>
                <input
                    {...register('title', {
                        required: 'Enter title',
                        maxLength: { value: 100, message: 'max length is 100' }
                    })}
                    className="border border-gray-800"
                    placeholder="title"
                />
                <label htmlFor="addPicture" className="inline-block border border-black cursor-pointer">
                    <p>Add Picture</p>
                    <p>CameraIcon</p>
                    <p>{fileCount}/6</p>
                </label>
                <input
                    {...register('picture', {
                        validate: {
                            size: (files: FileList | undefined) => {
                                if (!files) return true;
                                if (files.length > 6) return 'Limit is 6';
                                return true;
                            }
                        }
                    })}
                    onChange={trackFileChange}
                    type="file"
                    accept="image/*"
                    multiple
                    id="addPicture"
                    className="hidden"
                />
                {filePreviews.map(({ file, previewUrl }, index) => (
                    <div key={index}>
                        <Image src={previewUrl} alt={file.name} width={100} height={100} />
                    </div>
                ))}

                {category === 'Resale Market' && (
                    <MarketForm register={register} setValue={setValue} detailInput={detailInput} />
                )}

                <input
                    {...register('detail', {
                        required: 'Enter detail',
                        maxLength: { value: 500, message: 'max length is 500' }
                    })}
                    className="border border-gray-500"
                    maxLength={500}
                    placeholder="detail"
                />
                <p>{detailInput.length}/500</p>
                {detailInput.length >= 500 && <p>글자수 500 제한을 넘었습니다.</p>}
                <div className="flex">
                    <button onClick={() => {}} className="border-2 border-black p-1">
                        cancel
                    </button>
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="ml-2 border-2 border-orange-500 p-1"
                    >
                        save
                    </button>
                </div>
            </form>
            <DropBox
                optionList={['Resale Market', 'Community', 'Information']}
                setValue={setCategory}
                dummyValue={'category'}
            />
        </>
    );
};

export default WriteThreadPage;
