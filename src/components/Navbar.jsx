import { Link } from 'react-router-dom'

const Navbar = ({ isAdmin, onLogout }) => {
  return (
    <nav>
      <ul id="navbar">
        <li><Link to="/"><img id="logo" src="/images/LogoSteveWatts.png" alt="Steve Watts logo" /></Link></li>
        <li><Link to="/services">SERVICE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/process">PROCESS</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/estimate">FREE ESTIMATE</Link></li>
        {isAdmin
          ? <li><button onClick={onLogout} style={{ background: 'none', border: '1px solid #1d6394', color: '#1d6394', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}>Logout Admin</button></li>
          : <li><Link to="/admin" style={{ fontSize: '0.75rem', color: '#999' }}>Admin</Link></li>
        }
      </ul>
    </nav>
  )
}

export default Navbar