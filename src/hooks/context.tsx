import { useContext, createContext, ReactNode, useState } from "react";
import { Cart } from "../pages/Cart";




type CartContextProps = { //to children works you have to import manually the children from ReactNode otherwise the children will not be availible
    children: ReactNode;
}

type FakeProps = {
  id: number
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext)  //shoping cart context
}

/*type ShoppingCartContext = {
  increaseCartQuantity: (id: number) => void
  cartItems: CartItem[])
}*/
/*export function StoreItem({ id }: FakeProps) {
  const {
    increaseCartQuantity
  } = Cart()*/


  const [ click, setClick ] = useState(0);

// const navigate = useNavigate()

//const handleClick = () => navigate()

 const CartContext = createContext(click);


  const ContextProvider = ({ children }: CartContextProps) => {
    <CartContext.Provider value={ click }>{children}</CartContext.Provider> //provider contextAPI
 }
 return(
       <div className="pt-16">
      <a href="/cart" className="text-1xl text-slate-600 hover:text-stone-800">
      {click}
      <button className='rounded-full p-1 border-2 border-slate-600 hover:border-slate-900' onClick={() => setClick(id)}>
      Add to Cart</button></a>
      </div>
      )
    }