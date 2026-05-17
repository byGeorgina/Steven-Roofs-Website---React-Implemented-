import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:3001/estimates'

const FreeEstimate = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    mensaje: ''
  })
  const [estimates, setEstimates] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setEstimates(res.data))
      .catch(err => console.error('Error al cargar:', err))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
    setErrors({ ...errors, [e.target.id]: '' })
  }

  // PASO 6: validaciones
  const validate = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required.'
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!form.service) newErrors.service = 'Please select a service.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }

    const newEstimate = {
      ...form,
      fecha: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    axios.post(API_URL, newEstimate)
      .then(res => {
        setEstimates([...estimates, res.data])
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', mensaje: '' })
        setErrors({})
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
      })
      .catch(err => console.error('Error al guardar:', err))
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

          <div>
            <input id="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            {errors.firstName && <p style={{ color: 'red', fontSize: '0.8rem', margin: '4px 0 0' }}>{errors.firstName}</p>}
          </div>
          <div>
            <input id="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            {errors.lastName && <p style={{ color: 'red', fontSize: '0.8rem', margin: '4px 0 0' }}>{errors.lastName}</p>}
          </div>
          <div>
            <input id="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
            {errors.email && <p style={{ color: 'red', fontSize: '0.8rem', margin: '4px 0 0' }}>{errors.email}</p>}
          </div>
          <div>
            <input id="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            {errors.phone && <p style={{ color: 'red', fontSize: '0.8rem', margin: '4px 0 0' }}>{errors.phone}</p>}
          </div>
          <div>
            <select id="service" value={form.service} onChange={handleChange}>
              <option value="" disabled>Select a service</option>
              <option value="Residential Roofing">Residential Roofing</option>
              <option value="Commercial Roofing">Commercial Roofing</option>
              <option value="Repair & Leak Detection">Repair & Leak Detection</option>
              <option value="Storm Damage Restoration">Storm Damage Restoration</option>
              <option value="Roof Inspections">Roof Inspections</option>
              <option value="Gutters & Ventilation">Gutters & Ventilation</option>
            </select>
            {errors.service && <p style={{ color: 'red', fontSize: '0.8rem', margin: '4px 0 0' }}>{errors.service}</p>}
          </div>
          <textarea id="mensaje" rows="4" placeholder="Describe your project or concern..." value={form.mensaje} onChange={handleChange}></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
        </form>
      </section>

      <section style={{ margin: '60px 0' }}>
        <h3 style={{ marginBottom: '20px' }}>📋 Submitted Requests</h3>
        <div id="historialEstimates">
          {estimates.length === 0
            ? <p className="historial-vacio">No requests submitted yet.</p>
            : [...estimates].reverse().map(e => (
              <div key={e.id} className="historial-item">
                <div className="historial-header">
                  <strong>{e.firstName} {e.lastName}</strong>
                  <span className="historial-fecha">{e.fecha}</span>
                </div>
                <p className="historial-servicio">{e.service}</p>
                <p className="historial-contacto">{e.email} · {e.phone}</p>
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