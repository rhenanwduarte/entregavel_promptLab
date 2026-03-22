import React, { useState, useCallback } from 'react';
import { promptCatalog } from '../data/promptCatalog';
import { categoryCoverThemes } from '../data/categoryCoverThemes.ts';
import Sidebar from './Sidebar';
import PromptCard from './PromptCard';
import { Search, Menu, Cpu } from 'lucide-react';

// ─── Category Metadata ────────────────────────────────────────────────────────
const CATEGORY_META = {
  cosmetics:     { label: 'Cosmetics',       icon: 'Sparkles'        },
  supplements:   { label: 'Supplements',     icon: 'FlaskConical'    },
  branding:      { label: 'Branding',        icon: 'Tag'             },
  automotive:    { label: 'Automotive',      icon: 'Car'             },
  jewelry:       { label: 'Jewelry',         icon: 'Gem'             },
  fashion:       { label: 'Fashion',         icon: 'Shirt'           },
  food_beverage: { label: 'Food & Beverage', icon: 'UtensilsCrossed' },
  home_decor:    { label: 'Home Décor',      icon: 'Home'            },
  tech:          { label: 'Tech',            icon: 'Cpu'             },
  universal:     { label: 'Universal',       icon: 'Globe'           },
};

const CATEGORIES = (() => {
  const seen = new Set();
  const result = [];
  for (const item of promptCatalog) {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      const meta = CATEGORY_META[item.category] || { label: item.category, icon: 'Box' };
      result.push({ id: item.category, label: meta.label, icon: meta.icon });
    }
  }
  return result;
})();

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('cosmetics');
  const [searchTerm,     setSearchTerm]     = useState('');
  const [sidebarOpen,    setSidebarOpen]    = useState(false);

  const theme        = categoryCoverThemes[activeCategory] || categoryCoverThemes.universal;
  const categoryMeta = CATEGORIES.find(c => c.id === activeCategory);

  const filteredPrompts = promptCatalog.filter(p =>
    p.category === activeCategory &&
    (searchTerm === '' ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.style_dna.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryChange = useCallback((id) => {
    setActiveCategory(id);
    setSearchTerm('');
  }, []);

  // Derive accent hex from theme for dynamic inline style
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
  const accentHex = ACCENT_HEX[theme?.accent] || '#67e8f9';

  return (
    <div className="flex h-[100dvh] bg-[#020617] text-slate-200 overflow-hidden font-sans relative">

      {/* ── Atmospheric Glow Layers ─────────────────────────────────────── */}
      <div className="fixed top-[-12%] right-[-8%] w-[55%] h-[55%] blur-[160px] rounded-full pointer-events-none z-0"
           style={{ background: `radial-gradient(circle, ${accentHex}0d, transparent 70%)` }} />
      <div className="fixed bottom-[-10%] left-[15%] w-[40%] h-[40%] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* ── Sidebar (desktop column / mobile drawer) ────────────────────── */}
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        categories={CATEGORIES}
        theme={theme}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header className="
          flex items-center gap-3 px-4 sm:px-6 md:px-10
          border-b border-white/[0.06]
          bg-[#020617]/60 backdrop-blur-2xl flex-shrink-0
          h-16 sm:h-20 md:h-[88px]
        ">
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="
              md:hidden flex-shrink-0
              p-2.5 rounded-xl
              text-slate-400 hover:text-white
              hover:bg-white/[0.06] active:bg-white/10
              transition-colors duration-150
            "
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Icon — hidden on smallest mobile to save space */}
          <div className="hidden sm:flex relative flex-shrink-0">
            <div
              className="absolute inset-0 blur-xl opacity-25 rounded-2xl"
              style={{ background: accentHex }}
            />
            <div className="relative p-3 bg-[#0d1526] border border-white/10 rounded-2xl">
              <Cpu size={18} className="text-slate-300" />
            </div>
          </div>

          {/* Title block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="
                text-xl sm:text-2xl md:text-3xl
                font-black text-white tracking-tighter italic uppercase truncate
              ">
                {categoryMeta?.label}
              </h1>
              <div
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: accentHex, boxShadow: `0 0 8px ${accentHex}` }}
              />
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-600 font-bold tracking-[0.35em] uppercase mt-0.5 hidden sm:block">
              Neural Engine · Prompt Database
            </p>
          </div>

          {/* Stats pill — desktop only */}
          <div className="hidden lg:flex items-center gap-6 bg-black/20 border border-white/[0.06] px-5 py-2.5 rounded-2xl flex-shrink-0">
            <div className="text-center">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Status</p>
              <p className="text-xs font-black text-emerald-400 uppercase mt-0.5">Synced</p>
            </div>
            <div className="w-px h-6 bg-white/[0.08]" />
            <div className="text-center">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Loaded</p>
              <p className="text-xs font-black text-white uppercase mt-0.5">{filteredPrompts.length}</p>
            </div>
            <div className="w-px h-6 bg-white/[0.08]" />
            <div className="text-center">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Categories</p>
              <p className="text-xs font-black text-white uppercase mt-0.5">{CATEGORIES.length}</p>
            </div>
          </div>

          {/* Compact count — tablet / small desktop */}
          <div className="lg:hidden flex items-center gap-2 bg-black/20 border border-white/[0.06] px-3 py-2 rounded-xl flex-shrink-0">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }}
            />
            <span className="text-[11px] font-black text-white">{filteredPrompts.length}</span>
          </div>
        </header>

        {/* ── Scrollable Area ─────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto relative"
             style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}>
          <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 max-w-[1480px] mx-auto">

            {/* ── Search ────────────────────────────────────────────────── */}
            <div className="relative mb-6 sm:mb-8 md:mb-10 w-full md:max-w-2xl">
              <div className="flex items-center bg-[#0d1526]/90 border border-white/[0.08] rounded-2xl
                              transition-all duration-200 focus-within:border-white/[0.18]">
                <Search className="ml-4 sm:ml-5 text-slate-600 flex-shrink-0" size={16} />
                <input
                  type="text"
                  placeholder={`Search in ${categoryMeta?.label}…`}
                  className="w-full bg-transparent py-3.5 sm:py-4 px-3 sm:px-4 text-sm sm:text-base
                             focus:outline-none text-white placeholder:text-slate-700 font-light"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mr-4 text-xs text-slate-600 hover:text-slate-300 transition-colors font-mono p-1"
                  >
                    ✕
                  </button>
                ) : (
                  <div className="mr-4 px-2 py-1 bg-white/[0.04] rounded-lg border border-white/[0.06]
                                  text-[10px] font-mono text-slate-600 flex-shrink-0">
                    {filteredPrompts.length}
                  </div>
                )}
              </div>
            </div>

            {/* ── Grid ──────────────────────────────────────────────────── */}
            {filteredPrompts.length > 0 ? (
              <div className="
                grid gap-5 sm:gap-6 md:gap-8
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
              ">
                {filteredPrompts.map(prompt => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    theme={theme}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 gap-4">
                <p className="text-slate-600 text-sm font-mono">// no results found</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors border border-white/10 px-4 py-2.5 rounded-xl"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* Bottom padding so last card doesn't hug the edge on mobile */}
            <div className="h-8 sm:h-10" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;