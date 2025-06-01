import { IconProps } from '@/types/icon.type';

export const Note = ({ width = 72, height = 72, fill = '#000' }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <path
                fill={fill}
                d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z"
            />
        </svg>
    );
};
