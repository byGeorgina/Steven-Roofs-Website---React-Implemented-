import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Process from './pages/Process'
import Reviews from './pages/Reviews'
import FreeEstimate from './pages/FreeEstimate'
import Admin from './pages/Admin'
import './index.css'

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <BrowserRouter>
      <Navbar isAdmin={isAdmin} onLogout={() => setIsAdmin(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services isAdmin={isAdmin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process isAdmin={isAdmin} />} />
        <Route path="/reviews" element={<Reviews isAdmin={isAdmin} />} />
        <Route path="/estimate" element={<FreeEstimate isAdmin={isAdmin} />} />
        <Route path="/admin" element={<Admin onLogin={() => setIsAdmin(true)} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App