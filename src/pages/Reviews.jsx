import { useState } from 'react'
import seedReviews from '../data/reviews.json'

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('steveWattsUserReviews')
    return saved ? JSON.parse(saved) : seedReviews
  })
  const [form, setForm] = useState({ nombre: '', ubicacion: '', estrellas: 0, mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.mensaje || !form.estrellas) {
      alert('Please fill in your name, a rating, and a message.')
      return
    }
    const newReview = { ...form, id: Date.now(), fecha: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
    const updated = reviews.concat(newReview)
    setReviews(updated)
    localStorage.setItem('steveWattsUserReviews', JSON.stringify(updated))
    setForm({ nombre: '', ubicacion: '', estrellas: 0, mensaje: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="container">
      <div className="grid-header" style={{ marginTop: '80px' }}>
        <span className="tagline">Reviews</span>
        <h2>What Our Clients Say</h2>
      </div>

      <section className="reviews-section" style={{ marginTop: '40px', marginBottom: '80px' }}>
        {seedReviews.map(review => (
          <div key={review.id} className="review-col">
            <p>"{review.mensaje}"</p>
            <div className="reviewer">
              <div className="avatar"></div>
              <div className="reviewer-info">
                <strong>{review.nombre}</strong>
                <span>{review.ubicacion} | {'★'.repeat(review.estrellas)}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <hr className="divider" />

      <section className="contact-section" style={{ marginBottom: '60px', marginTop: '60px' }}>
        <div className="contact-text">
          <span className="tagline">Share Your Experience</span>
          <h2>Leave a Review</h2>
          <p>Had work done by Steve Watts LLC? We'd love to hear from you.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div style={{ background: '#d4edda', color: '#155724', padding: '12px 16px', borderRadius: '6px', fontWeight: '500' }}>
              ✅ Thank you! Your review has been posted.
            </div>
          )}
          <input type="text" placeholder="Your Name" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} required />
          <input type="text" placeholder="City, State (optional)" value={form.ubicacion} onChange={e => setForm({ ...form, ubicacion: e.target.value })} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Rating</label>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  style={{ fontSize: '1.8rem', background: 'none', border: 'none', cursor: 'pointer', color: star <= (hovered || form.estrellas) ? '#f5a623' : '#ccc', padding: 0 }}
                  onClick={() => setForm({ ...form, estrellas: star })}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                >★</button>
              ))}
            </div>
          </div>

          <textarea rows="4" placeholder="Tell us about your experience..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} required></textarea>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Post Review</button>
        </form>
      </section>

      <section style={{ margin: '0 0 80px' }}>
        <h3 style={{ marginBottom: '20px' }}>💬 Community Reviews</h3>
        {[...reviews].reverse().map(r => (
          <div key={r.id} className="historial-item">
            <div className="historial-header">
              <strong>{r.nombre}{r.ubicacion ? ` · ${r.ubicacion}` : ''}</strong>
              <span className="historial-fecha">{r.fecha}</span>
            </div>
            <p className="historial-servicio">{'★'.repeat(r.estrellas)}{'☆'.repeat(5 - r.estrellas)}</p>
            <p className="historial-mensaje">"{r.mensaje}"</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Reviews