import { Link } from 'react-router-dom'
import { InstagramIcon } from './Icon'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Footer = () => {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <div className="footer-box">
      <hr></hr>

      <img src="../logo.jpg" alt="logo" />
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
          <IfAuthenticated>
            <Link to="/" onClick={() => logout()}>
              Logout
            </Link>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to="/" onClick={() => loginWithRedirect()}>
              Login
            </Link>
          </IfNotAuthenticated>
        </div>
        <div className="social">
          <p>Social</p>
          <Link to="https://www.instagram.com/luxloom_project/">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <p className="copyright">Copyright © 2023 integer::1</p>
    </div>
  )
}

export default Footer
