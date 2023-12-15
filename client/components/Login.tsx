import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { LogonCartIcon, LoginIcon, LogoutIcon } from './Icon'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'

const Login = () => {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <div id="login">
      <IfAuthenticated>
        <p className="hello">Hello, {user?.nickname}</p>
        <OverlayTrigger
          key={'left'}
          placement={'left'}
          overlay={<Tooltip id="tooltip-left">Logout</Tooltip>}
        >
          <button className="logout-button" onClick={() => logout()}>
            <LogoutIcon />
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          key={'left'}
          placement={'left'}
          overlay={<Tooltip id="tooltip-left">My Cart</Tooltip>}
        >
          <Link className="cart-button" to="/my/cart">
            <LogonCartIcon />
          </Link>
        </OverlayTrigger>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p className="hello">Welcome </p>

        <OverlayTrigger
          key={'left'}
          placement={'left'}
          overlay={<Tooltip id="tooltip-left">Login</Tooltip>}
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
