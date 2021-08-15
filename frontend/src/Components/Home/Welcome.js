import React, { useEffect } from "react"

import Slider from "./Slider"

function Welcome() {

    return (
        <section>
            <div className="mt-8 p-8 xl:px-48 ">
                <div className="text-center ">
                    <h2 className="text-4xl font-semibold text-gray-800 font-serif">
                        Welcome To Outooaz
                    </h2>
                </div>
                <Slider/>
            </div>
        </section>
    )
}

export default Welcome