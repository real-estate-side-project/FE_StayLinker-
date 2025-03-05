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
                        <div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 6H17.8L16 4H10V6H15.1L17 8H21V20H5V11H3V20C3 21.1 3.9 22 5 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6ZM8 14C8 18.45 13.39 20.69 16.54 17.54C19.69 14.39 17.45 9 13 9C10.24 9 8 11.24 8 14ZM13 11C13.7885 11.0226 14.5385 11.346 15.0962 11.9038C15.654 12.4615 15.9774 13.2115 16 14C15.9774 14.7885 15.654 15.5385 15.0962 16.0962C14.5385 16.654 13.7885 16.9774 13 17C12.2115 16.9774 11.4615 16.654 10.9038 16.0962C10.346 15.5385 10.0226 14.7885 10 14C10.0226 13.2115 10.346 12.4615 10.9038 11.9038C11.4615 11.346 12.2115 11.0226 13 11ZM5 6H8V4H5V1H3V4H0V6H3V9H5"
                                    fill="#878787"
                                />
                            </svg>
                        </div>
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
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="0.375" y="0.375" width="23.25" height="23.25" rx="11.625" fill="white" />
                                    <rect
                                        x="0.375"
                                        y="0.375"
                                        width="23.25"
                                        height="23.25"
                                        rx="11.625"
                                        stroke="#6E6E6E"
                                        stroke-width="0.75"
                                    />
                                    <path
                                        d="M16.375 8.50625L15.4938 7.625L12 11.1188L8.50625 7.625L7.625 8.50625L11.1188 12L7.625 15.4938L8.50625 16.375L12 12.8812L15.4938 16.375L16.375 15.4938L12.8812 12L16.375 8.50625Z"
                                        fill="#6E6E6E"
                                    />
                                </svg>
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

                {category === 'Resale Market' && (
                    <MarketForm register={register} setValue={setValue} detailInput={detailInput} />
                )}

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
                        <div>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.49967 2.5V3.33333H3.33301V5H4.16634V15.8333C4.16634 16.2754 4.34194 16.6993 4.6545 17.0118C4.96706 17.3244 5.39098 17.5 5.83301 17.5H14.1663C14.6084 17.5 15.0323 17.3244 15.3449 17.0118C15.6574 16.6993 15.833 16.2754 15.833 15.8333V5H16.6663V3.33333H12.4997V2.5H7.49967ZM5.83301 5H14.1663V15.8333H5.83301V5ZM7.49967 6.66667V14.1667H9.16634V6.66667H7.49967ZM10.833 6.66667V14.1667H12.4997V6.66667H10.833Z"
                                    fill="#F55A00"
                                />
                            </svg>
                        </div>
                    </button>
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="gap-1 px-4 py-1.5 bg-[#fc861c] rounded border border-[#f45900] text-white flex items-center"
                    >
                        Write
                        <div>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.7167 7.5L12.5 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.5ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WriteThreadPage;
