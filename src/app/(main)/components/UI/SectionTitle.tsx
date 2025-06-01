interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
    return <h2 className={`pc-title-l-700 text-gray910 ${className}`}>{children}</h2>;
};
