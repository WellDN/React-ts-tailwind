import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { consumer, setConsumer } from './consumer'
import './consumer'

type CartContextProps = { //to children works you have to import manually the children from ReactNode otherwise the children will not be availible
    children: ReactNode;
}
export function AddCart() {
  
  const [ click, setClick ] = useState(0);

  const navigate = useNavigate()
  const handleClick = () => navigate({})
  
  const CartContext = createContext(click);

  const ContextProvider = ({ children }: CartContextProps) => {
    <CartContext.Provider value={ click }>{children}</CartContext.Provider> //provider contextAPI
 }
 return(
       <div className="pt-16">
      <a href="/cart" className="text-1xl text-slate-600 hover:text-stone-800">
      {click}
      <button className='rounded-full p-1 border-2 border-slate-600 hover:border-slate-900' onClick={(handleClick) => setClick(click + 1)}>
      Add to Cart</button></a>
      </div>
      )
}