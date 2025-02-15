import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const chipVariant = cva(
    'flex items-center justify-center whitespace-nowrap rounded font-medium mo:font-normal text-base mo:text-xs px-2 mo:px-1 cursor-default',
    {
        variants: {
            type: {
                solid: 'text-white',
                outline: 'outline outline-1',
                pastel: ''
            },
            color: {
                main: '',
                sub: '',
                danger: ''
            }
        },
        compoundVariants: [
            { type: 'solid', color: 'main', class: 'bg-main400' },
            { type: 'solid', color: 'sub', class: 'bg-sub500' },
            { type: 'solid', color: 'danger', class: 'bg-danger600' },
            { type: 'outline', color: 'main', class: 'text-main600 border-main400' },
            { type: 'outline', color: 'sub', class: 'text-sub700 border-sub500' },
            { type: 'outline', color: 'danger', class: 'text-danger800 border-danger600' },
            { type: 'pastel', color: 'main', class: 'bg-main100 text-main600' },
            { type: 'pastel', color: 'sub', class: 'bg-sub100 text-sub600' },
            { type: 'pastel', color: 'danger', class: 'bg-danger100 text-danger800' }
        ],
        defaultVariants: {
            type: 'solid',
            color: 'main'
        }
    }
);

type ChipVariantProps = VariantProps<typeof chipVariant>;

type ChipProps = {} & ChipVariantProps;

const Badge = ({ children, type, color }: PropsWithChildren<ChipProps>) => {
    return <div className={chipVariant({ type, color })}>{children || 'Badge'}</div>;
};

export default Badge;
