import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { MdCancel } from 'react-icons/md';

const chipVariant = cva(
    'flex items-center justify-center text-sm border rounded-full px-2.5 py-0.5 gap-1.5 font-normal whitespace-nowrap transition-all cursor-default',
    {
        variants: {
            intent: {
                primary: 'bg-gray-500 text-gray-200 border-gray-200',
                default: 'bg-white text-gray-500 border-gray-500'
            }
        },
        defaultVariants: {
            intent: 'default'
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = { handleClickDeleteIcon: () => void } & ChipVariantProps;

const DeletableChip = ({ children, intent, handleClickDeleteIcon }: PropsWithChildren<ChipProps>) => {
    return (
        <div className={chipVariant({ intent })}>
            {children || 'Chip'}
            <span
                onClick={handleClickDeleteIcon}
                className="flex items-center justify-center cursor-pointer hover:brightness-90"
            >
                <MdCancel />
            </span>
        </div>
    );
};

export default DeletableChip;
