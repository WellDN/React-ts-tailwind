import { createContext } from "react";

type FullName = {
    id: 1;
    item: string;
}

const tcContext {
    
}

export function useContext(_props: FullName) {
   return <div className="pt-16">
      <a href="/cart" className="text-1xl text-slate-600 hover:text-stone-800"><button className='rounded-full p-1 border-2 border-slate-600 hover:border-slate-900'>Add to Cart</button></a>
      </div>
}