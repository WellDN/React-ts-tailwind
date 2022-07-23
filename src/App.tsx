import { Route, Routes, Outlet } from 'react-router-dom'
import { Store } from './pages/Store'
import { About } from './pages/About'

function Home () {
  return (
    <body className="flex flex-col gap-4 fixed">
    <nav className="flex items-center pl-4 bg-gray-300 h-12 min-w-max">
    <div className="inline-flex h-full items-center">
    <a href="/" className="mr-8">
    Home
    </a>
    <a href="/store" className="mr-8">
    Store
    </a>
    <a href="/about" className="">
    About
</a>
</div>
</nav>
<div className="flex h-full w-full pl-2">
<h1 className="text-7xl">Home</h1>
</div>
<section>
<div className="grid gap-4 grid-cols-3 grid-rows-2 h-screen w-screen">
</div>
</section>
<Outlet />
</body>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
      <Route path="about" element={<About />}/>
      <Route element={<Home/>} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      </Route>
      </Routes>
      );
    }

      

export default App
