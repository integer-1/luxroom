import { Link } from 'react-router-dom'
import { InstagramIcon } from './Icon'

const Footer = () => {
  return (
    <div className="footer-box">
      <hr></hr>

      <img src="./logo.jpg" alt="logo" />
      <div className="footer-content">
        <div className="support">
          <p>Help & Support</p>
          <Link to="/support/shipping">Shipping Info</Link>
          <Link to="/support/refund">Returns & Exchanges</Link>
          <Link to="/">FAQs</Link>
        </div>
        <div className="about">
          <p>About LUXLOOM</p>
          <Link to="/luxloom/us">About Us</Link>
          <Link to="/luxloom/contact">Contact Us</Link>
          <Link to="/luxloom/location">Store Locations</Link>
        </div>
        <div className="account">
          <p>My Account</p>
          <Link to="/my/cart">My Cart</Link>
          <Link to="/">Wishlist</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
      <div className="social">
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
      </div>
      <p className="copyright">Copyright © 2023 integer::1</p>
    </div>
  )
}

export default Footer
