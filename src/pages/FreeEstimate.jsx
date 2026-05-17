import { useState } from 'react'

const FreeEstimate = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [estimates, setEstimates] = useState(() => {
    const saved = localStorage.getItem('steveWattsEstimates')
    return saved ? JSON.parse(saved) : []
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEstimate = { ...form, id: Date.now(), fecha: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
    const updated = estimates.concat(newEstimate)
    setEstimates(updated)
    localStorage.setItem('steveWattsEstimates', JSON.stringify(updated))
    setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', mensaje: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="container">
      <section className="contact-section" style={{ marginTop: '80px' }}>
        <div className="contact-text">
          <span className="tagline">Contact Us</span>
          <h2>Start With a Free Estimate</h2>
          <p>No obligation, no pressure. Fill out the form and we'll get back to you within one business day to schedule your free roof inspection.</p>
          <ul className="contact-info">
            <li>📞 <a href="tel:+11234567890">+1 (123) 456-7890</a></li>
            <li>✉️ <a href="mailto:stevencharles@gmail.com">stevencharles@gmail.com</a></li>
            <li>📍 City - State - Country</li>
            <li>🕐 Mon – Sat: 7:00 AM – 6:00 PM</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div style={{ background: '#d4edda', color: '#155724', padding: '12px 16px', borderRadius: '6px', fontWeight: '500' }}>
              ✅ Your request was submitted! We'll contact you within 24 hours.
            </div>
          )}
          <input id="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input id="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
          <input id="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <input id="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <select id="service" value={form.service} onChange={handleChange} required>
            <option value="" disabled>Select a service</option>
            <option value="Residential Roofing">Residential Roofing</option>
            <option value="Commercial Roofing">Commercial Roofing</option>
            <option value="Repair & Leak Detection">Repair & Leak Detection</option>
            <option value="Storm Damage Restoration">Storm Damage Restoration</option>
            <option value="Roof Inspections">Roof Inspections</option>
            <option value="Gutters & Ventilation">Gutters & Ventilation</option>
          </select>
          <textarea id="mensaje" rows="4" placeholder="Describe your project or concern..." value={form.mensaje} onChange={handleChange}></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
        </form>
      </section>

      <section style={{ margin: '60px 0' }}>
        <h3 style={{ marginBottom: '20px' }}>📋 Submitted Requests</h3>
        <div id="historialEstimates">
          {estimates.length === 0
            ? <p>No requests submitted yet.</p>
            : [...estimates].reverse().map(e => (
              <div key={e.id} className="historial-item">
                <div className="historial-header">
                  <strong>{e.firstName} {e.lastName}</strong>
                  <span className="historial-fecha">{e.fecha}</span>
                </div>
                <p className="historial-servicio">{e.service}</p>
                <p className="historial-mensaje">{e.email} · {e.phone}</p>
                <p className="historial-mensaje">"{e.mensaje}"</p>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default FreeEstimate