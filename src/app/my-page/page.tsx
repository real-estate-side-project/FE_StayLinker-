import React, { useState } from 'react';

const MyPage = () => {
    // 이거 사용자 권한별로 다른거 줘야겠네
    // 파일 하나 만들고 로그인된 권한 별로 props로 보내서 맞는 sidebarData 가져오게 해야겠음
    // 현재 일반 사용자용 데이터
    const sidebarData = [
        {
            title: 'MY ACTIVITY',
            services: ['Wishlist', 'Community Post', 'My Comment']
        },
        {
            title: 'Chat',
            services: ['Chat with Agents', 'Resale Market Chat List']
        },
        {
            title: 'MY INFORMATION',
            services: ['Edit Profile', 'Foreigner Registration Verification']
        },
        {
            title: '고객센터',
            services: ['FAQ', '1:1 Q&A']
        }
    ];

    const [service, setService] = useState<string>();

    return (
        <div>
            <div>
                {sidebarData.map((section, index) => (
                    <div key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.services.map((service) => (
                                <li key={service} onClick={() => setService(service)}>
                                    {service}
                                </li>
                            ))}
                        </ul>
                        {index < sidebarData.length - 1 && <hr className="" />}
                    </div>
                ))}
            </div>
            <div>{/* useState service에 따라 다른 내용 보여주기 */}</div>
        </div>
    );
};

export default MyPage;
