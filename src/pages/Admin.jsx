import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ADMIN_PASSWORD = 'admin'

const Admin = ({ onLogin }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setSuccess(true)
      onLogin()
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <main className="container" style={{ maxWidth: '420px', marginTop: '100px', marginBottom: '100px' }}>
      <span className="tagline">Restricted Area</span>
      <h2 style={{ marginBottom: '8px' }}>Admin Access</h2>
      <p style={{ marginBottom: '30px' }}>Enter your password to manage services, processes and reviews.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {error && (
          <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px 16px', borderRadius: '6px', fontWeight: '500' }}>
            ❌ Incorrect password. Try again.
          </div>
        )}
        {success && (
          <div style={{ background: '#d4edda', color: '#155724', padding: '12px 16px', borderRadius: '6px', fontWeight: '500' }}>
            ✅ Logged in! Redirecting...
          </div>
        )}
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
          Login
        </button>
      </form>
    </main>
  )
}

export default Admin