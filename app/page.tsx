"use client";

import Link from "next/link";
import { ArrowRight, Code2, MapPin, Send, Cpu, Globe, Search, Home, LayoutGrid } from "lucide-react";

// --- CONFIGURAZIONE PROGETTI ---
const projects = [
  {
    title: "HelpMe Pisticci",
    category: "Web App Locale",
    desc: "Il ponte digitale tra cittadini e professionisti locali.",
    tags: ["Hyperlocal", "Marketplace"],
    icon: MapPin,
    style: "hover:border-orange-400/50 hover:bg-orange-50/30"
  },
  {
    title: "Ausing CMS",
    category: "SaaS Immobiliare",
    desc: "Gestionale per case vacanza senza commissioni.",
    tags: ["No-Code", "Automation"],
    icon: Home,
    style: "hover:border-blue-400/50 hover:bg-blue-50/30"
  },
  {
    title: "MonitorFinder",
    category: "Tech Tool",
    desc: "Sistema automatizzato di monitoraggio prezzi e disponibilità.",
    tags: ["Scraping", "Data Analysis"],
    icon: Search,
    style: "hover:border-emerald-400/50 hover:bg-emerald-50/30"
  },
  {
    title: "ModuloFinder",
    category: "Real Estate",
    desc: "Piattaforma dedicata al mondo delle case modulari e prefabbricate.",
    tags: ["SEO Authority", "Affiliate"],
    icon: LayoutGrid,
    style: "hover:border-indigo-400/50 hover:bg-indigo-50/30"
  },
  {
    title: "MindHub",
    category: "Internal Tool",
    desc: "Dashboard personale AI-driven per gestione business e vita.",
    tags: ["Next.js", "AI Integration"],
    icon: Cpu,
    style: "hover:border-purple-400/50 hover:bg-purple-50/30"
  },
  {
    title: "ViaggiareConBimbi",
    category: "Blog Network",
    desc: "Portale verticale per viaggi in famiglia.",
    tags: ["SEO", "Community"],
    icon: Globe,
    style: "hover:border-pink-400/50 hover:bg-pink-50/30"
  },
];

export default function PublicPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100">
      
      {/* --- NAVBAR MINIMAL --- */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <Code2 size={18}/>
            </div>
            LuigiCopertino
          </div>
          <Link 
            href="#contatti" 
            className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contattami
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-24">
        
        {/* --- HERO SECTION MODERN --- */}
        <section className="py-24 lg:py-32 container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Sviluppo soluzioni <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Intelligenti & Scalabili.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
              Sono Luigi Copertino. Unisco AI, Automazione e Sviluppo Web per trasformare idee complesse in prodotti digitali semplici.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#contatti"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:scale-[1.02]"
              >
                Parliamo del tuo progetto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#progetti"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                Esplora Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* --- PROGETTI (GRID LAYOUT) --- */}
        <section id="progetti" className="py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Progetti Selezionati</h2>
                <p className="text-slate-500 mt-2">Un mix di prodotti proprietari e consulenze.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:shadow-xl ${project.style}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">
                        <project.icon className="w-6 h-6 text-slate-700" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                    {project.tags.map(t => (
                      <span key={t} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTATTI (CLEAN) --- */}
        <section id="contatti" className="py-24 container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden">
            
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto a scalare?</h3>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Che si tratti di automatizzare un processo noioso o lanciare una nuova piattaforma, scrivimi. Rispondo personalmente.
            </p>
            
            <a 
              href="mailto:copertino.luigi@gmail.com?subject=Richiesta%20Info%20Web"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-10 py-4 text-lg font-bold hover:bg-blue-50 transition-all hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5 text-blue-600" /> Invia Email
            </a>
          </div>
        </section>

      </main>

      {/* --- FOOTER INTERNATIONAL --- */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="font-semibold text-slate-900">Luigi Copertino</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span>Freelancer - Malta 🇲🇹</span>
          </div>
          
          <div className="flex gap-6">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</Link>
            <Link href="https://github.com" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</Link>
            <Link href="/mindhub" className="text-slate-400 hover:text-slate-900 transition-colors">
              Hub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
