import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useQuery } from '@tanstack/react-query'
import { CartWithDetail } from '../../../models/cart'
import { getCartByAuth0IdWithDetail } from '../../apis/cart'
import LoadingPage from '../LoadingPage'

const MyCart = () => {
  const { user } = useAuth0()

  const auth0Id = user?.sub

  const {
    data: cart,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartByAuth0IdWithDetail(auth0Id as string),
  })

  if (isError) return <p>Something went wrong!</p>

  if (!cart || isLoading) return <LoadingPage />

  return (
    <div>
      <IfAuthenticated>
        <div>
          {cart.map((item: CartWithDetail) => (
            <div key={item.id}>
              <img
                src={`../${item.item_code}.jpg`}
                alt={`${item.name}_cart_image`}
                style={{ width: '200px' }}
              />
              <p>code : {item.item_code}</p>
              <p>Quantity : {item.quantity}</p>
              <p>name : {item.name}</p>
              <p>price : {item.price}</p>
            </div>
          ))}
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>Please log in for cart</p>
      </IfNotAuthenticated>
    </div>
  )
}

export default MyCart
