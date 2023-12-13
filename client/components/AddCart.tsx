import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useCart } from './hooks/useCart.ts'
import cart from '../../server/db/data/cart.js'
import { NewCart } from '../../models/cart.ts'

interface ItemCodeProps {
  itemCode: number
}

const AddCart: React.FC<ItemCodeProps> = ({ itemCode }) => {
  const { user } = useAuth0()
  const auth0Id = user?.sub

  const navigate = useNavigate()

  const { addCartMutation } = useCart()

  if (auth0Id === undefined) return <p>error</p>

  const newCart: NewCart = {
    auth0Id: auth0Id,
    item_code: itemCode,
    quantity: 1,
  }

  const handleAdd = () => {
    try {
      addCartMutation.mutate(newCart, {
        onSuccess: () => {
          navigate('/')
          window.location.reload()
        },
      })
    } catch (error) {
      const message = `Sorry, We can't save your recipe`
      return (
        <>
          <p>{message}</p>
        </>
      )
    }
  }

  return (
    <div>
      <IfAuthenticated>
        <button className="button" onClick={() => handleAdd()}>
          Add cart
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>Please log in for order</p>
      </IfNotAuthenticated>
    </div>
  )
}

export default AddCart
