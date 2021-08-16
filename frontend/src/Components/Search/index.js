import React, { useEffect } from "react"

import Header from "../Global/Header"
import Footer from "../Global/Footer"

function Search(props) {
    const [properties, setProperties] = React.useState()

    const getProperties = async() => {
        // fetch properties http://localhost:5200/properties
        const response = await fetch(`http://localhost:5200/properties`)
        // convert response to json
        const results = await response.json()
        setProperties(results)
    }

    useEffect(() => {
        getProperties()
    },[])

    return (
        <>
            <Header />
            <div className="text-black">
               {properties && properties.map(property => 
                    (<ul key={property._id}>
                        <li>{property.roomTitle}</li>
                        {property._id}
                        <li>{property.price_per_night}</li>
                        <img src="http://localhost:5200/image/image_1628335478796.jpg" 
                        alt={"img"} style={{ height: "20%", width:"30%" }}/>
                    </ul>)
                )}
            </div>
            <Footer />
        </>
    )
}

export default Search