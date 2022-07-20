import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { Store } from './Store'
import { About } from './About'
import { Navbar } from './Navbar'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element={<Store />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}


export default App
