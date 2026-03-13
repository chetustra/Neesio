"use client";

import React from 'react';
import { Play, Plus, ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration?: string;
  match?: string;
  tags?: string[];
}

export default function VideoCard({ title, thumbnail, duration, match, tags }: VideoCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="relative group min-w-[280px] h-40 bg-zinc-900 rounded-lg overflow-hidden cursor-pointer"
    >
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-full object-cover transition-opacity group-hover:opacity-30"
      />
      
      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 flex flex-col justify-end gap-3 transition-opacity">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Play className="fill-black text-black w-4 h-4 ml-0.5" />
          </button>
          <button className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white transition-colors">
            <Plus className="text-white w-4 h-4" />
          </button>
          <div className="flex-1" />
          <button className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white transition-colors">
            <ChevronDown className="text-white w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <span className="text-green-500">{match || "98% Match"}</span>
            <span className="px-1 border border-white/40 text-gray-400">16+</span>
            <span className="text-gray-400">{duration || "2h 15m"}</span>
            <span className="px-1 border border-white/40 text-gray-400 rounded-sm">4K</span>
          </div>
          <div className="flex gap-1 text-[8px] text-gray-300">
            {tags?.map((tag, i) => (
              <span key={i}>• {tag}</span>
            )) || ["• Cinematic", "• Thriller", "• Mystery"].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
