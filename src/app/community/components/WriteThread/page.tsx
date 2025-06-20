'use client';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import MarketForm from './components/MarketForm';
import { useForm } from 'react-hook-form';
import DropBox from '../DropBox';
import { TbCameraPlus } from 'react-icons/tb';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdOutlineEdit } from 'react-icons/md';

type Preview = {
    file: File;
    previewUrl: string;
};

interface BaseForm {
    title: string;
    detail: string;
    picture?: FileList;
}

interface MarketFormType extends BaseForm {
    productName: string;
    price: number;
    method: 'In-Person' | 'Delivery' | 'Both Options';
    location: string;
}

const WriteThreadPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid, isSubmitting }
    } = useForm<MarketFormType>({
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

    const tempFtn = (data: MarketFormType) => {
        console.log(data);
    };

    const [filePreviews, setFilePreviews] = useState<Preview[]>([]);

    const trackFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        // 한번에 6개 추가되는것만 막혀있음
        // 기존 + 현재선택 <=6 이 되도록 조정 N
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
            return uniquePreviews;
        });
    };

    const deletPicture = (fileName: string) => {
        setFilePreviews((prev) => prev.filter((preview) => preview.file.name !== fileName));
    };

    return (
        <div className="bg-[#F5F5F5] h-screen">
            <form
                onSubmit={handleSubmit(tempFtn, (errors) => console.error(errors))}
                className="w-[1048px] p-20 bg-white rounded-xl border border-[#ebe5d9] flex flex-col gap-6 mx-auto mt-60"
            >
                <div className="flex justify-between items-center">
                    <DropBox
                        optionList={['Resale Market', 'Community', 'Information']}
                        setValue={setCategory}
                        dummyValue={'category'}
                    />
                    <p className="text-xl font-medium">{dateFormat(today)}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <input
                        {...register('title', {
                            required: 'Enter title',
                            maxLength: { value: 100, message: 'max length is 100' }
                        })}
                        className="text-[#878787] text-2xl font-medium outline-none"
                        placeholder="Please enter a Title."
                    />
                    <div className="w-full border border-[#878787]"></div>
                </div>

                <div className="flex gap-6">
                    <label
                        htmlFor="addPicture"
                        className="cursor-pointer text-[#878787] font-medium w-[104px] h-[104px] p-2 rounded-lg border border-[#878787] flex flex-col justify-center items-center gap-2"
                    >
                        <p>Add Picture</p>
                        <TbCameraPlus />
                        <p>{filePreviews.length}/6</p>
                    </label>
                    {filePreviews.map(({ file, previewUrl }, index) => (
                        <div key={index} className="w-[104px] h-[104px] relative">
                            <Image
                                src={previewUrl}
                                alt={file.name}
                                width={100}
                                height={100}
                                className="object-cover h-full w-full rounded-lg border border-[#878787]"
                            />
                            <div
                                onClick={() => deletPicture(file.name)}
                                className="absolute top-2 right-2 cursor-pointer"
                            >
                                <AiOutlineCloseCircle />
                            </div>
                        </div>
                    ))}
                </div>

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

                {category === 'Resale Market' && <MarketForm register={register} />}

                <div className="h-60">
                    <div className="w-full border border-[#878787]"></div>
                    <textarea
                        {...register('detail', {
                            required: 'Enter detail',
                            maxLength: { value: 500, message: 'max length is 500' }
                        })}
                        className="text-[#878787] text-lg font-medium outline-none w-full h-full resize-none"
                        maxLength={500}
                        placeholder="Please enter the details."
                    />
                </div>
                <p className="text-[#878787] flex justify-end">{detailInput.length}/500</p>
                {detailInput.length >= 500 && <p>글자수 500 제한을 넘었습니다.</p>}
                <div className="flex gap-4 justify-end">
                    <button
                        onClick={() => {}}
                        className="text-[#f45900] px-4 py-1.5 bg-white rounded border border-[#f45900] flex items-center gap-1"
                    >
                        cancel
                        <FaRegTrashCan />
                    </button>
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="gap-1 px-4 py-1.5 bg-[#fc861c] rounded border border-[#f45900] text-white flex items-center"
                    >
                        Write
                        <MdOutlineEdit />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WriteThreadPage;
