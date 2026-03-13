"use client";

import Navbar from "@/components/Navbar";
import { Play, Plus, ThumbsUp, Share2, ChevronLeft, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SeriesDetail() {
  const episodes = [
    { id: 1, title: "The Awakening", duration: "45m", description: "In a world of silence, a voice is heard for the first time in centuries.", thumb: "/thumb1.png" },
    { id: 2, title: "Shattered Reality", duration: "52m", description: "The coordinates lead to an impossible discovery deep beneath the red sands.", thumb: "/thumb2.png" },
    { id: 3, title: "The Paradox", duration: "48m", description: "Time begins to loop as the crew realizes they are not alone in the sanctuary.", thumb: "/thumb3.png" },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      
      <main className="relative pt-20">
        <Link href="/" className="absolute top-24 left-6 md:left-16 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <ChevronLeft /> Back to Browse
        </Link>

        {/* Backdrop Hero */}
        <section className="relative h-[60vh] md:h-[70vh] w-full">
          <div className="absolute inset-0">
            <img 
              src="/thumb2.png" 
              alt="Backdrop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
          </div>
          
          <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 uppercase">RED HORIZON</h1>
              <div className="flex items-center gap-4 text-sm font-bold mb-6">
                <span className="text-green-500 italic">99% Match</span>
                <span className="text-gray-400">2026</span>
                <span className="px-2 py-0.5 bg-zinc-800 rounded">18+</span>
                <span className="text-gray-400">3 Seasons</span>
                <span className="px-1 border border-white/40 text-xs rounded-sm">ULTRA HD 4K</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-10 py-4 bg-white text-black font-black rounded-sm hover:bg-white/90 transition-all uppercase tracking-widest text-xs">
                  <Play className="fill-black w-4 h-4" />
                  Continue Watching
                </button>
                <button className="p-4 bg-zinc-800/80 backdrop-blur-md rounded-full hover:bg-zinc-700 transition-all border border-white/10">
                  <Plus size={20} />
                </button>
                <button className="p-4 bg-zinc-800/80 backdrop-blur-md rounded-full hover:bg-zinc-700 transition-all border border-white/10">
                  <ThumbsUp size={20} />
                </button>
                <button className="p-4 bg-zinc-800/80 backdrop-blur-md rounded-full hover:bg-zinc-700 transition-all border border-white/10">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Tabs area */}
        <div className="px-6 md:px-16 py-12 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Synopsis</h2>
              <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                In the year 2088, the first human outpost on Mars loses contact with Earth. Captain Elena Vance must lead a desperate mission to uncover the truth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold tracking-tight">Episodes</h2>
                <div className="text-sm font-bold text-gray-500">Season 1</div>
              </div>
              
              <div className="space-y-8">
                {episodes.map((ep) => (
                  <motion.div 
                    key={ep.id}
                    whileHover={{ x: 10 }}
                    className="flex flex-col md:flex-row gap-6 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="relative w-full md:w-60 h-32 rounded-lg overflow-hidden shrink-0">
                      <img src={ep.thumb} alt={ep.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold uppercase italic">{ep.title}</h3>
                      <p className="text-sm text-gray-500">{ep.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
