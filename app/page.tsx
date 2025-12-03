"use client";

import Link from "next/link";
import { ArrowRight, Code2, MapPin, Send, CheckCircle2, BrainCircuit, Database } from "lucide-react";
import { useState } from "react";

// PROGETTI
const projects = [
  {
    title: "HelpMe Pisticci",
    category: "Web App Locale",
    desc: "Il ponte digitale tra cittadini e professionisti locali.",
    tags: ["Hyperlocal", "Utilità Sociale"],
    color: "bg-orange-50 border-orange-200 text-orange-900",
    badge: "bg-orange-100 text-orange-800"
  },
  {
    title: "Ausing CMS",
    category: "SaaS Immobiliare",
    desc: "Gestionale per case vacanza senza commissioni.",
    tags: ["No-Code", "Automation"],
    color: "bg-blue-50 border-blue-200 text-blue-900",
    badge: "bg-blue-100 text-blue-800"
  },
  {
    title: "MindHub",
    category: "Internal Tool",
    desc: "Dashboard personale per gestire business e vita.",
    tags: ["Next.js", "AI Integration"],
    color: "bg-indigo-50 border-indigo-200 text-indigo-900",
    badge: "bg-indigo-100 text-indigo-800"
  },
  {
    title: "Cantina Tre Copertino",
    category: "E-Commerce",
    desc: "Digitalizzazione brand vinicolo familiare.",
    tags: ["Storytelling", "Brand"],
    color: "bg-red-50 border-red-200 text-red-900",
    badge: "bg-red-100 text-red-800"
  },
  {
    title: "ViaggiareConBimbi",
    category: "Blog SEO",
    desc: "Portale per viaggi in famiglia.",
    tags: ["SEO", "Affiliazioni"],
    color: "bg-green-50 border-green-200 text-green-900",
    badge: "bg-green-100 text-green-800"
  },
];

export default function PublicPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              <Code2 size={20}/>
            </div>
            LuigiCopertino.it
          </div>
          <Link 
            href="#contatti" 
            className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Prenota Consulenza
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* HERO */}
        <section className="py-20 lg:py-32 bg-white text-center">
          <div className="container mx-auto px-4">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
              <MapPin className="mr-1 h-3 w-3" /> Basilicata (Pisticci / Matera / Online)
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Porto l'<span className="text-blue-600">AI e l'Automazione</span><br /> nelle attività locali.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Sono Luigi Copertino. Aiuto PMI e professionisti a risparmiare tempo creando strumenti digitali su misura.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="#contatti"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Parliamone <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="#progetti"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                I miei lavori
              </Link>
            </div>
          </div>
        </section>

        {/* PROGETTI */}
        <section id="progetti" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Progetti Attivi</h2>
            
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory px-2">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className={`min-w-[300px] md:min-w-[350px] snap-center rounded-xl border-2 p-6 shadow-sm ${project.color}`}
                >
                  <div className="mb-4">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${project.badge}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm font-medium opacity-90 mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-xs font-bold bg-white/60 px-2 py-1 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="py-20 container mx-auto px-4 max-w-xl">
          <div className="rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Parliamo del tuo progetto</h3>
            <p className="text-slate-600 mb-8">
              Preferisco il contatto diretto. Scrivimi una mail spiegando brevemente la tua idea.
            </p>
            
            <a 
              href="mailto:copertino.luigi@gmail.com?subject=Richiesta%20Consulenza"
              className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 h-14 text-lg font-medium text-white hover:bg-blue-700 transition-colors"
            >
              <Send className="mr-2 h-5 w-5" /> Invia Email a Luigi
            </a>
            
            <p className="text-xs text-slate-500 mt-6">
              Rispondo solitamente entro 24 ore.
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Luigi Copertino. P.IVA xxxxxxxxxx</p>
        <div className="mt-4">
            <Link href="/mindhub" className="text-slate-600 hover:text-slate-400 transition-colors">
              Area Riservata
            </Link>
        </div>
      </footer>
    </div>
  );
}
