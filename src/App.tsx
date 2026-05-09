/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Terminal, 
  ShieldAlert, 
  ExternalLink, 
  Cpu, 
  Network, 
  UserCircle, 
  Sword, 
  ShieldCheck,
  Github,
  Youtube,
  Square,
  Activity,
  Layers,
  Box
} from 'lucide-react';
import { channels, Channel } from './data/channels';

const CATEGORY_ICONS: Record<string, any> = {
  "General": Box,
  "Web Security": ShieldAlert,
  "Networking": Network,
  "Career": UserCircle,
  "Red Teaming": Sword,
  "Blue Teaming": ShieldCheck,
};

interface CardProps {
  channel: Channel;
  index: number;
  key?: any;
}

const Card = ({ channel, index }: CardProps) => {
  const Icon = CATEGORY_ICONS[channel.category] || Terminal;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      id={`channel-card-${channel.id}`}
      className="group relative bg-white border-2 border-zinc-950 p-6 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#18181b]"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 bg-zinc-950 flex items-center justify-center">
          <Icon size={20} className="text-white" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-zinc-950 px-2 py-1 leading-none">
          {channel.category}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-base font-black tracking-tighter uppercase mb-1 line-clamp-1">
          {channel.name}
        </h3>
        <div className="w-12 h-0.5 bg-zinc-950 mb-3" />
        <p className="text-xs text-zinc-500 line-clamp-2 h-8 font-medium leading-relaxed">
          {channel.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-zinc-950" />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">SEC_REF: {channel.id.toString().padStart(3, '0')}</span>
        </div>
        <a 
          href={channel.url} 
          target="_blank" 
          rel="noopener noreferrer"
          id={`link-${channel.id}`}
          className="group/link flex items-center gap-1 text-[10px] font-black text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 py-1 border border-zinc-950 transition-colors uppercase"
        >
          Access <ExternalLink size={10} />
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(channels.map(c => c.category)))];

  const filteredChannels = useMemo(() => {
    return channels.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                            c.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 flex flex-col font-sans border-[12px] border-zinc-950 overflow-x-hidden">
      {/* Header Section */}
      <header className="h-20 border-b-2 border-zinc-950 flex items-center justify-between px-8 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-zinc-950 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">Cyber_OS v.2.4</h1>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Security Repository Division</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex flex-col">
            <span className="text-zinc-500">Project Ref</span>
            <span>CYB-9942-HUB</span>
          </div>
          <div className="flex flex-col border-l border-zinc-200 pl-6">
            <span className="text-zinc-500">Node Status</span>
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-zinc-950 animate-pulse" /> SYNCHRONIZED</span>
          </div>
          <div className="flex flex-col border-l border-zinc-200 pl-6">
            <span className="text-zinc-500">Admin</span>
            <span>SYS_ROOT</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
        {/* Sidebar Parameters */}
        <section className="md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-zinc-950 flex flex-col bg-white p-6">
          <h2 className="text-xs font-bold uppercase mb-8 bg-zinc-950 text-white inline-block px-2 py-1 self-start tracking-widest">01 // Parameters</h2>
          
          <div className="space-y-10">
            <div>
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Filter Repository</label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      w-full text-left px-3 py-2 text-[11px] font-bold uppercase tracking-widest transition-all
                      ${selectedCategory === cat 
                        ? 'bg-zinc-950 text-white' 
                        : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950'
                      }
                    `}
                  >
                    {cat}
                  </button>
                )) as any}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Search Integrity</label>
              <div className="relative mt-2">
                <input 
                  id="search-input"
                  type="text"
                  placeholder="ID_QUERY..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-zinc-100 border-2 border-zinc-950 px-3 py-2 text-xs font-bold uppercase focus:outline-none focus:ring-0 placeholder:text-zinc-300"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 block">System Data</label>
              <ul className="space-y-3 text-[10px] font-bold uppercase tracking-vibe">
                <li className="flex justify-between">
                  <span className="text-zinc-400 font-medium">Nodes Total</span>
                  <span>{channels.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400 font-medium">Filtered</span>
                  <span>{filteredChannels.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400 font-medium">Sync Rate</span>
                  <span>100%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-10">
             <div className="p-4 bg-zinc-50 border border-zinc-200 italic font-medium text-[10px] text-zinc-500 leading-relaxed uppercase">
               Attention: Access to nodes is restricted to authorized personnel. Ensure encryption layers are active.
             </div>
          </div>
        </section>

        {/* Central Viewport/Repository */}
        <section className="md:col-span-9 bg-zinc-200 relative p-8 geometric-grid overflow-y-auto max-h-[calc(100vh-128px)] terminal-scroll">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-xs font-bold uppercase mb-2 bg-zinc-950 text-white inline-block px-2 py-1 self-start tracking-widest">02 // Repository</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Displaying localized node registry_alpha</p>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 uppercase">Scale 1:{filteredChannels.length * 10}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <AnimatePresence mode="popLayout">
              {filteredChannels.map((channel, idx) => (
                <Card key={channel.id} channel={channel} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {filteredChannels.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 h-full"
            >
              <div className="p-8 border-2 border-zinc-950 bg-white shadow-[8px_8px_0_0_#18181b] text-center max-w-sm">
                <ShieldAlert size={40} className="mx-auto mb-4" />
                <h3 className="text-sm font-black uppercase tracking-tighter mb-2">Null Result Exception</h3>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">The query ID "{search}" failed to correlate with existing parameters.</p>
              </div>
            </motion.div>
          )}

          {/* Decorative Background Elements */}
          <div className="fixed bottom-20 right-8 opacity-10 pointer-events-none select-none hidden lg:block">
            <div className="relative w-48 h-48 border border-zinc-950">
              <div className="absolute inset-0 border border-zinc-950 rotate-[15deg]"></div>
              <div className="absolute inset-0 border border-zinc-950 -rotate-[15deg] opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-zinc-950"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Bar */}
      <footer className="h-12 border-t-2 border-zinc-950 bg-zinc-950 text-white flex items-center justify-between px-8 text-[10px] font-mono tracking-widest">
        <div className="flex gap-8 items-center">
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-white" /> SYSTEM_LIVE: 100%</span>
          <span className="hidden sm:inline">LATENCY: 14MS</span>
          <span className="hidden sm:inline">GRID_ACTIVE</span>
        </div>
        <div>
          &copy;2026 CYBER_OS DESIGN SYSTEMS [STRUCTURAL DIVISION]
        </div>
      </footer>
    </div>
  );
}
