import { IconProps } from '@/types/icon.type';

export const ChatBubble = ({ width = 72, height = 72, fill = '#000' }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <path
                fill={fill}
                d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"
            />
        </svg>
    );
};
