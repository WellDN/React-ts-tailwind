import { Route, Routes } from 'react-router-dom'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/" element={<h1>Home</h1>} />
      <Route path="about" element={<About />} />
      <Route path="/store" element={<Store />} />
      
      </Route>
      </Routes>
      );
    }

      

export default App
