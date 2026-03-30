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
      setError('Email not found. If you just purchased, wait a few seconds and try again.')
    }

    setLoading(false)
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(59,130,246,0.15), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(139,92,246,0.15), transparent 40%),
          #0b0f1a
        `
      }}
    >
      <style>
        {`
          @keyframes custom-fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-custom-fade {
            animation: custom-fade-in 0.6s ease-out forwards;
          }
        `}
      </style>

      <div className="w-full max-w-[420px] rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/5 shadow-2xl p-8 sm:p-10 opacity-0 animate-custom-fade">
        <div className="flex flex-col items-center text-center space-y-6">
          
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Secure Access
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              PromptLab Access Gate
            </h1>
            <p className="text-[#8c94a3] text-sm leading-relaxed">
              Access your premium dashboard using your purchase email
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-5 pt-2">
            <div className="space-y-2 text-left">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#0f172a] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all duration-300"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:opacity-100 opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20 disabled:scale-100 disabled:opacity-50 flex items-center justify-center text-sm"
            >
              {loading ? "Verifying access..." : "Access Dashboard"}
            </button>

            {error && (
              <div className="mt-3 text-red-400 text-sm animate-custom-fade text-left">
                {error}
              </div>
            )}
          </form>

          <div className="pt-6 mt-4 border-t border-white/5 w-full text-center">
            <p className="text-xs text-white/70">
              Secure access powered by encrypted verification
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}