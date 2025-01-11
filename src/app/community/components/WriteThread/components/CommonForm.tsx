import React from 'react';

interface CommonFormProps {
    register: any;
    errors: any;
}

const CommonForm = ({ register, errors }: CommonFormProps) => {
    return (
        <>
            <input {...register('title', { required: 'Enter title' })} className="border border-gray-800" />
            <input
                {...register('detail', {
                    required: 'Enter detail',
                    maxLength: { value: 500, message: 'max length is 500' }
                })}
                className="border border-gray-500"
            />
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
