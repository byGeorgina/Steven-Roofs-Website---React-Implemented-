const steps = [
  { title: 'Initial Contact', description: 'Reach out by phone, email, or our online form. We respond within one business day to schedule your free inspection.' },
  { title: 'Free Roof Inspection', description: 'A certified inspector visits your property, documents existing conditions with photos, and identifies all areas of concern.' },
  { title: 'Written Estimate', description: 'You receive a detailed written estimate with material options, labor costs, and project timeline — no hidden fees, no pressure.' },
  { title: 'Project Scheduling', description: 'Once approved, we schedule your project and assign a dedicated project manager who keeps you updated from start to finish.' },
  { title: 'Installation & Cleanup', description: 'Our crew completes the work efficiently and professionally, then performs a full cleanup including magnetic nail sweep of the property.' },
  { title: 'Final Walkthrough', description: 'We walk the finished project with you, answer any questions, and provide your warranty documentation before we leave.' },
]

const Process = () => {
  return (
    <main className="container">
      <section style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="grid-header">
          <span className="tagline">Our Process</span>
          <h2>How It Works</h2>
          <p>From first call to final walkthrough, here is exactly what to expect when you work with Steve Watts LLC.</p>
        </div>

        <div className="features-right" style={{ marginTop: '40px' }}>
          {steps.map((step, index) => (
            <div key={step.title} className="feature-item">
              <div className="icon-box">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Process