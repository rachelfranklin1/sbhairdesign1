import React from "react"
import { Link } from "gatsby"

const SideNav = () => (
  <div class="sidenav">
    <Link to="/">Home</Link>
    <Link to="/prices/">Prices</Link>
    <a href="#">Follow Us</a>
    <a href="#">Reviews</a>
    <a href="#">FAQ's</a>
    <a href="#">Contact</a>
  </div>
)

export default SideNav
