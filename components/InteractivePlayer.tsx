"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

interface Choice {
  id: string;
  timestamp: number;
  text: string;
  targetTime?: number;
  targetVideoId?: string;
}

interface InteractivePlayerProps {
  videoUrl: string;
  choices: Choice[];
}

export default function InteractivePlayer({ videoUrl, choices }: InteractivePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeChoices, setActiveChoices] = useState<Choice[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      const currentChoices = choices.filter(c => 
        video.currentTime >= c.timestamp && video.currentTime <= c.timestamp + 5
      );
      setActiveChoices(currentChoices);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [choices]);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleChoice = (choice: Choice) => {
    if (choice.targetTime !== undefined && videoRef.current) {
      videoRef.current.currentTime = choice.targetTime;
      videoRef.current.play();
      setIsPlaying(true);
      setActiveChoices([]);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden group shadow-2xl border border-white/5">
      <video ref={videoRef} src={videoUrl} className="w-full h-full object-cover" onClick={togglePlay} />
      <AnimatePresence>
        {activeChoices.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 text-white drop-shadow-lg">Your narrative choice...</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {activeChoices.map((choice) => (
                  <motion.button key={choice.id} whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }} whileTap={{ scale: 0.9 }} onClick={() => handleChoice(choice)} className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-xl hover:shadow-blue-500/40 transition-all">
                    {choice.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-6">
          <button onClick={togglePlay} className="text-white hover:text-blue-500 transition-colors">
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
          </button>
          <div className="flex-1 h-1 bg-white/20 rounded-full relative overflow-hidden">
            <div className="absolute h-full bg-blue-600 transition-all duration-100" style={{ width: `${(currentTime / (videoRef.current?.duration || 1)) * 100}%` }} />
          </div>
          <Volume2 size={20} className="text-white" />
          <Maximize size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}
