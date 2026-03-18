import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import Sidebar, { MobileMenuButton } from './Sidebar';
import PromptCard from './PromptCard';
import { categories, prompts } from './data';
import './promptpack.css';

export default function Dashboard() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeCategory = categories.find((c) => c.id === activeCategoryId);

  const filteredPrompts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return prompts.filter((p) => {
      const matchesCategory = p.categoryId === activeCategoryId;
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q))
      );
    });
  }, [activeCategoryId, searchQuery]);

  return (
    <div className="pp-root flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeCategoryId={activeCategoryId}
        onSelect={(id) => { setActiveCategoryId(id); setSearchQuery(''); }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top bar */}
        <header className="shrink-0 flex items-center gap-4 px-6 py-4 border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-sm">
          <MobileMenuButton onClick={() => setSidebarOpen(true)} />

          {/* Breadcrumb / title */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] tracking-[0.15em] uppercase font-semibold text-slate-600 mb-0.5">
              Promptpack
            </p>
            <h1 className="text-slate-100 font-bold text-[17px] leading-none truncate">
              {activeCategory?.label}
            </h1>
          </div>

          {/* Prompt count badge */}
          <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-400">
            <Sparkles size={11} className="text-cyan-400" />
            {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''}
          </span>
        </header>

        {/* Search + filter bar */}
        <div className="shrink-0 px-6 py-4 border-b border-slate-800/40 bg-[#020617]/60">
          <div className="relative max-w-md">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeCategory?.label} prompts…`}
              className="pp-search w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm rounded-xl pl-9 pr-4 py-2.5 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors text-sm font-medium"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Prompt grid */}
        <div className="flex-1 overflow-y-auto pp-scroll px-6 py-6">
          {filteredPrompts.length > 0 ? (
            <div className="pp-grid">
              {filteredPrompts.map((card) => (
                <PromptCard key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <EmptyState query={searchQuery} category={activeCategory?.label} />
          )}
        </div>
      </main>
    </div>
  );
}

function EmptyState({ query, category }) {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-16 gap-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center pp-empty-pulse">
        <Search size={22} className="text-slate-600" />
      </div>
      <div>
        <p className="text-slate-300 font-semibold text-[15px]">No prompts found</p>
        <p className="text-slate-500 text-sm mt-1">
          {query
            ? `No results for "${query}" in ${category}`
            : `No prompts available in ${category}`}
        </p>
      </div>
      <button
        onClick={() => {}}
        className="mt-2 text-cyan-400 text-sm font-medium hover:underline"
      >
        Clear search
      </button>
    </div>
  );
}
