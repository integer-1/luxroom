import { useLocation } from 'react-router'
import { CartWithDetail } from '../../../models/cart'
import { useAuth0 } from '@auth0/auth0-react'

const Checkout = () => {
  const { state } = useLocation()
  const { user } = useAuth0()
  const auth0Id = user?.sub

  console.log(state)

  const totalPrice = state.reduce(
    (accumulator: number, item: CartWithDetail) => {
      return accumulator + item.quantity * item.price
    },
    0
  )

  console.log(totalPrice)

  return (
    <div>
      <div>
        {state.map((item: CartWithDetail, index: number) => {
          return (
            <div key={index}>
              <p>{item.name.replace(/-/g, ' ')}</p>
              <p>
                Price : {item.price} | Quantity : {item.quantity}
              </p>
            </div>
          )
        })}
        <hr></hr>
        <p>
          Subtotal
          <span>{totalPrice}</span>
        </p>
        <p>Standard delivery to</p>
      </div>
    </div>
  )
}

export default Checkout
