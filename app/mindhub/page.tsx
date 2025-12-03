"use client";

import Link from "next/link";
import { LayoutDashboard, Search, ExternalLink, ArrowLeft, Lock } from "lucide-react";

// LE TUE APP SEGRETE
const myApps = [
  {
    name: "MindHub Dashboard",
    url: "https://mindhub-vercel.vercel.app/",
    icon: LayoutDashboard,
    desc: "Mission Control Center",
    color: "bg-indigo-50 border-indigo-200 text-indigo-900"
  },
  {
    name: "MonitorFinder",
    url: "#", // <--- Inserisci qui l'URL reale se ce l'hai
    icon: Search,
    desc: "Tracking Prezzi & Disponibilità",
    color: "bg-emerald-50 border-emerald-200 text-emerald-900"
  },
];

export default function MindHubLauncher() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center justify-center font-sans text-slate-200">
      
      {/* Header Scuro */}
      <div className="w-full max-w-xl mb-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400"/>
            <h1 className="text-xl font-bold tracking-wider text-white">SECRET PROJECTS</h1>
        </div>
        <Link 
          href="/"
          className="text-xs font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          Exit
        </Link>
      </div>

      {/* Grid Carte */}
      <div className="grid gap-6 w-full max-w-xl sm:grid-cols-2">
        {myApps.map((app, idx) => (
          <a key={idx} href={app.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:bg-slate-800 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${app.color}`}>
                    <app.icon className="h-6 w-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{app.name}</h3>
              <p className="text-sm font-medium text-slate-400">{app.desc}</p>
            </div>
          </a>
        ))}
      </div>
      
      <p className="mt-16 text-slate-700 text-[10px] uppercase tracking-[0.2em]">
        Authorized Personnel Only • ID: LC-8821
      </p>
    </div>
  );
}
