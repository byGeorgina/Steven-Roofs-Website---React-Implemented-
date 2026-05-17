const steps = [
  { id: 1, title: 'Free Inspection', description: "We visit your property, assess the roof's condition, take measurements, and identify any existing damage — at no cost to you." },
  { id: 2, title: 'Written Estimate', description: 'You receive a detailed, itemized quote within 48 hours. We walk you through every line item and answer all your questions before you sign.' },
  { id: 3, title: 'Installation Day', description: 'Our crew arrives on schedule, protects your property, and completes the work with minimal disruption. A project manager is on-site throughout.' },
  { id: 4, title: 'Final Walkthrough', description: 'We inspect the finished roof with you, clean up completely, and provide all warranty documentation before we consider the job done.' },
]

const Process = () => {
  return (
    <main className="container">
      <section className="grid-section" style={{ marginTop: '80px' }}>
        <div className="grid-header">
          <span className="tagline">Process</span>
          <h2>Simple. Transparent, Done Right.</h2>
        </div>

        <div className="grid-container">
          {steps.map(step => (
            <div key={step.id} className="grid-item">
              <div className="icon-box">{step.id}</div>
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