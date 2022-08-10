import { Link } from 'react-router-dom'
import  { useShoppingCart } from '../hooks/context'
import  items  from '../data/items.json'
import { formatCurrency } from '../FormatCurrency'
import { CartItem } from '../CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
    return(
      <div x-show={isOpen} x-hide={closeCart} className="end">fkwopfkwpofkpoqkffjewifjio //this is the opening cart make it in main store.
      <button onClick={()=>"closeButton"}>
        <h1>Cart</h1>
      </button>
      <body>
        <div className="">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          </div>
          </body>
          </div>
   )}