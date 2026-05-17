import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Process from './pages/Process'
import Reviews from './pages/Reviews'
import FreeEstimate from './pages/FreeEstimate'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/estimate" element={<FreeEstimate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App