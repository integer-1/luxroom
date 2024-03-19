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

  const totalItemsQuantity = state.reduce(
    (accumulator: number, item: CartWithDetail) => {
      return accumulator + item.quantity
    },
    0
  )

  let itemLabel = 'Item'
  if (totalItemsQuantity > 1) itemLabel = 'Items'

  let shippingCost = 0
  if (totalPrice < 115 && totalPrice > 0) shippingCost = 20

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
        <div className="show-price">
          <span className="price-name">
            {totalItemsQuantity} {itemLabel}
          </span>
          <span className="price"> {totalPrice.toLocaleString()}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="show-price">
          <span className="price-name">Shipping Cost</span>
          <span className="price"> {shippingCost}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="show-price">
          <span className="price-name">Total</span>
          <span className="price"> {totalPrice + shippingCost}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="gst">
          * INCLUDING GST of
          {(((totalPrice + shippingCost) / 1.15) * 0.15).toFixed(2)}
          <span className="currency"> NZD</span>
        </div>
        <p>Standard delivery to</p>
      </div>
    </div>
  )
}

export default Checkout
