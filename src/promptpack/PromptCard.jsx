import { useState, useCallback } from 'react';
import { Copy, Check, ImageIcon } from 'lucide-react';

/**
 * Parses prompt text and wraps [VARIABLE] tokens with a styled <span>.
 */
function PromptText({ text }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <span>
      {parts.map((part, i) =>
        /^\[.+\]$/.test(part) ? (
          <span key={i} className="pp-var">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function PromptCard({ card }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(card.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Fallback for non-secure contexts */
      const el = document.createElement('textarea');
      el.value = card.prompt;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [card.prompt]);

  return (
    <article className="pp-card flex flex-col bg-slate-900 border border-slate-800/70 rounded-2xl overflow-hidden">
      {/* Image placeholder */}
      <div className={`relative w-full aspect-video bg-gradient-to-br ${card.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgbW9kZT0ic2NyZWVuIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent" />
        {/* Center icon */}
        <div className="flex flex-col items-center gap-2 opacity-20">
          <ImageIcon size={32} className="text-white" strokeWidth={1} />
          <span className="text-white text-[10px] tracking-widest uppercase font-medium">Image Placeholder</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Title + Badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-slate-100 font-semibold text-[15px] leading-snug">{card.title}</h3>
          <span className="pp-badge shrink-0 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full px-2.5 py-1">
            {card.categoryId.replace(/-/g, ' ')}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/60" />

        {/* Prompt text */}
        <p className="text-slate-400 text-[13px] leading-relaxed flex-1">
          <PromptText text={card.prompt} />
        </p>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`pp-copy-btn mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium ${
            copied
              ? 'pp-copied'
              : 'border-slate-700 text-slate-400 bg-transparent'
          }`}
        >
          {copied ? (
            <>
              <Check size={15} strokeWidth={2.5} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={15} strokeWidth={1.75} />
              Copy Prompt
            </>
          )}
        </button>
      </div>
    </article>
  );
}
