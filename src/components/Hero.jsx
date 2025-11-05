import { Trophy, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-xs">
                <Shield size={14} /> Virtual chips only — play with friends safely
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Casino nights, reimagined for your crew
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Host private tables for Blackjack and Poker. Invite friends, chat, and compete — all with playful, virtual chips.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#games" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">
                  Start a table
                </a>
                <a href="#how" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition">
                  How it works
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Users size={16} /> Up to 8 friends</div>
                <div className="flex items-center gap-2"><Trophy size={16} /> Leaderboards</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/50 via-cyan-200/40 to-fuchsia-200/40 blur-3xl rounded-3xl" aria-hidden="true" />
              <div className="relative rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-2">🃏</div>
                    <p className="text-white/90 font-medium">Blackjack + Poker</p>
                    <p className="text-white/70 text-sm">Private tables • Virtual chips • Real-time vibe</p>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-3 gap-3 text-sm">
                  <Stat label="Tables open" value="24" />
                  <Stat label="Players online" value="132" />
                  <Stat label="Avg. session" value="18m" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
      <div className="text-xl font-semibold text-slate-900">{value}</div>
      <div className="text-slate-600 text-xs">{label}</div>
    </div>
  );
}
