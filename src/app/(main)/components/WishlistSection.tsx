import { PropertyCard, SectionTitle } from './UI';

const wishlist = [
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    },
    {
        image: '/images/ImagePlaceholder.png',
        price: 1234567890,
        title: 'Cozy Apartment',
        location: 'Gwanak-gu, Seoul, Republic of Korea',
        description: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.'
    }
];
export const WishlistSection = () => {
    return (
        <section className="flex flex-col gap-10 items-start">
            <SectionTitle className="pl-[calc(50%-720px)]">Wishlist</SectionTitle>
            <div className="flex gap-10 items-center w-screen px-[calc(50%-720px)] snap-x snap-mandatory overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {wishlist.map((item) => (
                    <div key={item.title} className="snap-center">
                        <PropertyCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
};
