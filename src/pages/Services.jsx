import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3001'

const Services = ({ isAdmin }) => {
  const [services, setServices] = useState([])
  const [editing, setEditing] = useState(null)
  const [newService, setNewService] = useState({ title: '', description: '' })
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    axios.get(`${API_URL}/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err))
  }, [])

  const handleAdd = () => {
    if (!newService.title || !newService.description) return
    axios.post(`${API_URL}/services`, newService)
      .then(res => {
        setServices(services.concat(res.data))
        setNewService({ title: '', description: '' })
        setShowForm(false)
      })
  }

  const handleDelete = (id) => {
    if (!window.confirm('Delete this service?')) return
    axios.delete(`${API_URL}/services/${id}`)
      .then(() => setServices(services.filter(s => s.id !== id)))
  }

  const handleEdit = (service) => {
    setEditing({ ...service })
  }

  const handleSave = () => {
    axios.put(`${API_URL}/services/${editing.id}`, editing)
      .then(res => {
        setServices(services.map(s => s.id !== editing.id ? s : res.data))
        setEditing(null)
      })
  }

  return (
    <main className="container">
      <section className="side-features" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="features-left" style={{ position: 'sticky', top: '20px' }}>
          <span className="tagline">Services</span>
          <h2>Complete Roofing Solutions</h2>
          <p>From a minor leak to a full reroof, our certified team handles every project with the same attention to detail — protecting what matters most.</p>
          {isAdmin && (
            <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => setShowForm(!showForm)}>
              + Add Service
            </button>
          )}
        </div>

        <div className="features-right">
          {isAdmin && showForm && (
            <div className="historial-item">
              <input
                type="text"
                placeholder="Service title"
                value={newService.title}
                onChange={e => setNewService({ ...newService, title: e.target.value })}
                style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <textarea
                placeholder="Description"
                value={newService.description}
                onChange={e => setNewService({ ...newService, description: e.target.value })}
                rows="3"
                style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <button className="btn btn-primary" onClick={handleAdd}>Save</button>
              <button className="btn btn-secondary" style={{ marginLeft: '10px' }} onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          )}

          {services.map(service => (
            <div key={service.id} className="feature-item">
              <div className="icon-box"></div>
              <div style={{ flex: 1 }}>
                {editing && editing.id === service.id ? (
                  <>
                    <input
                      value={editing.title}
                      onChange={e => setEditing({ ...editing, title: e.target.value })}
                      style={{ width: '100%', padding: '6px', marginBottom: '6px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <textarea
                      value={editing.description}
                      onChange={e => setEditing({ ...editing, description: e.target.value })}
                      rows="3"
                      style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                      <button className="btn btn-primary" onClick={handleSave}>Save</button>
                      <button className="btn btn-secondary" onClick={() => setEditing(null)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {isAdmin && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                        <button className="btn btn-secondary" onClick={() => handleEdit(service)}>Edit</button>
                        <button className="btn btn-primary" style={{ background: '#c0392b', borderColor: '#c0392b' }} onClick={() => handleDelete(service.id)}>Delete</button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services