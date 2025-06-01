import { ChatAlert, ChatBubble, InformationBox, MapSearch, Note, Subtract } from '../assets';
import { SectionTitle, ServiceButton } from './UI';

const serviceList = [
    {
        href: '/about-us',
        icon: <Subtract />,
        title: 'About Us'
    },
    {
        href: '/information',
        icon: <InformationBox />,
        title: 'Information'
    },
    {
        href: '/listing',
        icon: <MapSearch />,
        title: 'Listing'
    },
    {
        href: '/article',
        icon: <Note />,
        title: 'Article'
    },
    {
        href: '/community',
        icon: <ChatBubble />,
        title: 'Community'
    },
    {
        href: '/qna',
        icon: <ChatAlert />,
        title: 'QnA'
    }
];
export const OurServiceSection = () => {
    return (
        <div className="flex flex-col gap-10 items-start">
            <SectionTitle title="Our Service" />
            <div className="flex items-center justify-between gap-[48.8px]">
                {serviceList.map((service) => (
                    <ServiceButton key={service.title} href={service.href} icon={service.icon} title={service.title} />
                ))}
            </div>
        </div>
    );
};
