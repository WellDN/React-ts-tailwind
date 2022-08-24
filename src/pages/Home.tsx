import { Outlet, Link } from 'react-router-dom'
import landscape from './assets/landscape.jpeg'
import landscape2 from './assets/landscape2.jpeg'
import landscape3 from './assets/landscape3.jpeg'
import landscape4 from './assets/landscape4.jpeg'
import { HomeItem } from '../HomeItem'
import { useShoppingCart } from '../hooks/context'


export function Home() {
  const { cartQuantity } = useShoppingCart()

  return (
    <body className="grid gap-5 min-w-min bg-white">
     <nav className="flex px-2  bg-gray-300 h-12">
     <div className="flex justify-center w-full text-lg text-gray-500">
     <div className="w-full justify-center flex"></div>
     <div className="pt-2">
    <Link
     to="/" className="pr-20 hover:text-gray-900">
       Sussy
    </Link>
    <Link to="/store" className="pr-20 hover:text-gray-900">
      Store
    </Link> 
  <Link to="/about" className="hover:text-gray-900">
       About
  </Link>
  </div>
  <div className="flex w-full justify-end">
    <div className="flex w-20 justify-end">
    <div className="w-5 pt-4">
  <Link to="/store" className="w-5">
  {cartQuantity > 0 && ( // change with the add cart button count
   <svg viewBox='0 0 20 20' className="">
     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13
    12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
    12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7
    0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
   </svg>
    //!!!!important  on the cartquantity is the transform to make a cart quantity absolute with the cart use as reference
    )}</Link></div>
    <div className="absolute translate-y-0 w-4">
    <div className="absolute translate-y-0 pointer-events-none">{cartQuantity}</div>
   </div>
   </div>
   </div>
  </div>
  </nav>
  <div className="flex px-2 justify-center">
  <h1 className="text-7xl text-slate-400">ZZZZ<Outlet /></h1>
  </div>
  <section>
    <div className="pt-8">
  <div className="grid 16 gap-16 grid-cols-1 grid-rows-4 h-full w-full sm:grid-cols-2 sm:grid-rows-2">
    <div className="w-full">
    <img src={landscape} alt="idk" className="h-96 w-full"/>
      <div className="flex justify-center"><span className=""></span></div>
    <div className="flex h-50 w-full justify-center">
    <div className="pt-16">
    <HomeItem id={1}/>
      </div> 
    </div>
  </div>
  <div className="w-full h-44">
    <img src={landscape2} alt="idkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center">
      <HomeItem id={2}/>
      </div>
  </div>
  <div className="h-full w-full">
      <img src={landscape3} alt="idkkkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center">
      <HomeItem id={3}/>
  </div>
  </div>
  <div className="h-full w-full">
      <img src={landscape4} alt="idkkkkkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center h-60 w-50">
      <HomeItem id={4}/>
  </div>
  </div>
  </div>
  </div>
  </section>
  </body>
  )
}


