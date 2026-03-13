"use client";

import React from 'react';
import { Search, Bell, User, Menu, Play } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-12">
            <Play className="text-white fill-current w-4 h-4" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">NEESIO</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/series" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Series</Link>
          <Link href="/movies" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Narratives</Link>
          <Link href="/new" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">New & Popular</Link>
          <Link href="/mylist" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">My List</Link>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-white">
        <button className="hover:text-blue-500 transition-colors">
          <Search size={20} />
        </button>
        <button className="hover:text-blue-500 transition-colors">
          <Bell size={20} />
        </button>
        <Link href="/profile" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-transparent hover:border-white transition-all">
          <User size={18} />
        </Link>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
