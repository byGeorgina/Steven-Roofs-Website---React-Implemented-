import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div id="caca">
        <h1 id="imgae">STEVE WATTS LLC</h1>
      </div>

      <main className="container">
        <section className="hero-section">
          <span className="tagline">STEVE WATTS LLC</span>
          <h1>Build to Last</h1>
          <p className="hero-text">Roofing delivers expert installation, repair, and replacement services across the Southwest — backed by decades of craftsmanship and a guarantee you can trust.</p>

          <ul className="contact-info" style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontWeight: '500', paddingBottom: '20px' }}>
            <li>20 years in business</li>
            <li>100+ Roofs installed</li>
            <li>5 ★ Average Rating</li>
          </ul>

          <div className="button-group">
            <Link to="/estimate" className="btn btn-primary">Free Estimate</Link>
          </div>

          <div className="hero-image-wrapper">
            <img id="storm" src="/images/heavystorm.jpg" alt="stormy roof" className="placeholder-img" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home