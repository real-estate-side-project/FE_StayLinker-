'use client';

import Input from '@/components/Inputs/Input';
import { FaReact } from 'react-icons/fa';

const page = () => {
    const handleClickIcon = (): void => {
        alert('Icon clicked!');
    };

    return (
        <div className="p-20 flex items-start justify-start">
            <div className="flex flex-row border-2 p-6 gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold pb-1">Input</h1>
                    <div className="flex gap-2">
                        <Input placeholder="Input..." />
                        <Input isDisabled placeholder="Input..." />
                        <Input isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input icon={<FaReact />} placeholder="Input..." handleClickIcon={handleClickIcon} />
                        <Input icon={<FaReact />} isDisabled placeholder="Input..." />
                        <Input icon={<FaReact />} isError placeholder="Input..." handleClickIcon={handleClickIcon} />
                    </div>
                    <div className="flex gap-2 mb-4">
                        <Input icon={<FaReact />} iconPosition="left" placeholder="Input..." />
                        <Input icon={<FaReact />} iconPosition="left" isDisabled placeholder="Input..." />
                        <Input icon={<FaReact />} iconPosition="left" isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input label="Label" placeholder="Input..." />
                        <Input label="Label" isDisabled placeholder="Input..." />
                        <Input label="Label" isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            label="Label"
                            icon={<FaReact />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input label="Label" icon={<FaReact />} isDisabled placeholder="Input..." />
                        <Input
                            label="Label"
                            icon={<FaReact />}
                            isError
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                    </div>
                    <div className="flex gap-2 mb-4">
                        <Input label="Label" icon={<FaReact />} iconPosition="left" placeholder="Input..." />
                        <Input label="Label" icon={<FaReact />} iconPosition="left" isDisabled placeholder="Input..." />
                        <Input label="Label" icon={<FaReact />} iconPosition="left" isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input validationMessage="Supporting text.." placeholder="Input..." />
                        <Input validationMessage="Supporting text.." isDisabled placeholder="Input..." />
                        <Input validationMessage="Supporting text.." isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            isDisabled
                            placeholder="Input..."
                        />
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            isError
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                    </div>
                    <div className="flex gap-2 mb-4">
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            placeholder="Input..."
                        />
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            isDisabled
                            placeholder="Input..."
                        />
                        <Input
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            isError
                            placeholder="Input..."
                        />
                    </div>
                    <div className="flex gap-2">
                        <Input label="Label" validationMessage="Supporting text.." placeholder="Input..." />
                        <Input label="Label" validationMessage="Supporting text.." isDisabled placeholder="Input..." />
                        <Input label="Label" validationMessage="Supporting text.." isError placeholder="Input..." />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            isDisabled
                            placeholder="Input..."
                        />
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            isError
                            placeholder="Input..."
                            handleClickIcon={handleClickIcon}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            placeholder="Input..."
                        />
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            isDisabled
                            placeholder="Input..."
                        />
                        <Input
                            label="Label"
                            validationMessage="Supporting text.."
                            icon={<FaReact />}
                            iconPosition="left"
                            isError
                            placeholder="Input..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
