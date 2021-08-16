import React, { useEffect, useState } from "react"

function PropertyCard({ room }) {
    // const [image, setImage] = useState(null)
    
    // useEffect(() => {
    //     try {
    //         let images = room && room.image.split(",")
    //         room && setImage(images[0])
    //     } catch (error) {}
    // }, [room])

    return (
        <>
            <a
                className="mx-5 rounded-t-lg overflow-hidden shadow-xl mt-5 "
                data-aos="fade-up"
                href={`/`}
            >
                <div className="relative">
                    <img
                        src={"http://placehold.it/300x300?text=room image"}
                        className="w-full h-64 object-cover"
                        alt="room"
                    />
                    <div className="absolute bottom-0 text-gray-100 flex">
                        <div className="bg-orange-600 py-2 px-6 rounded-tr-lg flex flex-col items-center">
                            <span className="text-xl">Price $</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 py-5 px-2">
                    <h3 className="text-2xl font-medium text-center hover:text-gray-600">
                        Property Name
                    </h3>
                </div>
            </a>
        </>
    )
}

export default PropertyCard