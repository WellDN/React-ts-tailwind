import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      );
    }

export default App