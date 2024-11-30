import React, { useState } from 'react';
import Ellipsis from './Ellipsis';

const Threads = ({ thread }: any) => {
    const isMarket = thread.type === 'market';
    const isMain = thread.useId === 'middleWare useId check';
    const [view, setView] = useState(false); // ...

    // do thread form need this?
    const goToThread = () => {
        //router.push("./~")
    };

    // ftn3: like click
    // ftn4: comment => after the design finished

    return (
        <button>
            {/* ftn1 */}
            {/* make this div button?? */}
            <div>
                <p>thread.title</p>
                {/* ftn2 */}
                <div>
                    <button
                        onClick={() => {
                            setView(!view);
                        }}
                    >
                        ...
                    </button>
                    {view && <Ellipsis isMarket={isMarket} isMain={isMain} />}
                </div>
            </div>
            <p>summary</p>
            <div>
                <div>
                    {/* ftn3 */}
                    <div>heart</div>
                    {/* ftn4 */}
                    <div>comment</div>
                </div>
                <div>type</div>
            </div>
        </button>
    );
};

export default Threads;
