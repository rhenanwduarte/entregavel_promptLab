import { useState } from 'react';
import {
  Sparkles, Zap, Layers, Car, Gem, ShoppingBag,
  Coffee, Home, Cpu, Droplets, X, Menu, ChevronRight,
} from 'lucide-react';
import { categories } from './data';

const iconMap = {
  Sparkles, Zap, Layers, Car, Gem, ShoppingBag,
  Coffee, Home, Cpu, Droplets,
};

export default function Sidebar({ activeCategoryId, onSelect, isOpen, onClose }) {
  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex flex-col w-[260px] shrink-0 h-full bg-[#020617] border-r border-slate-800/60">
        <SidebarContent activeCategoryId={activeCategoryId} onSelect={onSelect} />
      </aside>

      {/* ── Mobile drawer ── */}
      {isOpen && (
        <>
          <div
            className="pp-sidebar-backdrop"
            onClick={onClose}
            aria-hidden="true"
          />
          <aside className="pp-sidebar-drawer flex flex-col bg-[#020617] border-r border-slate-800/60">
            <SidebarContent activeCategoryId={activeCategoryId} onSelect={(id) => { onSelect(id); onClose(); }} onClose={onClose} isMobile />
          </aside>
        </>
      )}
    </>
  );
}

function SidebarContent({ activeCategoryId, onSelect, onClose, isMobile }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-6 pt-7 pb-8">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
            <Sparkles size={14} className="text-cyan-400" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-slate-100 font-bold text-[15px] tracking-tight">PromptLab</span>
            <span className="text-[10px] text-cyan-400/70 tracking-widest uppercase font-medium">Promptpack</span>
          </div>
        </div>
        {isMobile && (
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300 transition-colors">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="mx-5 mb-4 h-px bg-slate-800/60" />

      {/* Nav label */}
      <p className="px-5 mb-2 text-[10px] tracking-[0.15em] uppercase font-semibold text-slate-600">
        Categories
      </p>

      {/* Category list */}
      <nav className="flex-1 overflow-y-auto pp-scroll px-3 space-y-0.5 pb-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? ChevronRight;
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`pp-nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left ${
                isActive ? 'pp-nav-active' : 'text-slate-400'
              }`}
            >
              <Icon size={15} className={isActive ? 'text-cyan-400' : 'text-slate-500'} strokeWidth={isActive ? 2 : 1.75} />
              {cat.label}
              {isActive && (
                <ChevronRight size={12} className="ml-auto text-cyan-400/60" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mx-5 mb-5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
        <p className="text-[11px] text-slate-500 leading-relaxed">
          <span className="text-slate-300 font-medium">Promptpack v1.0</span>
          <br />Premium AI image prompts for e-commerce.
        </p>
      </div>
    </div>
  );
}

export function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all"
    >
      <Menu size={18} />
    </button>
  );
}
