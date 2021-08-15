import React from "react"
import ClientReviewCard from "./ClientReviewCard"
import TitleSection from "../Global/TitleSection"

function ClientReviews() {
    return (
        <section className="reviews px-5 xl:px-48">
            <TitleSection title="Recent Guest and Hosts Review" />

            <div className="relative flex flex-col md:flex-row">
                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar.jpeg"
                    name="Kevin Kim"
                    location="Nakuru"
                    rating={5}
                    review="The host threw a party which is against my house rules. When I applied an extra 
                            cleaning fee, she left an extremely negative review of my rental. 
                            I wouldn’t recommend hosting this guest."
                />

                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar.jpeg"
                    name="Wilson"
                    location="Kilimani"
                    rating={5}
                    review="Had a friendly and engaging experience in your properties!"
                />

                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar.jpeg"
                    name="Jan Bjronsson"
                    location="Dubai"
                    rating={5}
                    review="The host was welcoming and everything was good"
                />
            </div>
        </section>
    )
}

export default ClientReviews