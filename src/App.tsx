import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ShoppingCartProvider } from './hooks/context'

function App() {
  return (
    <ShoppingCartProvider>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart isOpen={true} />} />
      </Routes>
      </ShoppingCartProvider>
      );
    }

export default App