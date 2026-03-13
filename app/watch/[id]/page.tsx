"use client";

import InteractivePlayer from "@/components/InteractivePlayer";
import Navbar from "@/components/Navbar";
import { ChevronLeft, Share2, Info } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function WatchPage() {
  const { id } = useParams();
  const mockChoices = [
    { id: '1', timestamp: 10, text: 'Go into the basement', targetTime: 25 },
    { id: '2', timestamp: 10, text: 'Run out the back door', targetTime: 40 },
  ];
  const videoUrl = "https://pzpprfrzhfjtscsyzthn.supabase.co/storage/v1/object/public/videos/sample-narrative.mp4";

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main className="pt-24 px-6 md:px-16 space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <ChevronLeft /> Back to Narratives
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-sm font-bold border border-white/5">
              <Share2 size={16} /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-sm font-bold border border-white/5 text-blue-500">
              <Info size={16} /> Interactive Mode Active
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <InteractivePlayer videoUrl={videoUrl} choices={mockChoices} />
          <div className="mt-12 space-y-6">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">RED HORIZON: THE INITIATION</h1>
            <p className="text-zinc-400 text-lg max-w-4xl">
              Your decision will determine if the mission continues or ends in the Martian dust.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
