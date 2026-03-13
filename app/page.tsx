"use client";

import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { Play, Info, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const trending = [
    { title: "Shadow Alley", thumb: "/thumb1.png", tags: ["Crime", "Drama", "Noir"] },
    { title: "Red Horizon", thumb: "/thumb2.png", tags: ["Sci-Fi", "Action", "Epic"] },
    { title: "Masquerade", thumb: "/thumb3.png", tags: ["Mystery", "Romance", "Suspense"] },
    { title: "The Silent Forest", thumb: "/hero.png", tags: ["Survival", "Horror"] },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-blue-600/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
        <div className="absolute inset-0">
          <img 
            src="/hero.png" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 md:px-16 md:w-1/2 space-y-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase">Original Narrative</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none italic text-white shadow-blue-500/10 shadow-2xl">
              NEESIO: <br/> BEYOND
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg font-medium leading-relaxed mb-8">
              Experience the future of interactive storytelling. A world where your choices shape the narrative flow of every cinematic moment.
            </p>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-white/90 transition-all transform hover:scale-105">
                <Play className="fill-black w-5 h-5" />
                Play Now
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/50 backdrop-blur-md text-white font-bold rounded-md hover:bg-gray-500/30 transition-all">
                <Info size={24} />
                More Info
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Rows */}
      <div className="relative z-10 -mt-32 pb-20 space-y-12">
        <section className="px-6 md:px-16">
          <h2 className="text-xl font-bold mb-4 tracking-tight flex items-center gap-2">
            Trending Now <span className="w-8 h-[2px] bg-blue-600 rounded-full" />
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
            {trending.map((video, i) => (
              <VideoCard key={i} title={video.title} thumbnail={video.thumb} tags={video.tags} />
            ))}
            {trending.map((video, i) => (
              <VideoCard key={i + 10} title={video.title} thumbnail={video.thumb} tags={video.tags} />
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16">
          <h2 className="text-xl font-bold mb-4 tracking-tight flex items-center gap-2">
            Narrative Shorts <span className="w-8 h-[2px] bg-purple-600 rounded-full" />
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
            {trending.reverse().map((video, i) => (
              <VideoCard key={i} title={video.title} thumbnail={video.thumb} tags={video.tags} />
            ))}
          </div>
        </section>
      </div>
      
      <footer className="px-16 py-20 border-t border-white/10 flex flex-col items-center gap-6">
        <div className="flex gap-8 text-gray-500 text-sm font-medium">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">© 2026 NEESIO ENTERTAINMENT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
