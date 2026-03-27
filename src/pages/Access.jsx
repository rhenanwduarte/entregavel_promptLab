import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUserAuthorization } from '../lib/supabase'

export default function Access() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setError('')

    const normalizedEmail = email.trim().toLowerCase()
    const isAuthorized = await checkUserAuthorization(normalizedEmail)

    if (isAuthorized) {
      localStorage.setItem('user_email', normalizedEmail)
      navigate('/app')
    } else {
      setError('Access not authorized')
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>Access PromptLab</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 10, width: 250 }}
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Enter'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}