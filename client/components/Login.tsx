import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { CartIcon, LoginIcon, LogoutIcon } from './Icon'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'

const Login = () => {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <div id="login">
      <IfAuthenticated>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Logout</Tooltip>}
        >
          <button className="logout-button" onClick={() => logout()}>
            <LogoutIcon />
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">My Cart</Tooltip>}
        >
          <Link to="/my/cart">
            <CartIcon />
          </Link>
        </OverlayTrigger>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Login</Tooltip>}
        >
          <button className="login-button" onClick={() => loginWithRedirect()}>
            <LoginIcon />
          </button>
        </OverlayTrigger>
      </IfNotAuthenticated>
    </div>
  )
}

export default Login
