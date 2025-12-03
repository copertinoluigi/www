"use client";

import Link from "next/link";
import { ArrowRight, Terminal, MapPin, Send, Zap, Globe, Search, Database, Layers, ArrowUpRight } from "lucide-react";

// --- CONFIGURAZIONE PROGETTI ---
const projects = [
  {
    title: "HelpMe Pisticci",
    role: "Full Stack • Local",
    desc: "Marketplace iper-locale per connettere cittadini e professionisti.",
    tags: ["Next.js", "Supabase", "GeoLocation"],
    icon: MapPin,
    gradient: "from-orange-500/20 to-red-500/20 hover:border-orange-500/50"
  },
  {
    title: "Ausing CMS",
    role: "SaaS • Real Estate",
    desc: "Ecosistema di gestione per ville e case vacanza senza intermediari.",
    tags: ["Automation", "No-Code", "Booking"],
    icon: Database,
    gradient: "from-blue-500/20 to-cyan-500/20 hover:border-blue-500/50"
  },
  {
    title: "MonitorFinder",
    role: "Bot • Scraping",
    desc: "Sistema di sorveglianza prezzi e disponibilità in tempo reale.",
    tags: ["Python", "Data Mining", "Telegram Bot"],
    icon: Search,
    gradient: "from-emerald-500/20 to-green-500/20 hover:border-emerald-500/50"
  },
  {
    title: "ModuloFinder",
    role: "Platform • Niche",
    desc: "L'autorità SEO nel settore delle case modulari e prefabbricate.",
    tags: ["SEO", "Affiliate", "Content"],
    icon: Layers,
    gradient: "from-indigo-500/20 to-purple-500/20 hover:border-indigo-500/50"
  },
  {
    title: "MindHub",
    role: "Personal OS",
    desc: "Il 'Secondo Cervello'. Dashboard AI per la gestione della vita digitale.",
    tags: ["AI Wrappers", "React", "Analytics"],
    icon: Zap,
    gradient: "from-pink-500/20 to-rose-500/20 hover:border-pink-500/50"
  },
  {
    title: "ViaggiareConBimbi",
    role: "Media • Community",
    desc: "Network editoriale verticale per famiglie in viaggio.",
    tags: ["Growth Hacking", "Community", "Ads"],
    icon: Globe,
    gradient: "from-yellow-500/20 to-amber-500/20 hover:border-yellow-500/50"
  },
];

export default function PublicPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR --- */}
      <header className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wider flex items-center gap-2 text-white">
            <Terminal size={20} className="text-cyan-400" />
            <span>LUIGI_COPERTINO<span className="animate-pulse text-cyan-400">_</span></span>
          </div>
          <Link 
            href="#contatti" 
            className="text-xs font-mono border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all hover:border-cyan-500/50"
          >
            GET_IN_TOUCH
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32">
        
        {/* --- HERO SECTION --- */}
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              OPERATIONAL FROM MALTA & BASILICATA
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Digital Intelligence.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Trasformo processi complessi in algoritmi semplici. <br className="hidden md:block"/>
              Consulenza AI, Automazione e Sviluppo Web per chi vuole scalare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contatti"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-cyan-600 px-8 font-medium text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-[0_0_20px_rgba(8,145,178,0.5)]"
              >
                <span className="mr-2">Inizia Progetto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#progetti"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-900/50 px-8 font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
              >
                Analizza Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* --- PROGETTI GRID --- */}
        <section id="progetti" className="container mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Works</h2>
              <p className="font-mono text-xs text-slate-500">INDEX: 01 — 06</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div 
                key={idx} 
                className={`group relative p-6 rounded-2xl bg-slate-900 border border-white/5 transition-all duration-500 hover:-translate-y-1 ${p.gradient} bg-gradient-to-br`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-cyan-400">
                    <p.icon size={24} />
                  </div>
                  <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="mb-4">
                  <span className="font-mono text-xs text-cyan-500 mb-2 block">{p.role}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-slate-950/50 px-2 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contatti" className="container mx-auto px-6 mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 p-8 md:p-20 text-center">
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">System Ready.</h3>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Hai un'idea complessa? La semplifico. <br/>
                Hai un processo lento? Lo automatizzo.
              </p>
              
              <a 
                href="mailto:copertino.luigi@gmail.com?subject=Inizia%20Protocollo%20Collaborazione"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <Send size={18} />
                Avvia Comunicazione
              </a>
              
              <p className="mt-8 font-mono text-xs text-slate-600">
                RESPONSE TIME: &lt; 24H
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            <span className="text-slate-300 font-bold">LUIGI COPERTINO</span> — Freelancer / Malta 🇲🇹
          </div>
          
          <div className="flex gap-8 text-xs font-mono tracking-wider">
            <Link href="/mindhub" className="text-slate-600 hover:text-red-500 transition-colors flex items-center gap-2">
               [ USA I MIEI PROGETTI SEGRETI ]
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
