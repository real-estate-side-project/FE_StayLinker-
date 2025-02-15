import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { MdClose } from 'react-icons/md';

const chipVariant = cva(
    'flex items-center justify-center border rounded-full px-3 py-1.5 gap-0.5 font-medium whitespace-nowrap transition-all',
    {
        variants: {
            state: {
                pressed: 'bg-main400 text-white border-main600 cursor-pointer',
                default: 'bg-white text-gray910 border-main200 hover:bg-main200 hover:border-main400 cursor-pointer',
                disable: 'bg-gray100 text-gray500 border-gray300 cursor-not-allowed'
            },
            size: {
                md: 'text-xs',
                lg: 'text-base mo:text-sm'
            }
        },
        defaultVariants: {
            state: 'default',
            size: 'lg'
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = { handleClickText?: () => void; handleClickDeleteIcon?: () => void } & ChipVariantProps;

const Tag = ({ children, state, size, handleClickText, handleClickDeleteIcon }: PropsWithChildren<ChipProps>) => {
    return state === 'disable' ? (
        <div className={chipVariant({ state, size })}>
            {children || 'Tag'}
            <span className="flex items-center justify-center">
                <MdClose />
            </span>
        </div>
    ) : (
        <div onClick={handleClickText} className={chipVariant({ state, size })}>
            {children || 'Tag'}
            <span
                onClick={(e) => {
                    e.stopPropagation();
                    if (handleClickDeleteIcon) handleClickDeleteIcon();
                }}
                className="flex items-center justify-center"
            >
                <MdClose />
            </span>
        </div>
    );
};

export default Tag;
