import { Routes, Route } from 'react-router-dom'
import { Store } from './pages/Store'
import { About } from './pages/About'
import App from './App'

export function Rout (){
    return (
    <>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/store" element={<Store />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </>
    )
    }