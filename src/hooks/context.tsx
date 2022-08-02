import { createContext, ReactNode, useState } from "react";

type CartContextProps = {
    children: ReactNode;
}


export function AddCart() {
    
const [ click, setClick ] = useState(0);


 const CartContext = createContext(click);

  const ContextProvider = ({ children }: CartContextProps) => {
    <CartContext.Provider value={{ click, setClick }}>{children}</CartContext.Provider>
 }

    
return(
<div className="pt-16">
      <a href="/cart" className="text-1xl text-slate-600 hover:text-stone-800">
      <button className='rounded-full p-1 border-2 border-slate-600 hover:border-slate-900'>
      Add to Cart</button></a>
      </div>
      )
}





/*<div className="pt-16">
      <a href="/cart" className="text-1xl text-slate-600 hover:text-stone-800"><button className='rounded-full p-1 border-2 border-slate-600 hover:border-slate-900'>Add to Cart</button></a>
      </div>*/