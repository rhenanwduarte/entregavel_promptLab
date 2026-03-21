import React, { useState } from 'react';
import { PROMPTS_DATA } from '../data/prompts';
import Sidebar from './Sidebar';
import PromptCard from './PromptCard';
import { Search, Terminal, Cpu } from 'lucide-react';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('cos');
  const [searchTerm, setSearchTerm] = useState('');
  // 🔥 GERADOR DINÂMICO A PARTIR DO PROMPTS_DATA
  const categories = PROMPTS_DATA.map(category => ({
    id: category.category_id,
    label: category.category_name,
    icon: "Box" // default icon
  }));
  const prompts = PROMPTS_DATA.flatMap(category =>
    category.prompts.map(prompt => ({
      ...prompt,
      categoryId: category.category_id
    }))
  );

  const filteredPrompts = prompts.filter(p =>
    p.categoryId === activeCategory &&
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const category = categories.find(c => c.id === activeCategory);

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans relative">

      {/* Camadas de GLOW Atmosférico */}
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 bg-grid-white/[0.02]">

        {/* Header Tech */}
        <header className="h-28 flex items-center justify-between px-12 border-b border-white/5 bg-[#020617]/40 backdrop-blur-2xl">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 animate-pulse" />
              <div className="relative p-4 bg-[#0f172a] border border-cyan-500/30 rounded-2xl">
                <Cpu className="text-cyan-400" size={28} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-black text-white tracking-tighter italic uppercase">{category?.label}</h1>
                <div className="h-2 w-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
              </div>
              <p className="text-[10px] text-cyan-500/60 font-black tracking-[0.4em] uppercase mt-1">Neural Engine Prompt Data</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 bg-black/20 border border-white/5 px-6 py-3 rounded-2xl">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Status</p>
              <p className="text-xs font-black text-emerald-400 uppercase">Synchronized</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Database</p>
              <p className="text-xs font-black text-white uppercase">{filteredPrompts.length} Units</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative">
          <div className="max-w-7xl mx-auto">

            {/* Search Lab Style */}
            <div className="relative mb-20 max-w-3xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur opacity-25 group-focus-within:opacity-100 transition duration-1000" />
              <div className="relative flex items-center bg-[#0f172a]/80 border border-white/10 rounded-2xl">
                <Search className="ml-6 text-slate-500" size={22} />
                <input
                  type="text"
                  placeholder={`Accessing ${category?.label} database...`}
                  className="w-full bg-transparent py-6 px-6 text-xl focus:outline-none text-white placeholder:text-slate-700 font-light"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="mr-6 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] font-mono text-slate-500">
                  CTRL + K
                </div>
              </div>
            </div>

            {/* Grid com animação suave */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
              {filteredPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;