import { StoreItem } from "./hooks/StoreItem"
import  storeItems  from "./data/items.json"
import { Link } from "react-router-dom"
import  { ShoppingCart } from './pages/ShoppingCart'

export function Store() {
  return (
    <>
                {storeItems.map(item => (
                  <div key={item.id}>
                  <div className=""><body className="grid  gap-5 bg-gray-400 fixed">
                      <ShoppingCart/>
        <nav className="flex  justify-center pt-2 bg-gray-300 h-12 w-full sm:">
        <div className="text-lg items-center text-gray-500">
       <Link to="/" className="mr-20 hover:text-gray-900">
         Home
       </Link>
       <Link to="/store" className="mr-20 hover:text-gray-900">
         Store
       </Link> 
     <Link to="/about" className="hover:text-gray-900">
       About
     </Link>
     </div>
     </nav>
     <div className="flex pl-2 w-screen">
     <h1 className="text-4xl pt-5 text-gray-700">Cart</h1>
    </div>
     <div className="flex w-screen h-screen">
        <div className="flex w-screen h-20">
            <div className="flex w-screen bg-gray-500">
              <div className="pt-3">
              
              3
                <svg viewBox='0 0 25 40' className="w-10 h-10">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13
                 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
                 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7
                 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                </div>
                <div className="pl-2 justify-center w-20">
                <p className="text-zinc-100 ml-1 text-1xl">Item</p>
                <div className="flex h-10 w-96 rounded-xl border-2 border-gray-300">
                 <StoreItem {...item} />
                <div className="w-10 h-50 pt-1"></div>
                  <div className="w-80 "></div>
                </div>
                </div>
            </div>
        </div>
     </div>
        </body>
          </div>
      </div>
))}
</>
  )
}