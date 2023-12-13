import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { CartIcon } from './Icon'
import { Link } from 'react-router-dom'

const Login = () => {
  const { loginWithRedirect, logout, user } = useAuth0()

  console.log(user?.sub)
  
  return (
    <div id="login">
      <IfAuthenticated>
        <p>{user?.nickname}</p>
        <Link to="/my/cart">
          <CartIcon />
        </Link>
        <button className="button" onClick={() => logout()}>
          Logout
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        {/* <p>Please log in here</p> */}

        <button className="button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </IfNotAuthenticated>
    </div>
  )
}

export default Login
