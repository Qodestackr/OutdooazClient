import React from "react"
import PropertyCard from "../Global/PropertyCard"

function Property({ hotel }) {
    return (
        <section className="my-8 md:px-16 xl:px-24 text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <PropertyCard key="{room.id}" room="{room}" />
                Map Through and Return a property Card
            </div>
        </section>
    )
}

export default Property