import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Home.css'

function Slider(){
    return(
        <Fragment>

      <section className="sub-header">
        <img src="img/logos.png" alt="" />
        <div>
          <h4>Get special offers, travel inspiration, and more</h4>
          <h3>Grab top destination plan & save</h3>
          <Link to='/' className="sub-link">Details</Link>
        </div>

        <div>
        <Link to='/search' className="btn btn-outline">EXPLORE</Link>
        </div>
      </section>

    <section className="live">
      <div className="live-border">
        <h4>Never Stop Exploring The World</h4>
        <div className="text-xl">Outdoaz Makes It Better</div>
        <div className="sub-text">
        Villa? Cottage? Or Apartment? Find your perfect Holiday Rental. Book a lodging, homestays for 
        vacation rentals and live Anywhere. This is your best Home away from Home.
        </div>
        <div className="legal-text">
         check on regional restrictions, resources and safety.
        </div>
        <Link to="/">View Possibilities in Your Area</Link>
      </div>
    </section>   
        </Fragment>
        )
}

export default Slider