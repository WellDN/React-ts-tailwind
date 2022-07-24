import { Outlet, Link } from 'react-router-dom'

export function Home() {
    return (
     <body className="flex flex-col gap-4 fixed">
     <nav className="flex items-center pl-4 bg-gray-300 h-12 min-w-max">
     <div className="inline-flex h-full items-center">
    <Link to="/" className="mr-8">
     Home
    </Link>
    <Link to="/store" className="mr-8">
      Store
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
  <div className="grid gap-4 grid-cols-3 grid-rows-2 h-screen w-screen">
    </div>
  </section>
  </body>
)
}