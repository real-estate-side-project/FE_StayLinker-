import React from 'react';

interface CommonFormProps {
    register: any;
    detailInput: string;
}

const CommonForm = ({ register, detailInput }: CommonFormProps) => {
    return (
        <>
            <input
                {...register('title', {
                    required: 'Enter title',
                    maxLength: { value: 100, message: 'max length is 100' }
                })}
                maxLength="100"
                className="border border-gray-800"
                placeholder="title"
            />
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
                type="file"
                accept="image/*"
                multiple
            />

            {/* 
            필요성 논의 후 진행
            <button>Add File</button> 
            */}
        </>
    );
};

export default CommonForm;
