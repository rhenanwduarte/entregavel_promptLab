import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUserAuthorization } from '../lib/supabase'
import { Shield, Lock } from 'lucide-react'

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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f1a]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-[24px] bg-[rgba(18,24,38,0.7)] backdrop-blur-xl border border-white/5 shadow-2xl mx-4">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Badge */}
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">Secure Access</span>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              PromptLab Access Gate
            </h1>
            <p className="text-[#8c94a3] text-sm mt-2">
              Authorized users only. Enter your purchase email.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 !mt-8">
            <div className="space-y-2 text-left">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 transition-all duration-300 hover:opacity-90 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5"
            >
              <div className="relative z-10 flex items-center justify-center text-sm font-semibold tracking-wide">
                {loading ? (
                  <span className="animate-pulse">Verifying...</span>
                ) : (
                  <>
                    <span>Enter System</span>
                    <Lock className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </div>
            </button>

            {/* Error Message */}
            {error && (
              <div className="p-3 mt-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-in fade-in slide-in-from-top-1 duration-300">
                {error}
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="pt-6 mt-2 border-t border-white/5 w-full flex items-center justify-center space-x-2 text-[#8c94a3] text-xs">
            <Lock className="w-3 h-3" />
            <span>Encrypted & Secure Verification</span>
          </div>

        </div>
      </div>
    </div>
  )
}