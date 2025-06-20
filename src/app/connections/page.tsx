'use client';
import { useEffect, useState } from 'react';
import { FiLinkedin } from 'react-icons/fi';

interface Connection {
  name: string;
  company: string;
  profileUrl: string;
  status: string;
  tags: string[];
  title: string;
}

export default function Connections() {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Connection | null>(null);
  const [left, setLeft] = useState('50%');

  useEffect(() => {
    fetch('/api/connections')
      .then(res => res.json())
      .then(data => setConnections(data.connections));
  }, []);

  useEffect(() => {
    setLeft(Math.random() * 100 + '%');
  }, []);

  const filtered = connections.filter(conn =>
    conn.name.toLowerCase().includes(search.toLowerCase()) ||
    conn.title.toLowerCase().includes(search.toLowerCase()) ||
    conn.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          People. Inspiration. Networking.
        </h1>
        <p className="mb-8 text-lg text-white/70">
          A curated list of interesting people I have ve met or hope to meet. Powered by Notion.
        </p>
        <input
          type="text"
          placeholder="Search by company, title, or position..."
          className="w-full max-w-xl mb-8 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/60 shadow-md"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(conn => (
            <div
              key={conn.name}
              className="relative group cursor-pointer"
              onClick={() => setSelected(conn)}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"
              />
              <div
                className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-white/10 h-full"
              >
                <h2 className="text-xl font-bold text-white mb-1">{conn.name}</h2>
                <p className="text-white/70 mb-1">{conn.title}</p>
                <a href={conn.profileUrl} className="text-pink-400 hover:underline" target="_blank" rel="noopener noreferrer">{conn.company}</a>
                <div className="mt-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${conn.status === 'Met' ? 'bg-green-600/20 text-green-400' : 'bg-blue-600/20 text-blue-400'}`}>
                    {conn.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {conn.tags.map(tag => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setSelected(null)}>
            <div
              className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-2xl p-10 max-w-md w-full shadow-2xl relative border border-pink-500/30"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-pink-400 text-2xl"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-3xl font-extrabold text-white mb-1 text-center">
                {selected.name}
              </h2>
              <p className="text-lg text-pink-400 font-semibold mb-2 text-center">{selected.title}</p>
              <a href={selected.profileUrl} className="block text-center text-white/80 hover:text-pink-400 mb-4 underline" target="_blank" rel="noopener noreferrer">
                {selected.company}
              </a>
              <div className="flex justify-center mb-4">
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${selected.status === 'Met' ? 'bg-green-600/20 text-green-400' : 'bg-blue-600/20 text-blue-400'}`}>{selected.status}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selected.tags.length > 0 ? selected.tags.map(tag => (
                  <span key={tag} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                )) : <span className="text-white/40 text-xs">No tags</span>}
              </div>
              <div className="flex justify-center">
                <a
                  href={selected.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl shadow-lg hover:from-pink-600 hover:to-purple-600 transition"
                  aria-label="View LinkedIn Profile"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
