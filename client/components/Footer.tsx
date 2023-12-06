import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <hr></hr>
      <p>LUCLOOM</p>

      <div className="support">
        <p> Help & Support</p>
        <Link to="/">Shipping Info</Link>
        <Link to="/">Returns & Exchanges</Link>
        <Link to="/">FAQs</Link>
      </div>
      <div className="account">
        <p> My Account</p>
        <Link to="/">Your Cart</Link>
        <Link to="/">Wishlist</Link>
        <Link to="/">Sign Up</Link>
      </div>
      <div className="about">
        <p>About LUCLOOM</p>
        <Link to="/">About us</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Store Locations</Link>
      </div>


      <p>Copyright © 2023 integer::1</p>
    </div>
  )
}

export default Footer
