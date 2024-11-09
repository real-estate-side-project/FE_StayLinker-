'use client';

import Textarea from '@/components/Inputs/Textarea';
import { ChangeEvent, useState } from 'react';

const TextareaSample = () => {
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value);

    return (
        <div className="flex flex-col border-2 p-6 gap-2">
            <h1 className="text-3xl font-bold pb-1">Textarea</h1>
            <div className="flex gap-2">
                <Textarea placeholder="Input..." />
                <Textarea isDisabled placeholder="Input..." />
                <Textarea isError placeholder="Input..." />
            </div>
            <div className="flex gap-2 mb-4">
                <Textarea maxLength={200} placeholder="Input..." value={text} onChange={handleChangeText} />
                <Textarea maxLength={200} isDisabled placeholder="Input..." />
                <Textarea maxLength={200} isError placeholder="Input..." value={text} onChange={handleChangeText} />
            </div>
            <div className="flex gap-2">
                <Textarea label="Label" placeholder="Input..." />
                <Textarea label="Label" isDisabled placeholder="Input..." />
                <Textarea label="Label" isError placeholder="Input..." />
            </div>
            <div className="flex gap-2 mb-4">
                <Textarea
                    label="Label"
                    maxLength={200}
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
                <Textarea label="Label" maxLength={200} isDisabled placeholder="Input..." />
                <Textarea
                    label="Label"
                    maxLength={200}
                    isError
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
            </div>
            <div className="flex gap-2">
                <Textarea validationMessage="Supporting text.." placeholder="Input..." />
                <Textarea validationMessage="Supporting text.." isDisabled placeholder="Input..." />
                <Textarea validationMessage="Supporting text.." isError placeholder="Input..." />
            </div>
            <div className="flex gap-2 mb-4">
                <Textarea
                    validationMessage="Supporting text.."
                    maxLength={200}
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
                <Textarea validationMessage="Supporting text.." maxLength={200} isDisabled placeholder="Input..." />
                <Textarea
                    validationMessage="Supporting text.."
                    maxLength={200}
                    isError
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
            </div>
            <div className="flex gap-2">
                <Textarea label="Label" validationMessage="Supporting text.." placeholder="Input..." />
                <Textarea label="Label" validationMessage="Supporting text.." isDisabled placeholder="Input..." />
                <Textarea label="Label" validationMessage="Supporting text.." isError placeholder="Input..." />
            </div>
            <div className="flex gap-2">
                <Textarea
                    label="Label"
                    validationMessage="Supporting text.."
                    maxLength={200}
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
                <Textarea
                    label="Label"
                    validationMessage="Supporting text.."
                    maxLength={200}
                    isDisabled
                    placeholder="Input..."
                />
                <Textarea
                    label="Label"
                    validationMessage="Supporting text.."
                    maxLength={200}
                    isError
                    placeholder="Input..."
                    value={text}
                    onChange={handleChangeText}
                />
            </div>
        </div>
    );
};

export default TextareaSample;
