import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ShoppingCartProvider } from './hooks/context'
import { Store } from './Store'

function App() {
  return (
    <ShoppingCartProvider>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={<h1>Home</h1>} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </ShoppingCartProvider>
      );
    }

export default App