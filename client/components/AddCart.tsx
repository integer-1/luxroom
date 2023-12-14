import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useNavigate } from 'react-router-dom'
import { useCart } from './hooks/useCart.ts'
import { Cart, NewCart } from '../../models/cart.ts'
import LoadingPage from './LoadingPage.tsx'
import { useQuery } from '@tanstack/react-query'
import { getCartByAuth0Id } from '../apis/cart.ts'

interface ItemCodeProps {
  itemCode: number
}

const AddCart: React.FC<ItemCodeProps> = ({ itemCode }) => {
  const navigate = useNavigate()
  const { user } = useAuth0()
  const auth0Id = user?.sub
  const { addCartMutation, updateCartMutation } = useCart()

  const {
    data: cart,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cart', auth0Id],
    queryFn: () => getCartByAuth0Id(auth0Id as string),
  })

  if (isError || !auth0Id) return <p>Authentication error. Please log in.</p>

  if (!cart || isLoading) return <LoadingPage />

  const newCart: NewCart = {
    auth0Id: auth0Id,
    item_code: itemCode,
    quantity: 1,
  }

  const handleAdd = () => {

    try {
      const existingCartItem: Cart = cart.find(
        (item: Cart) => item.item_code === itemCode
      )

      if (existingCartItem) {
        // If it exists, update the quantity
        const updatedCart= {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        }
        const id = existingCartItem.id

        updateCartMutation.mutate({ id, updatedCart},{
          onSuccess: () => {
            navigate('/my/cart')
          },
        } )

      } else {
        // If it doesn't exist, add a new item to the cart
        addCartMutation.mutate(newCart, {
          onSuccess: () => {
            navigate('/my/cart')
          },
        })
      }
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
