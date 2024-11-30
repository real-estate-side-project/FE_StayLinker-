import React from 'react';

const WriteThread = () => {
    //ftn1: save request api call ftn (if i make other component for form changing > it'll be moved to it(props > type))
    //ftn2: show cancel modal (according the answer > close modal or back to community page (how to make this, 2 ftn? or else))

    // Use modal Sample
    return (
        <>
            {/* type ? normal form : market form   ???use this way or else??? */}
            <div>
                <button>type</button>
                <button>image</button>
            </div>
            <div>
                {/* ftn2 */}
                <button>cancel</button>
                {/* ftn1 */}
                <button>save</button>
            </div>
        </>
    );
};

export default WriteThread;
