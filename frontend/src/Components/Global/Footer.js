import React from "react"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-lists">
          <ul>
            <li className="list-head">BROWSE</li>
            <li><Link to="/">Vacational Rental Guides</Link></li>
            <li><Link to="/">Live TV</Link></li>
            <li><Link to="/">Advertising & Affiliates</Link></li>
            <li><Link to="/">Explore Nearby</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Frontline Stays</Link></li>
            <li><Link to="/">Investors</Link></li>
            <li><Link to="/">CLinkncellation Options</Link></li>
            <li><Link to="/">Guest Referrals</Link></li>
            <li><Link to="/">List Your Home</Link></li>
          </ul>

          <ul>
            <li className="list-head">HELP</li>
            <li><Link to='/'>Responsible Hosting</Link></li>
            <li><Link to='/'>Resource Center</Link></li>
            <li><Link to='/'>Trust & Safety</Link></li>
          </ul>
          <ul>
            <li className="list-head">ABOUT US</li>
            <li><Link to='/'>Newsroom</Link></li>
            <li><Link to="/">Jobs</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="divider"></div>
      </div>
      
    </footer>
    )
}

export default Footer