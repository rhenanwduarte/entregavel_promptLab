import React from 'react';
import * as Icons from 'lucide-react';

const ACCENT_HEX = {
  'text-cyan-300':    '#67e8f9',
  'text-emerald-300': '#6ee7b7',
  'text-violet-300':  '#c4b5fd',
  'text-slate-300':   '#cbd5e1',
  'text-amber-200':   '#fde68a',
  'text-rose-200':    '#fecdd3',
  'text-orange-200':  '#fed7aa',
  'text-stone-200':   '#e7e5e4',
  'text-blue-300':    '#93c5fd',
  'text-slate-200':   '#e2e8f0',
};

/**
 * Sidebar renders in two modes:
 * — Desktop (md+): always-visible left column
 * — Mobile (<md):  fixed off-canvas drawer, shown when `isOpen` is true
 *
 * Props:
 *  activeCategory  — currently selected category id
 *  setActiveCategory — setter
 *  categories      — ordered list of { id, label, icon }
 *  theme           — active categoryCoverTheme object
 *  isOpen          — controls mobile drawer visibility
 *  onClose         — called when the backdrop or close button is tapped
 */
const Sidebar = ({ activeCategory, setActiveCategory, categories, theme, isOpen, onClose }) => {
  const accentHex = ACCENT_HEX[theme?.accent] || '#67e8f9';

  const handleSelect = (id) => {
    setActiveCategory(id);
    onClose?.(); // close drawer on mobile after selection
  };

  const inner = (
    <aside
      className="
        w-[264px] bg-[#020617] border-r border-white/[0.05]
        flex flex-col h-full overflow-hidden
      "
    >
      {/* Logo */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transition-colors duration-500"
            style={{ background: accentHex, boxShadow: `0 0 18px ${accentHex}45` }}
          >
            <Icons.Zap className="text-black fill-current" size={16} />
          </div>
          <div>
            <h2 className="text-lg font-black text-white tracking-tighter leading-none">PromptLab</h2>
            <span
              className="text-[9px] font-bold tracking-[0.3em] uppercase transition-colors duration-500"
              style={{ color: accentHex }}
            >
              V 3.0 PRO
            </span>
          </div>
        </div>

        {/* Close button — only visible on mobile inside the drawer */}
        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors"
          aria-label="Close menu"
        >
          <Icons.X size={18} />
        </button>
      </div>

      <div className="mx-5 h-px bg-white/[0.05] mb-3" />

      <p className="px-6 text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-2">
        Core Modules
      </p>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto"
           style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}>
        {categories.map(category => {
          const IconComponent = Icons[category.icon] || Icons.Box;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => handleSelect(category.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200 relative overflow-hidden text-left
                ${isActive
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]'
                }
              `}
              style={isActive ? { background: `${accentHex}14` } : undefined}
            >
              {isActive && (
                <div
                  className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full"
                  style={{ background: accentHex, boxShadow: `0 0 8px ${accentHex}` }}
                />
              )}
              <IconComponent
                size={16}
                className="flex-shrink-0 transition-all duration-200"
                style={isActive ? { color: accentHex, filter: `drop-shadow(0 0 6px ${accentHex}80)` } : {}}
              />
              <span className="text-[13px] font-semibold tracking-tight truncate">
                {category.label}
              </span>
              {isActive && (
                <div
                  className="ml-auto h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: accentHex, boxShadow: `0 0 6px ${accentHex}` }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-5 pt-3">
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-60" />
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.25em]">
              System Active
            </span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-700 mt-1">
            <span>100 prompts</span>
            <span>10 categories</span>
          </div>
          <div className="h-[2px] w-full bg-white/[0.04] rounded-full overflow-hidden mt-2">
            <div
              className="h-full rounded-full"
              style={{
                width: '100%',
                background: `linear-gradient(to right, ${accentHex}50, ${accentHex})`,
                boxShadow: `0 0 8px ${accentHex}40`,
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ── Desktop: always-visible column ────────────────────────────── */}
      <div className="hidden md:flex flex-shrink-0 h-screen">
        {inner}
      </div>

      {/* ── Mobile: fixed drawer ───────────────────────────────────────── */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-[#020617]/75 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <div
            className="md:hidden fixed left-0 top-0 bottom-0 z-50 flex"
            style={{ animation: 'pp-slide-in 0.26s cubic-bezier(0.22,1,0.36,1)' }}
          >
            {inner}
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;