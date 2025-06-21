interface SelectorProps {
    label: string;
    placeholder: string;
    icon?: React.ReactNode;
    className?: string;
}

export const Selector = ({ label, placeholder, icon, className }: SelectorProps) => {
    return (
        <div className={`flex items-end gap-5 ${className}`}>
            <div className="flex flex-col gap-2">
                <div className="pc-body-m-700 text-gray910 whitespace-nowrap">{label}</div>
                <div className="pc-body-s-500 text-information500 whitespace-nowrap">{placeholder}</div>
            </div>
            <div>{icon}</div>
        </div>
    );
};
