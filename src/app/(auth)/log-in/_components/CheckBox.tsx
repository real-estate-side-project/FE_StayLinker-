import { useEffect, useState } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';

export interface CommonItems {
    label: string;
    value: string | number;
}

export interface IUseForm {
    name: string;
    rules?: Record<string, any>;
}

export interface IFormCheckbox extends IUseForm {
    items: CommonItems[];
    disabled?: boolean;
    isAllCheckBox?: boolean;
    isAllDefault?: boolean;
    isLimited?: number;
    title?: string;
    onChange?: (item?: any) => void;
}

const Checkboxes = ({
    items,
    name,
    rules,
    title,
    disabled = false,
    isAllCheckBox = false,
    isAllDefault = false,
    isLimited,
    onChange
}: IFormCheckbox) => {
    const {
        control,
        getValues,
        setValue,
        formState: { errors }
    } = useFormContext<FieldValues>();

    const { field } = useController({
        control,
        name,
        rules
    });

    const fileArray = getValues(name) || [];
    const [selectAllChecked, setSelectAllChecked] = useState<boolean>(isAllDefault);
    const errorMessages = errors[name] ? errors[name]?.message : '';
    const hasError = !!(errors && errorMessages);

    const toggleSelectAll = () => {
        const newCheckedState = !selectAllChecked;
        setSelectAllChecked(newCheckedState);

        if (newCheckedState) {
            const allItemValues = items.map((item) => item.value);
            field.onChange(allItemValues);
            setValue(name, allItemValues);
            onChange && onChange(allItemValues);
        } else {
            field.onChange([]);
            setValue(name, []);
            onChange && onChange([]);
        }
    };

    const handleCheckboxChange = (value: string | number) => {
        const valueCopy = [...fileArray];

        if (valueCopy.includes(value)) {
            const filteredArray = valueCopy.filter((v) => v !== value);
            field.onChange(filteredArray);
            setValue(name, filteredArray);
            onChange && onChange(filteredArray);
        } else if (valueCopy.length < (isLimited || Infinity)) {
            valueCopy.push(value);
            field.onChange(valueCopy);
            setValue(name, valueCopy);
            onChange && onChange(valueCopy);
        }
    };

    useEffect(() => {
        if (fileArray?.length === items.length) {
            setSelectAllChecked(true);
        } else {
            setSelectAllChecked(false);
        }
    }, [fileArray, items.length]);

    return (
        <>
            {title && (
                <span className="flex">
                    <span className="min-w-[100px] whitespace-nowrap text-md font-bold self-center">{title}</span>
                </span>
            )}
            <div className="w-full flex flex-wrap gap-4" id={name}>
                {isAllCheckBox && (
                    <div
                        className={`flex items-center gap-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={!disabled ? toggleSelectAll : undefined}
                    >
                        {selectAllChecked ? (
                            <MdOutlineCheckBox size={20} className="text-main400" />
                        ) : (
                            <MdCheckBoxOutlineBlank size={20} className="text-gray400" />
                        )}
                        <span>전체</span>
                    </div>
                )}
                {items.map(({ label, value }) => (
                    <div
                        key={value}
                        className={`flex items-center gap-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={!disabled ? () => handleCheckboxChange(value) : undefined}
                    >
                        {fileArray.includes(value) ? (
                            <MdOutlineCheckBox size={20} className="text-main400" />
                        ) : (
                            <MdCheckBoxOutlineBlank size={20} className="text-gray400" />
                        )}
                        <span>{label}</span>
                    </div>
                ))}
            </div>
            {hasError && <span className="text-warning1">- {errorMessages as string}</span>}
        </>
    );
};

export default Checkboxes;
