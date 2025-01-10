import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';
import { MdOutlineGridView } from 'react-icons/md';

const chipVariant = cva(
    'flex items-center justify-center text-base mo:text-sm border rounded-lg mo:rounded px-3 py-2 gap-2 mo:px-2 mo:py-1 mo:gap-1 font-semibold mo:font-medium whitespace-nowrap transition-all cursor-pointer',
    {
        variants: {
            state: {
                pressed: 'text-main500 border-main500',
                default: 'text-gray500 border-gray500'
            }
        },
        defaultVariants: {
            state: 'default'
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = { handleClickFilter?: () => void; icon?: ReactNode } & ChipVariantProps;

const Filter = ({ children, state, handleClickFilter, icon }: PropsWithChildren<ChipProps>) => {
    return (
        <div className={chipVariant({ state })} onClick={handleClickFilter}>
            {children || 'Filter'}
            <span className="text-2xl mo:text-base">{icon || <MdOutlineGridView />}</span>
        </div>
    );
};

export default Filter;
