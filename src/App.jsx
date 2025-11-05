import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesGrid from './components/GamesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <GamesGrid />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold">Bring your friends. We’ll bring the vibes.</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Set the stakes, spin up a private table, and share your invite code. Perfect for remote game nights, clubs, or study breaks.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#games" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition shadow">Open a room</a>
              <a href="#how" className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
