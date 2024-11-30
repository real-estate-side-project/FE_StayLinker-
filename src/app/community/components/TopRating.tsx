import React from 'react';

interface TopRatingProps {
    type: string;
}

const TopRating = ({ type }: TopRatingProps) => {
    //ftn1: click한 글로 이동
    return (
        <div>
            <p>Top</p>
            {/* ftn1 */}
            <div>
                <p>n. title</p>
                <div>liked num</div>
            </div>
        </div>
    );
};

export default TopRating;
