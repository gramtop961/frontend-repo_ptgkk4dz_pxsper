import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PlayWithFriends Casino. Virtual chips only — for entertainment.</p>
          <div className="flex items-center gap-3 text-sm">
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50" href="#community"><Github size={16}/> Community</a>
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50" href="mailto:hello@example.com"><Mail size={16}/> Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
