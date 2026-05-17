import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul id="navbar">
        <li><Link to="/"><img id="logo" src="/images/LogoSteveWatts.png" alt="Steve Watts logo" /></Link></li>
        <li><Link to="/services">SERVICE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/process">PROCESS</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/estimate">FREE ESTIMATE</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar