import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdBookmark, MdOutlineEdit } from 'react-icons/md';

type property = {
    image: string;
    title: string;
    locaion: string;
    detail: string;
    price: number;
    id: string;
};

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

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
                        href={`./page/${property.id}`}
                        className="w-[330px] p-6 bg-white rounded-lg border border-[#ebe5d9] flex flex-col gap-6"
                    >
                        <Image src={property.image} width={280} height={240} alt={property.title} />
                        <div>
                            <div>
                                <div>
                                    <p className=" text-[#fc6a1c] text-xl font-bold">$ {property.price}</p>
                                    <div onClick={() => handleBookMark()}>
                                        <MdBookmark />
                                    </div>
                                </div>
                                <p className="text-[#070707] text-xl font-bold">{property.title}</p>
                                <p className="text-[#878787] text-lg">{property.locaion}</p>
                            </div>
                            <p className="text-[#cdaf97] mt-3">{property.detail}</p>
                        </div>
                        <div
                            onClick={() => openModal()}
                            className="p-2 bg-[#fbfaf8] rounded-lg border border-[#ebe5d9]"
                        >
                            <p className="text-[#878787]">Add Note </p>
                            <MdOutlineEdit />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
