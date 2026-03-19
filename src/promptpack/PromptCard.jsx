import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const PromptCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-white/[0.02] border border-white/10 rounded-[32px] overflow-hidden hover:border-cyan-500/40 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.2)]">

      {/* Container da Imagem com Aspect Ratio fixo */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={prompt.image}
          alt={prompt.title}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-1 group-hover:text-cyan-400 transition-colors">
            {prompt.title}
          </h3>
          <span className="text-[10px] font-bold text-cyan-500/80 uppercase tracking-[0.2em]">High Fidelity Prompt</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <div className="relative bg-black/40 rounded-2xl p-5 border border-white/5 group-hover:border-cyan-500/20 transition-colors">
          <Terminal size={14} className="absolute top-4 right-4 text-slate-700" />
          <p className="text-slate-400 text-[13px] leading-relaxed font-mono line-clamp-3">
            {prompt.prompt}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 ${copied
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-black hover:bg-cyan-500 hover:text-white'
            }`}
        >
          {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
          {copied ? 'Copied to Clipboard' : 'Copy Master Prompt'}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;