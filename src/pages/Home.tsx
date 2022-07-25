import { Outlet, Link } from 'react-router-dom'
import landscape from './assets/landscape.jpeg'
import landscape2 from './assets/landscape2.jpeg'
import landscape3 from './assets/landscape3.jpeg'
import landscape4 from './assets/landscape4.jpeg'

export function Home() {
    return (
     <body className="flex flex-col gap-4 bg-gray-300 sm:fixed">
     <nav className="flex items-center pl-7 bg-gray-400 h-12 min-w-max">
     <div className="text-lg inline-flex  items-center">
    <Link to="/" className=" mr-16">
     Home 
    </Link>
    <Link to="/cart" className="mr-16">
      Cart
    </Link> 
  <Link to="/about" className="">
       About
  </Link>
  </div>
  </nav>
  <div className="flex h-full w-full pl-2">
  <h1 className="text-7xl"><Outlet /></h1>
  </div>
  <section>
    <div className="pt-8">
  <div className="grid 16 gap-96 grid-cols-1 grid-rows-4 h-full w-full sm:grid-cols-2 sm:grid-rows-2">
  <div className="h-96 w-full">
      <img src={landscape} alt="idk" className=""/>
      <div className="flex h-96 w-96">
        Add to Cart
      </div>
  </div>
  <div className="flex h-96">
      <img src={landscape2} alt="idkk" className=""/>
  </div>
  <div className="flex h-96">
      <img src={landscape3} alt="idkkkk" className=""/>
  </div>
  <div className="flex h-96">
      <img src={landscape4} alt="idkkkkkk" className=""/>
  </div>
  </div>
  </div>
  </section>
  </body>
)
}