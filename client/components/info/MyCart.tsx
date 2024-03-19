import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useQuery } from '@tanstack/react-query'
import { Cart, CartWithDetail } from '../../../models/cart'
import { getCartByAuth0IdWithDetail } from '../../apis/cart'
import LoadingPage from '../LoadingPage'
import { useCart } from '../hooks/useCart'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BinIcon } from './../Icon'

const MyCart = () => {
  const { user } = useAuth0()
  const auth0Id = user?.sub

  const { updateCartMutation, deleteCartMutation } = useCart()

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

  const totalPrice = cart.reduce(
    (accumulator: number, item: CartWithDetail) => {
      return accumulator + item.quantity * item.price
    },
    0
  )
  const totalItemsQuantity = cart.reduce(
    (accumulator: number, item: CartWithDetail) => {
      return accumulator + item.quantity
    },
    0
  )

  let itemLabel = 'Item'
  if (totalItemsQuantity > 1) itemLabel = 'Items'

  let shippingCost = 0
  if (totalPrice < 115 && totalPrice > 0) shippingCost = 20

  const handleDecrease = (id: number) => {
    try {
      const foundCartItem: CartWithDetail = cart.find(
        (item: CartWithDetail) => item.id === id
      )

      if (foundCartItem.quantity > 1) {
        const updatedCart = {
          id: foundCartItem.id,
          auth0Id: foundCartItem.auth0Id,
          item_code: foundCartItem.item_code,
          quantity: foundCartItem.quantity - 1,
        }

        updateCartMutation.mutate({ id, updatedCart })
      } else {
        deleteCartMutation.mutate(id)
      }
    } catch (error) {
      const message = `Sorry, We can't find your item`
      return (
        <>
          <p>{message}</p>
        </>
      )
    }
  }

  const handleIncrease = (id: number) => {
    try {
      const foundCartItem: Cart = cart.find((item: Cart) => item.id === id)

      const updatedCart = {
        id: foundCartItem.id,
        auth0Id: foundCartItem.auth0Id,
        item_code: foundCartItem.item_code,
        quantity: foundCartItem.quantity + 1,
      }
      updateCartMutation.mutate({ id, updatedCart })
    } catch (error) {
      const message = `Sorry, We can't find your item`
      return (
        <>
          <p>{message}</p>
        </>
      )
    }
  }

  const handleDelete = (id: number) => {
    deleteCartMutation.mutate(id)
  }

  return (
    <div id="cart">
      <h4>Shopping Cart</h4>
      <IfAuthenticated>
        <div className="cart-container">
          {cart.map((item: CartWithDetail, index: number) => (
            <div key={index} className="cart-container-box">
              <img
                src={`../${item.item_code}.jpg`}
                alt={`${item.name}_cart_image`}
              />
              <p className="cart-container-box-name">
                {item.name.replace(/-/g, ' ')}
              </p>
              <p className="cart-container-box-price">${item.price}</p>
              <div className="quantity-button-box">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(item.id)}
                >
                  <BinIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="show-price">
          <span className = "">
            {totalItemsQuantity} {itemLabel}
          </span>
          <span className="price"> {totalPrice.toLocaleString()}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="show-price">
          <span>Shipping Cost</span>
          <span className="price"> {shippingCost}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="show-price">
          <span>Total</span>
          <span className="price"> {totalPrice + shippingCost}</span>
          <span className="currency"> NZD</span>
        </div>
        <div className="gst">
          * INCLUDING GST of
          {(((totalPrice + shippingCost) / 1.15) * 0.15).toFixed(2)}
          <span className="currency"> NZD</span>
        </div>
        <hr />
        <div>
          <Link to="/my/cart/checkout" state={cart}>
            GO TO CHECKOUT
          </Link>
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p className="login-mention">
          <Spinner
            animation="grow"
            size="sm"
            style={{ margin: 0, marginRight: '20px' }}
          />
          Check it out! To view your shopping cart, please log in.
        </p>
      </IfNotAuthenticated>
    </div>
  )
}

export default MyCart
