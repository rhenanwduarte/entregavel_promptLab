import React, { useState } from 'react'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const PromptCard = ({ prompt, theme }) => {
  const [copied,   setCopied]   = useState(false)
  const [expanded, setExpanded] = useState(false)

  const t = theme || {
    name:   'Neutral',
    base:   'from-slate-400/20 via-slate-600/12 to-zinc-950',
    glow:   'shadow-slate-400/12',
    accent: 'text-slate-200',
    border: 'border-slate-300/20',
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <article
      className={`
        group relative flex flex-col
        bg-[#080f1e] border ${t.border}
        rounded-[24px] sm:rounded-[28px] overflow-hidden
        transition-all duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-2xl hover:${t.glow}
      `}
    >

      {/* ── COVER ──────────────────────────────────────────────────────────── */}
      <div
        className={`
          relative bg-gradient-to-br ${t.base}
          flex items-end overflow-hidden flex-shrink-0
          aspect-[16/9] sm:aspect-[16/9]
          p-5 sm:p-7
        `}
      >
        {/* Radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.12),transparent_65%)] mix-blend-overlay pointer-events-none" />

        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.055] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#080f1e]/80 to-transparent pointer-events-none" />

        {/* Cover bottom content */}
        <div className="relative z-10 w-full">
          <h3 className="text-xl sm:text-[1.45rem] font-black text-white tracking-tighter leading-tight mb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {prompt.title}
          </h3>
          <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] ${t.accent}`}>
            Prompt de Alta Fidelidade
          </span>
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 sm:p-6 gap-4 sm:gap-5">

        {/* Style DNA badges */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {prompt.style_dna.split('•').map(tag => tag.trim()).filter(Boolean).map(tag => (
            <span
              key={tag}
              className={`
                text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em]
                px-2 py-0.5 sm:px-2.5 sm:py-1
                rounded-lg bg-white/[0.04] border border-white/[0.07]
                ${t.accent}
              `}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image direction */}
        <p className="text-slate-600 text-[10px] sm:text-[11px] italic leading-relaxed border-l-2 border-white/[0.07] pl-3">
          {prompt.image_direction}
        </p>

        {/* Prompt preview / expanded */}
        <div className="relative bg-black/30 rounded-2xl p-3.5 sm:p-4 border border-white/[0.05] flex-1 min-h-0">
          <p
            className={`
              text-slate-400 text-[11.5px] sm:text-[12.5px] leading-relaxed font-mono
              transition-all duration-300
              ${expanded ? '' : 'line-clamp-4'}
            `}
          >
            {prompt.prompt}
          </p>
          {!expanded && (
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl pointer-events-none" />
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-slate-300 active:text-slate-200 transition-colors self-start py-1"
        >
          {expanded
            ? <><ChevronUp size={11} /> Recolher</>
            : <><ChevronDown size={11} /> Ver Prompt Completo</>
          }
        </button>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`
            w-full py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em]
            flex items-center justify-center gap-2.5
            border transition-all duration-300
            min-h-[48px]
            ${copied
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
              : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-[0.98]'
            }
          `}
        >
          {copied
            ? <><Check size={13} strokeWidth={3} /> Copiado!</>
            : <><Copy size={13} /> Copiar Prompt Mestre</>
          }
        </button>

      </div>
    </article>
  )
}

export default PromptCard