"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutDashboard, Home, Wrench, ExternalLink, ArrowLeft } from "lucide-react";

// LE TUE APP (Configura qui i link reali)
const myApps = [
  {
    name: "MindHub Dashboard",
    url: "https://mindhub-vercel.vercel.app/", // Il link che mi hai dato
    icon: LayoutDashboard,
    desc: "Statistiche e Finanze",
    color: "text-indigo-600 border-indigo-200 bg-indigo-50"
  },
  {
    name: "Ausing Admin",
    url: "https://ausing.it/wp-admin", // Esempio
    icon: Home,
    desc: "Gestione Ville",
    color: "text-blue-600 border-blue-200 bg-blue-50"
  },
  {
    name: "HelpMe Admin",
    url: "https://helpme-pisticci.it/admin", // Esempio
    icon: Wrench,
    desc: "Gestione Segnalazioni",
    color: "text-orange-600 border-orange-200 bg-orange-50"
  },
];

export default function MindHubLauncher() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center justify-center">
      
      <div className="w-full max-w-2xl mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">MindHub Launcher 🚀</h1>
        <Button variant="ghost" asChild>
            <Link href="/"><ArrowLeft className="w-4 h-4 mr-2"/> Torna al sito</Link>
        </Button>
      </div>

      <div className="grid gap-6 w-full max-w-2xl sm:grid-cols-2">
        {myApps.map((app, idx) => (
          <a key={idx} href={app.url} target="_blank" rel="noopener noreferrer">
            <Card className={`hover:shadow-lg transition-all cursor-pointer h-full border-2 ${app.color}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold">{app.name}</CardTitle>
                <app.icon className="h-6 w-6 opacity-70" />
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium opacity-80 mb-4">{app.desc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider">
                  Apri <ExternalLink className="ml-1 w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
      
      <p className="mt-12 text-slate-400 text-xs">Accesso Riservato - Luigi Copertino</p>
    </div>
  );
}
