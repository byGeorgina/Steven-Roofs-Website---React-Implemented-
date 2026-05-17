import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3><strong>Roofs Co.</strong></h3>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/estimate">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
        </div>
        <p>© 2026 Summit Roofing Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer