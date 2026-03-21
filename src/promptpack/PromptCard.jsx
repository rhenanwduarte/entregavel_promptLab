import React, { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

const gradientMap = {
  cos: "from-cyan-500/30 via-blue-600/20 to-indigo-950",
  sup: "from-emerald-500/30 via-lime-600/20 to-slate-950",
  brand: "from-purple-500/30 via-pink-600/20 to-black",
  auto: "from-red-500/30 via-orange-600/20 to-black",
  jewelry: "from-amber-400/30 via-yellow-500/20 to-neutral-950",
  fashion: "from-rose-400/30 via-fuchsia-600/20 to-black",
  food: "from-orange-400/30 via-red-600/20 to-neutral-950",
  home: "from-sky-400/30 via-indigo-600/20 to-slate-950",
  tech: "from-blue-500/30 via-cyan-600/20 to-black",
  universal: "from-slate-600/30 via-neutral-700/20 to-black"
}

const PromptCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const gradientClass = gradientMap[prompt.categoryId] || gradientMap.universal

  return (
    <div className="group relative bg-white/[0.02] border border-white/10 rounded-[32px] overflow-hidden hover:border-cyan-500/40 transition-all duration-700 hover:shadow-[0_0_70px_-15px_rgba(6,182,212,0.35)]">

      {/* COVER AREA */}
      <div
        className={`
          relative aspect-[16/10]
          bg-gradient-to-br ${gradientClass}
          bg-[length:200%_200%]
          animate-gradient-move
          flex items-end p-8 overflow-hidden
        `}
      >

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.15),transparent_60%)] mix-blend-overlay pointer-events-none" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.2\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\"/></svg>')"
          }}
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 pointer-events-none" />

        {/* Title Block */}
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-1 drop-shadow-lg">
            {prompt.title}
          </h3>
          <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-[0.25em]">
            High Fidelity Prompt
          </span>
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8 space-y-6">

        <div className="relative bg-black/40 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
          <Terminal size={14} className="absolute top-4 right-4 text-slate-700" />
          <p className="text-slate-400 text-[13px] leading-relaxed font-mono line-clamp-3">
            {prompt.prompt}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 ${copied
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-black hover:bg-cyan-500 hover:text-white'
            }`}
        >
          {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
          {copied ? 'Copied to Clipboard' : 'Copy Master Prompt'}
        </button>

      </div>
    </div>
  )
}

export default PromptCard