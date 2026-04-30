import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUserAuthorization } from '../lib/supabase'
import gsap from 'gsap'

export default function Access() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.1 }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setError('')

    const normalizedEmail = email.trim().toLowerCase()
    
    try {
      const isAuthorized = await checkUserAuthorization(normalizedEmail)
      if (isAuthorized) {
        localStorage.setItem('user_email', normalizedEmail)
        navigate('/app')
      } else {
        setError('E-mail não encontrado na base. Verifique sua compra.')
      }
    } catch (err) {
      setError('Erro de conexão segura. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden font-sans bg-black bg-[url('/fundo-mobile.webp')] lg:bg-[url('/fundo-desktop.webp')] bg-cover bg-center">
      {/* Minimalist Brutalist Login Card */}
      <div 
        ref={cardRef}
        className="relative z-10 w-full max-w-[400px] bg-black/40 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-zinc-800 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Portal de Acesso
            </h1>
            <p className="text-zinc-400 text-sm">
              Acesse usando o e-mail da compra.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 bg-zinc-950/50 border border-zinc-800 rounded-full text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-center text-base"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#3b82f6] hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? "Verificando..." : "Acessar Dashboard →"}
            </button>

            {error && (
              <div className="mt-4 flex justify-center w-full">
                <p className="text-[#ef4444] text-sm font-semibold text-center animate-pulse">
                  {error}
                </p>
              </div>
            )}
          </form>

          <div className="pt-6 border-t border-zinc-800 w-full">
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">
              PromptLab Secure Protocol
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}