import { useState } from 'react';
import { Gamepad2, Trophy, Users } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow">
              <Gamepad2 size={20} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">PlayWithFriends Casino</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#games" className="text-slate-600 hover:text-slate-900 transition">Games</a>
            <a href="#how" className="text-slate-600 hover:text-slate-900 transition">How it works</a>
            <a href="#community" className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1">
              <Users size={16} /> Community
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#games" className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition">Start Playing</a>
          </div>

          <button aria-label="Menu" className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(v => !v)}>
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#games" className="px-3 py-2 rounded-lg hover:bg-slate-100">Games</a>
              <a href="#how" className="px-3 py-2 rounded-lg hover:bg-slate-100">How it works</a>
              <a href="#community" className="px-3 py-2 rounded-lg hover:bg-slate-100">Community</a>
              <a href="#games" className="px-3 py-2 rounded-lg bg-slate-900 text-white">Start Playing</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
