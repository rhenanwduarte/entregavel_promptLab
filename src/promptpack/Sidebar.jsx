import React from 'react';
import * as Icons from 'lucide-react';

const Sidebar = ({ activeCategory, setActiveCategory, categories }) => {
  return (
    <aside className="w-72 bg-[#020617] border-r border-white/5 flex flex-col relative z-20">
      {/* Logo Area com Glow */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:rotate-12 transition-transform">
            <Icons.Zap className="text-black fill-current" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-tighter leading-none">PromptLab</h2>
            <span className="text-[10px] text-cyan-500 font-bold tracking-[0.3em] uppercase">V 3.0 PRO</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Core Modules</p>

        {categories.map((category) => {
          const IconComponent = Icons[category.icon] || Icons.Box;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-500 group relative overflow-hidden ${isActive
                  ? 'bg-cyan-500/10 text-cyan-400 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
            >
              {/* Glow Indicator Lateral */}
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]" />
              )}

              <IconComponent
                size={20}
                className={`${isActive ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'group-hover:scale-110 transition-transform'}`}
              />
              <span className="text-sm font-bold tracking-tight">{category.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Status */}
      <div className="p-6">
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Active</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;