"use client";

import Link from "next/link";
import { LayoutDashboard, Search, ExternalLink, ArrowLeft, ShieldCheck, Activity } from "lucide-react";

// --- LINK CORRETTO QUI ---
const myApps = [
  {
    name: "MINDHUB_DASHBOARD",
    url: "https://mindhub-vercel.vercel.app/",
    icon: LayoutDashboard,
    status: "ONLINE",
    desc: "Main Control Unit",
    color: "border-cyan-500/50 text-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
  },
  {
    name: "MONITOR_FINDER",
    url: "https://monitorfinder.it", // <-- URL CORRETTO
    icon: Search,
    status: "ACTIVE",
    desc: "Price Tracking Bot",
    color: "border-emerald-500/50 text-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
  },
];

export default function PrivateArea() {
  return (
    <div className="min-h-screen bg-black text-slate-300 p-6 flex flex-col items-center justify-center font-mono relative overflow-hidden">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-2xl relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <ShieldCheck size={16} />
              <span className="text-xs tracking-[0.3em]">RESTRICTED AREA</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tighter">
              SECRET_PROJECTS_HUB
            </h1>
          </div>
          <Link 
            href="/"
            className="text-xs hover:text-white transition-colors flex items-center gap-1 opacity-50 hover:opacity-100"
          >
            <ArrowLeft size={12} /> ABORT
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {myApps.map((app, idx) => (
            <a key={idx} href={app.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <div className={`h-full bg-slate-900/50 border backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 ${app.color}`}>
                <div className="flex justify-between items-start mb-6">
                  <app.icon className="h-8 w-8" />
                  <div className="flex items-center gap-1 text-[10px] border border-current px-2 py-0.5 rounded-full opacity-70">
                    <Activity size={8} className="animate-pulse"/> {app.status}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-1 tracking-wider">{app.name}</h3>
                <p className="text-xs opacity-60 uppercase">{app.desc}</p>
                
                <div className="mt-6 flex items-center text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  INITIALIZE_PROTOCOL <ExternalLink className="ml-2 w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center opacity-30 text-[10px]">
          <p>SESSION ID: {Math.floor(Math.random() * 999999)} // ENCRYPTED</p>
          <p className="mt-1">Luigi Copertino Systems © 2024</p>
        </div>

      </div>
    </div>
  );
}
