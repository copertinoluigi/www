"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  BrainCircuit, 
  Code2, 
  Rocket, 
  MapPin, 
  Send,
  CheckCircle2,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// --- CONFIGURAZIONE PROGETTI ---
const projects = [
  {
    title: "HelpMe Pisticci",
    category: "Web App Locale",
    desc: "Il ponte digitale tra cittadini e professionisti locali.",
    tags: ["Hyperlocal", "Utilità Sociale", "Marketplace"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    title: "Ausing CMS",
    category: "SaaS Immobiliare",
    desc: "Gestionale per case vacanza senza commissioni intermedie.",
    tags: ["No-Code", "Automation", "Booking Engine"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    title: "MindHub",
    category: "Dashboard AI",
    desc: "Il mio 'secondo cervello' digitale per gestire business e vita.",
    tags: ["Next.js", "Supabase", "Private Tool"],
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
  },
  {
    title: "MonitorFinder",
    category: "Blog Authority",
    desc: "Sito comparativo di monitor Gaming / Ufficio.",
    tags: ["E-commerce", "Affiliate", "Brand Identity"],
    color: "bg-red-50 border-red-200 text-red-700",
  },
  {
    title: "ViaggiareConBimbi",
    category: "Blog Authority",
    desc: "Portale SEO-oriented per viaggi in famiglia.",
    tags: ["SEO Avanzata", "Affiliate Marketing", "Content"],
    color: "bg-green-50 border-green-200 text-green-700",
  },
];

// --- COMPONENTE PRINCIPALE ---
export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

<div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl text-center">
  <h3 className="text-2xl font-bold mb-4">Parliamo del tuo progetto</h3>
  <p className="text-slate-600 mb-8">
    Preferisco il contatto diretto. Scrivimi una mail spiegando brevemente la tua idea.
  </p>
  
  <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
    <a href="mailto:tuamail@gmail.com?subject=Richiesta%20Consulenza%20da%20Sito%20Web">
      <Send className="mr-2 w-5 h-5" /> Invia Email a Luigi
    </a>
  </Button>
  
  <p className="text-xs text-slate-500 mt-6">
    Rispondo solitamente entro 24 ore.
  </p>
      
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Code2 size={20} />
            </div>
            LuigiCopertino.it
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#servizi" className="hover:text-blue-600 transition">Servizi</Link>
            <Link href="#progetti" className="hover:text-blue-600 transition">Progetti</Link>
          </nav>
          <Button asChild size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
            <Link href="#contatti">Prenota Consulenza</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* --- HERO SECTION --- */}
        <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-1 text-blue-700 bg-blue-50 border border-blue-100">
                <MapPin className="w-3 h-3 mr-1" /> Disponibile a Pisticci, Matera e Online
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Porto l'<span className="text-blue-600">Intelligenza Artificiale</span> nelle attività locali.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Sono Luigi Copertino. Aiuto professionisti e PMI lucane a risparmiare tempo e guadagnare di più automatizzando i processi e creando strumenti digitali su misura.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-12 px-8 text-base">
                  <Link href="#contatti">Parla con me</Link>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
                  <Link href="#progetti">Guarda i miei lavori</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
        </section>

        {/* --- STRENGTHS / SERVICES --- */}
        <section id="servizi" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                  <BrainCircuit className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle>Automazione & AI</CardTitle>
                  <CardDescription>
                    Integro ChatGPT, Zapier e workflow automatici per eliminare il lavoro ripetitivo dal tuo ufficio.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Card 2 */}
              <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                  <Code2 className="w-10 h-10 text-indigo-600 mb-2" />
                  <CardTitle>Sviluppo Web App</CardTitle>
                  <CardDescription>
                    Dal sito vetrina veloce e ottimizzato SEO, fino a gestionali complessi come Ausing CMS.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Card 3 */}
              <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                  <Database className="w-10 h-10 text-orange-600 mb-2" />
                  <CardTitle>Consulenza Strategica</CardTitle>
                  <CardDescription>
                    Analizzo i tuoi dati e processi aziendali per trovare i colli di bottiglia e risolverli.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* --- PROJECTS CAROUSEL --- */}
        <section id="progetti" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Cosa ho costruito</h2>
                <p className="text-slate-600 mt-2 max-w-xl">
                  Non solo teoria. Ecco alcuni progetti reali, attivi e funzionanti che gestisco o ho sviluppato.
                </p>
              </div>
              {/* Navigation hints could go here */}
            </div>

            {/* Scroll Container */}
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory hide-scrollbar">
              {projects.map((project, idx) => (
                <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
                  <Card className={`h-full border transition-hover hover:shadow-md ${project.color}`}>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2 bg-white/50 border-current opacity-80">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-slate-700 font-medium">
                        {project.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold bg-white/60 px-2 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT FORM --- */}
        <section id="contatti" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Hai un'idea o un problema da risolvere?
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Che tu sia un professionista che vuole automatizzare le fatture, o una PMI che vuole lanciare un nuovo servizio, parliamone.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-400" />
                    <span>Prima call conoscitiva gratuita (15 min)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-400" />
                    <span>Approccio pratico, zero jargon tecnico inutile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-400" />
                    <span>Focus sui risultati e ROI</span>
                  </li>
                </ul>

                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Scrivimi direttamente:</p>
                  <p className="text-xl font-medium text-white">luigi@luigicopertino.it</p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-white text-slate-900 p-6 md:p-8 rounded-2xl shadow-xl">
                {sent ? (
                  <div className="h-80 flex flex-col items-center justify-center text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Messaggio Inviato!</h3>
                    <p className="text-slate-600">Ti risponderò il prima possibile.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Mandami un messaggio</h3>
                    
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Come ti chiami?</label>
                      <Input id="name" name="name" placeholder="Mario Rossi" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">La tua email</label>
                      <Input id="email" name="email" type="email" placeholder="mario@azienda.it" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Come posso aiutarti?</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Vorrei automatizzare..." 
                        className="min-h-[120px]"
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" disabled={loading}>
                      {loading ? "Invio in corso..." : "Invia Richiesta"} <Send className="ml-2 w-4 h-4" />
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                      I tuoi dati sono al sicuro. Leggi la Privacy Policy.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Luigi Copertino. P.IVA xxxxxxxxxx</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
            <Link href="https://hub.luigicopertino.it" className="hover:text-white text-blue-400">Area Riservata</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
