const services = [
  { title: 'Residential Roofing', description: 'New construction, reroof, and replacement for single-family homes and multi-unit properties. We work with asphalt shingles, metal, and tile.' },
  { title: 'Commercial Roofing', description: 'Flat and low-slope roofing systems for commercial buildings — TPO, EPDM, modified bitumen, and built-up roofing tailored to your structure.' },
  { title: 'Repair & Leak Detection', description: 'Fast diagnosis and reliable repair of leaks, storm damage, broken shingles, flashing failures, and clogged gutters before small problems become big ones.' },
  { title: 'Storm Damage Restoration', description: 'We work directly with insurance companies to make the claims process easy. Emergency tarping and board-up available 24/7 after severe weather events.' },
  { title: 'Roof Inspections', description: 'Detailed written reports for pre-purchase home inspections, insurance renewals, or general peace of mind. Infrared moisture scanning available.' },
  { title: 'Gutters & Ventilation', description: 'Seamless gutter installation, guards, downspout extensions, and attic ventilation systems that protect your roof from the inside out.' },
]

const Services = () => {
  return (
    <main className="container">
      <section className="side-features" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="features-left" style={{ position: 'sticky', top: '20px' }}>
          <span className="tagline">Services</span>
          <h2>Complete Roofing Solutions</h2>
          <p>From a minor leak to a full reroof, our certified team handles every project with the same attention to detail — protecting what matters most.</p>
        </div>

        <div className="features-right">
          {services.map(service => (
            <div key={service.title} className="feature-item">
              <div className="icon-box"></div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services