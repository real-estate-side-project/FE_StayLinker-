import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { MdCancel } from 'react-icons/md';

const chipVariant = cva(
    'flex items-center justify-center text-sm border rounded-full px-2.5 py-0.5 gap-1.5 font-normal hover:brightness-90 whitespace-nowrap transition-all',
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

type ChipProps = { onClick?: () => void; handleClickDeleteIcon: () => void } & ChipVariantProps;

const DeletableChip = ({ children, intent, onClick, handleClickDeleteIcon }: PropsWithChildren<ChipProps>) => {
    return (
        <div className={chipVariant({ intent })} onClick={onClick}>
            {children || 'Chip'}
            <span onClick={handleClickDeleteIcon} className="flex items-center justify-center cursor-pointer">
                <MdCancel />
            </span>
        </div>
    );
};

export default DeletableChip;
