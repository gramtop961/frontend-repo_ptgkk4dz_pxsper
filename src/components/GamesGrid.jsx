import { useState } from 'react';
import { Cards, Users, Shield, Clock } from 'lucide-react';

export default function GamesGrid() {
  const [selected, setSelected] = useState(null);

  const games = [
    {
      id: 'blackjack',
      name: 'Blackjack',
      description: 'Race to 21 in a sleek, social table made for friendly rivalry.',
      colorFrom: 'from-emerald-500',
      colorTo: 'to-cyan-500',
      features: ['Up to 7 players', 'Auto-dealer', 'Side chat'],
      emoji: '🂡',
    },
    {
      id: 'poker',
      name: 'Poker (Texas Hold’em)',
      description: 'Bluff, bet, and battle your friends with virtual chips that never run out.',
      colorFrom: 'from-fuchsia-500',
      colorTo: 'to-rose-500',
      features: ['Up to 8 players', 'Hand history', 'Chip leaderboards'],
      emoji: '♠️',
    },
  ];

  return (
    <section id="games" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Choose your table</h2>
          <p className="mt-2 text-slate-600">Create a private room, share the link, and play together in real time — all with virtual chips.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {games.map(game => (
            <div key={game.id} className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className={`h-28 bg-gradient-to-br ${game.colorFrom} ${game.colorTo}`} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 text-white shadow">
                      <Cards size={18} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{game.name}</h3>
                  </div>
                  <span className="text-2xl" aria-hidden>{game.emoji}</span>
                </div>
                <p className="mt-2 text-slate-600">{game.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {game.features.map((f, idx) => (
                    <li key={idx} className="px-2 py-1 rounded-lg bg-slate-100 border border-slate-200">{f}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <button onClick={() => setSelected({ type: 'create', game: game.id })} className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">Create Room</button>
                  <button onClick={() => setSelected({ type: 'join', game: game.id })} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50 transition">Join Room</button>
                </div>
                {selected?.game === game.id && (
                  <InlineRoomForm type={selected.type} game={game.id} onClose={() => setSelected(null)} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div id="how" className="mt-16 grid gap-6 sm:grid-cols-3">
          <HowItem icon={<Shield className="text-emerald-600" size={18} />} title="Safe & friendly" desc="Virtual chips only. Play without risk while keeping the thrill." />
          <HowItem icon={<Users className="text-cyan-600" size={18} />} title="Private rooms" desc="Share an invite code with friends to sit at the same table." />
          <HowItem icon={<Clock className="text-fuchsia-600" size={18} />} title="Real-time flow" desc="Fast rounds and smooth animations keep everyone engaged." />
        </div>
      </div>
    </section>
  );
}

function InlineRoomForm({ type, game, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // In a future step, this will call the backend to create/join rooms.
    alert(`${type === 'create' ? 'Creating' : 'Joining'} ${game} room\nPlayer: ${data.name}\nRoom: ${data.room || 'New room'}`);
    onClose();
  }

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-3">
        <input
          required
          name="name"
          placeholder="Your name"
          className="sm:col-span-1 px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
        {type === 'join' && (
          <input
            required
            name="room"
            placeholder="Room code"
            className="sm:col-span-1 px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        )}
        <div className="flex items-center gap-2 sm:col-span-1">
          <button type="submit" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
            {type === 'create' ? 'Create' : 'Join'}
          </button>
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50 transition">Cancel</button>
        </div>
      </form>
      <p className="mt-2 text-xs text-slate-600">No money involved. Chips reset anytime. Perfect for game nights.</p>
    </div>
  );
}

function HowItem({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-slate-900 font-medium">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
