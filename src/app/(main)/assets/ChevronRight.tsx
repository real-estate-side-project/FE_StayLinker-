import { IconProps } from '@/types/icon.type';

export const ChevronRight = ({ width = 24, height = 24, fill = '#000' }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <path fill={fill} d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
        </svg>
    );
};
