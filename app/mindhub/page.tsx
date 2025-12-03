"use client";

import Link from "next/link";
import { LayoutDashboard, Home, Wrench, ExternalLink, ArrowLeft } from "lucide-react";

// LE TUE APP
const myApps = [
  {
    name: "MindHub Dashboard",
    url: "https://mindhub-vercel.vercel.app/",
    icon: LayoutDashboard,
    desc: "Statistiche e Finanze",
    color: "bg-indigo-50 border-indigo-200 text-indigo-900"
  },
  {
    name: "Ausing Admin",
    url: "https://ausing.it/wp-admin",
    icon: Home,
    desc: "Gestione Ville",
    color: "bg-blue-50 border-blue-200 text-blue-900"
  },
  {
    name: "HelpMe Admin",
    url: "https://helpme-pisticci.it/admin",
    icon: Wrench,
    desc: "Gestione Segnalazioni",
    color: "bg-orange-50 border-orange-200 text-orange-900"
  },
];

export default function MindHubLauncher() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center justify-center font-sans">
      
      <div className="w-full max-w-2xl mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">MindHub Launcher 🚀</h1>
        <Link 
          href="/"
          className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2"/> Torna al sito
        </Link>
      </div>

      <div className="grid gap-6 w-full max-w-2xl sm:grid-cols-2">
        {myApps.map((app, idx) => (
          <a key={idx} href={app.url} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className={`h-full rounded-xl border-2 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white ${app.color}`}>
              <div className="flex flex-row items-center justify-between pb-2 mb-2">
                <h3 className="text-lg font-bold">{app.name}</h3>
                <app.icon className="h-6 w-6 opacity-70" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-80 mb-4">{app.desc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider opacity-60">
                  Apri <ExternalLink className="ml-1 w-3 h-3" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <p className="mt-12 text-slate-400 text-xs">Accesso Riservato - Luigi Copertino</p>
    </div>
  );
}
