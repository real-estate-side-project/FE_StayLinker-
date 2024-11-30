import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const chipVariant = cva(
    'flex items-center justify-center text-sm border rounded-full px-2.5 py-0.5 font-normal whitespace-nowrap transition-all',
    {
        variants: {
            intent: {
                primary: 'bg-gray-500 text-gray-200 border-gray-200',
                default: 'bg-white text-gray-500 border-gray-500'
            },
            isClickable: {
                true: 'cursor-pointer hover:brightness-90',
                false: 'cursor-default'
            }
        },
        defaultVariants: {
            intent: 'default',
            isClickable: false
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = { onClick?: () => void } & ChipVariantProps;

const Chip = ({ children, intent, isClickable, onClick }: PropsWithChildren<ChipProps>) => {
    return (
        <div className={chipVariant({ intent, isClickable })} onClick={onClick}>
            {children || 'Chip'}
        </div>
    );
};

export default Chip;
