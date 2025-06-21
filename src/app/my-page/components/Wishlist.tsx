import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdBookmark, MdOutlineEdit } from 'react-icons/md';

type property = {
    title: string;
    locaion: string;
    detail: string;
    price: number;
    image: string;
    id: string;
};

const Wishlist = () => {
    // const [wishlist, setWishlist] = useState([]);
    const wishlist = [
        {
            title: 'Cozy Apartment',
            locaion: 'Gwanak-gu, Seoul, Republic of Korea',
            detail: 'Cozy Apartment for family. 3beds, 2baths. This house is perfect for a family of 4.',
            price: 280000,
            image: '/images/navi.png',
            id: '123'
        }
    ];

    // ftn1: call get wishlist api > setWishlist()
    // ftn2: READ note (Move to other folder)

    const handleBookMark = () => {
        // call BookMark api
    };

    const openModal = () => {
        // consider whether to use "common modal" or not
        // N check common modal
    };

    return (
        <div>
            {/* <div>filter btn</div> */}
            <div className="grid grid-cols-3 gap-10">
                {wishlist.map((property: property) => (
                    <Link
                        key={property.id}
                        href={`./page/${property.id}`}
                        className="w-[330px] p-6 bg-white rounded-lg border border-[#ebe5d9] flex flex-col gap-6 my-10"
                    >
                        <Image src={property.image} width={280} height={240} alt={property.title} />
                        <div>
                            <div>
                                <div className="flex justify-between">
                                    <p className=" text-[#fc6a1c] text-xl font-bold">$ {property.price}</p>
                                    <div onClick={() => handleBookMark()}>
                                        <MdBookmark size={24} color="#fc6a1c" />
                                    </div>
                                </div>
                                <p className="text-[#070707] text-xl font-bold">{property.title}</p>
                                <p className="text-[#878787] text-lg">{property.locaion}</p>
                            </div>
                            <p className="text-[#cdaf97] mt-3">{property.detail}</p>
                        </div>
                        <div
                            onClick={() => openModal()}
                            className="p-2 bg-[#fbfaf8] rounded-lg border border-[#ebe5d9] flex justify-between"
                        >
                            <p className="text-[#878787]">Add Note </p>
                            <MdOutlineEdit size={24} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
