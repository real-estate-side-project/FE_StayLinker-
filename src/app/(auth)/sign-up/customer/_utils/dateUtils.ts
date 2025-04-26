export const getDateOptions = () => {
    return Array.from({ length: 31 }, (_, i) => {
        const day = (i + 1).toString().padStart(2, '0');
        return { label: day, value: day };
    });
};
export const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => {
        const year = (currentYear - i).toString();
        return { label: year, value: year };
    });
};
