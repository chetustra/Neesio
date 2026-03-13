"use client";

import Navbar from "@/components/Navbar";
import { Check, Star, Zap, Crown, CreditCard, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const plans = [
    { id: "monthly", name: "Narrator", price: "$9.99", period: "/month", features: ["HD Streaming", "Interactive Mode"], icon: <Zap className="text-blue-500" /> },
    { id: "annual", name: "Director", price: "$99.99", period: "/year", features: ["4K Ultra HD", "Offline Access"], icon: <Crown className="text-yellow-500" />, popular: true },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <h1 className="text-6xl text-center font-black italic uppercase mb-16">Choose Your Journey</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {plans.map((p) => (
            <div key={p.id} className="p-8 bg-zinc-900 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-black italic uppercase">{p.name}</h3>
                <p className="text-4xl font-black mt-2">{p.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
