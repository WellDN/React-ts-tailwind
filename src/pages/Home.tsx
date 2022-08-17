import { Outlet, Link } from 'react-router-dom'
import landscape from './assets/landscape.jpeg'
import landscape2 from './assets/landscape2.jpeg'
import landscape3 from './assets/landscape3.jpeg'
import landscape4 from './assets/landscape4.jpeg'
import storeItems from '../data/items.json'
import { HomeItem } from '../HomeItem'



export function Home() {
  return (
    <>
    {storeItems.map(item => (   //the map take the entire array
      
      <body className="grid gap-5 min-w-min bg-gray-200">
     <nav className="flex justify-center pt-2 bg-gray-300 h-12 w-full">
     <div className="text-lg items-center text-gray-500">
    <Link
     to="/" className="mr-20 hover:text-gray-900">
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
  <div className="flex pl-2 justify-center">
  <h1 className="text-7xl text-slate-400">Home<Outlet /></h1>
  </div>
  <section>
    <div className="pt-8">
  <div className="grid 16 gap-16 grid-cols-1 grid-rows-4 h-full w-full sm:grid-cols-2 sm:grid-rows-2">
    <div className="w-full">
    <img src={landscape} alt="idk" className="h-96 w-full"/>
      <div className="flex justify-center"><span className=""></span></div>
    <div className="flex h-50 w-full justify-center">
    <div className="pt-16">
    <HomeItem {...item}/>
      </div> 
    </div>
  </div>
  <div className="w-full h-44">
    <img src={landscape2} alt="idkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center">
      <Link to="/store" className="text-1xl text-slate-600 hover:text-stone-800"><button className='rounded-full pb-1 pr-2 pl-2 border-2 border-slate-600 hover:border-slate-900'>
        Add to Cart</button></Link>
      </div>
  </div>
  <div className="h-full w-full">
      <img src={landscape3} alt="idkkkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center">
      <Link to="/store" className="text-1xl text-slate-600 hover:text-stone-800"><button className='rounded-full pb-1 pr-2 pl-2 border-2 border-slate-600 hover:border-slate-900'>
        Add to Cart</button></Link>
  </div>
  </div>
  <div className="h-full w-full">
      <img src={landscape4} alt="idkkkkkk" className="h-96 w-full"/>
      <div className="flex justify-center"></div>
      <div className="flex pt-16 justify-center h-60 w-50">
        <Link to="/store" className="text-1xl text-slate-600 hover:text-stone-800"><button className='rounded-full pb-1 pr-2 pl-2 border-2 border-slate-600 hover:border-slate-900'>
        Add to Cart</button></Link>
  </div>
  </div>
  </div>
  </div>
  </section>
  </body> 
  ))}
</>
  )
}