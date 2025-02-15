import { JSX } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handleChangePage: (page: number) => void;
    visiblePageCount?: number;
}

const Pagination = ({ currentPage, totalPages, handleChangePage, visiblePageCount = 10 }: PaginationProps) => {
    const renderPageNumbers = (): JSX.Element[] => {
        const pages = [];
        const startPage = currentPage;
        const endPage = Math.min(currentPage + visiblePageCount - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handleChangePage(i)}
                    className={`flex items-center justify-center w-10 h-10 rounded-md font-bold text-lg cursor-pointer ${
                        i === currentPage ? 'bg-main400 text-white' : 'bg-white text-gray910'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {currentPage !== 1 && (
                <button
                    onClick={() => handleChangePage(currentPage - visiblePageCount)}
                    className={
                        'flex items-center justify-center w-10 h-10 rounded-md font-bold text-2xl bg-white text-gray910 cursor-pointer'
                    }
                >
                    <MdChevronLeft />
                </button>
            )}
            {renderPageNumbers()}
            {currentPage + visiblePageCount <= totalPages && (
                <button
                    onClick={() => handleChangePage(currentPage + visiblePageCount)}
                    className={
                        'flex items-center justify-center w-10 h-10 rounded-md font-bold text-2xl bg-white text-gray910 cursor-pointer'
                    }
                >
                    <MdChevronRight />
                </button>
            )}
        </div>
    );
};

export default Pagination;
