interface SectionTitleProps {
    title: string;
    className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
    return <h2 className={`pc-title-l-700 text-gray910 ${className}`}>{title}</h2>;
};
