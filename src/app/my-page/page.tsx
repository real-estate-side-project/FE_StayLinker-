'use client';

import React, { useEffect, useState } from 'react';
import { consumerSidebarData, businessSidebarData, componentMap } from './sidebarData';

const MyPage = () => {
    // add later: check logged-in user type
    // const sidebarData = userType === 'consumer' ? consumerSidebarData : businessSidebarData;

    const sidebarData = consumerSidebarData;
    const [selectedService, setSelectedService] = useState<string>('Wishlist');
    const selectedComponent = componentMap[selectedService.replace(/\s+/g, '')];

    useEffect(() => {}, []);

    return (
        <div className="flex gap-[136px] ml-60 mt-16">
            <div>
                {sidebarData.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">{section.title}</h3>
                        <ul>
                            {section.services.map((service) => (
                                <li
                                    key={service}
                                    onClick={() => setSelectedService(service)}
                                    className={`flex flex-col gap-3 cursor-pointer ${
                                        selectedService === service ? 'text-[#fc6a1c]' : ''
                                    } `}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                        {index < sidebarData.length - 1 && <hr className="bg-[#b9b9b9] mb-4" />}
                    </div>
                ))}
            </div>
            <div>
                <p>{selectedService}</p>
                <hr />
                {selectedComponent && React.createElement(selectedComponent)}
            </div>
        </div>
    );
};

export default MyPage;
