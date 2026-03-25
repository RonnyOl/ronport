import React from 'react'
// --- ICONOS DE INTERFAZ ---
const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const TechBadge = ({ label }) => (
  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400 group-hover:border-yellow-500/30 transition-colors">
    {label}
  </span>
);
export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo e Identidad */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className=" text-white text-2xl font-black italic tracking-tighter">
              RONNY<span className="text-yellow-500">.</span>OLMOS
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">
              Backend Developer
            </p>
          </div>

          {/* Redes Sociales con Estilo */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/RonnyOl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ronny-olmos-roman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Información y Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <h6 className="text-gray-500 text-xs font-medium">
              2026 © Made and designed by <span className="text-white hover:text-yellow-500 transition-colors cursor-default">Ronny</span>
            </h6>
            <div className="flex items-center gap-2 text-[9px] text-gray-600 uppercase tracking-widest">
              <span>Buenos Aires</span>
              <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
              <span>Argentina</span>
            </div>
          </div>

        </div>

        {/* Línea inferior decorativa */}
        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </footer>
  )
}
