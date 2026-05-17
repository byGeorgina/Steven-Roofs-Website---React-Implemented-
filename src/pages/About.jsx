const About = () => {
  return (
    <main className="container">
      <section className="split-section" style={{ marginTop: '80px' }}>
        <div className="split-image">
          <img src="/images/roof1.jpg" alt="Asphalt Shingle Roof" className="placeholder-img square-img" />
        </div>
        <div className="split-text">
          <span className="tagline">About Us</span>
          <h2>Craftsmanship You Can Count On</h2>
          <p>We've been protecting homes and businesses across the Southwest since 2003. Every crew member is factory-trained, every project is backed by both a manufacturer's warranty and our own 5-year workmanship guarantee.</p>

          <ul className="contact-info" style={{ textAlign: 'left', paddingLeft: '0' }}>
            <li>• Licensed, bonded, and fully insured in all operating states</li>
            <li>• Certified installers for GAF, Owens Corning, and CertainTeed systems</li>
            <li>• Transparent pricing — written estimates with no hidden fees</li>
            <li>• Dedicated project manager for every job from start to cleanup</li>
            <li>• Drone inspections for safe, detailed pre-project assessments</li>
            <li>• Financing options available for qualifying homeowners</li>
          </ul>

          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div><strong>5-Year</strong><br /><span style={{ fontSize: '0.8rem' }}>Workmanship Warranty</span></div>
            <div><strong>A+ Rating</strong><br /><span style={{ fontSize: '0.8rem' }}>Better Business Bureau</span></div>
            <div><strong>48 Hr</strong><br /><span style={{ fontSize: '0.8rem' }}>Average turnaround</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About