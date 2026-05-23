import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3001'

const Process = ({ isAdmin }) => {
  const [steps, setSteps] = useState([])
  const [editing, setEditing] = useState(null)
  const [newStep, setNewStep] = useState({ title: '', description: '' })
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    axios.get(`${API_URL}/processes`)
      .then(res => setSteps(res.data))
      .catch(err => console.error(err))
  }, [])

  const handleAdd = () => {
    if (!newStep.title || !newStep.description) return
    axios.post(`${API_URL}/processes`, newStep)
      .then(res => {
        setSteps(steps.concat(res.data))
        setNewStep({ title: '', description: '' })
        setShowForm(false)
      })
  }

  const handleDelete = (id) => {
    if (!window.confirm('Delete this step?')) return
    axios.delete(`${API_URL}/processes/${id}`)
      .then(() => setSteps(steps.filter(s => s.id !== id)))
  }

  const handleEdit = (step) => setEditing({ ...step })

  const handleSave = () => {
    axios.put(`${API_URL}/processes/${editing.id}`, editing)
      .then(res => {
        setSteps(steps.map(s => s.id !== editing.id ? s : res.data))
        setEditing(null)
      })
  }

  return (
    <main className="container">
      <section className="grid-section" style={{ marginTop: '80px' }}>
        <div className="grid-header">
          <span className="tagline">Process</span>
          <h2>Simple. Transparent, Done Right.</h2>
          {isAdmin && (
            <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => setShowForm(!showForm)}>
              + Add Step
            </button>
          )}
        </div>

        {isAdmin && showForm && (
          <div className="historial-item" style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Step title"
              value={newStep.title}
              onChange={e => setNewStep({ ...newStep, title: e.target.value })}
              style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <textarea
              placeholder="Description"
              value={newStep.description}
              onChange={e => setNewStep({ ...newStep, description: e.target.value })}
              rows="3"
              style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button className="btn btn-primary" onClick={handleAdd}>Save</button>
            <button className="btn btn-secondary" style={{ marginLeft: '10px' }} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        )}

        <div className="grid-container">
          {steps.map((step, index) => (
            <div key={step.id} className="grid-item">
              <div className="icon-box">{index + 1}</div>
              <div style={{ flex: 1 }}>
                {editing && editing.id === step.id ? (
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
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    {isAdmin && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                        <button className="btn btn-secondary" onClick={() => handleEdit(step)}>Edit</button>
                        <button className="btn btn-primary" style={{ background: '#c0392b', borderColor: '#c0392b' }} onClick={() => handleDelete(step.id)}>Delete</button>
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

export default Process