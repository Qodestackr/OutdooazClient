import React from "react"

function PropertyHero({ hotel }) {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <div
                className="absolute z-10 w-full h-full top-0"
                style={{
                    boxShadow: "inset 0px 100px 50px rgba(0, 0, 0, 0.5)",
                }}>
                </div>
            <img
                src= "http://placehold.it/300x300?text=hotel"
                alt="hotel"
                className="w-full object-cover"
                style={{ height: "60vh" }}
            />

            <div className="flex items-center justify-between w-full absolute bottom-0">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between py-2 px-8 lg:px-48 w-full
                        z-10"
                    style={{
                        boxShadow: "inset 0px -80px 25px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    <div className="text-gray-100">
                        <h1 className="text-3xl font-semibold">
                           Property Name
                        </h1>
                        <span className="text-sm">
                            Address
                        </span>
                    </div>
                    <div className="text-gray-100 mt-2 md:mt-0">
                        Starting From{" "}
                        <span className="text-3xl text-orange-300">
                            $ .Min Price
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyHero