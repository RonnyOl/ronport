"use client"

import { useState } from "react";
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
)

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

const IconDownload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
)

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
)
export default function CardMe() {

  const [isRotating, setIsRotating] = useState(false);

  const handleImageClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <section id="hero" className="min-h-[45rem] bg-[#0a0a0a] flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* Imagen con animación */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <img
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#1e1e1e] cursor-pointer transition-transform duration-700 ${isRotating ? 'rotate-[360deg]' : ''}`}
              src="myself.png"
              alt="Ronny Olmos"
              onClick={handleImageClick}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Ronny+Olmos' }}
            />
          </div>
        </div>

        {/* Texto y Acciones */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm">Fullstack Developer</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Ronny Olmos
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg">
              Fullstack Developer with a strong focus on backend, building <span className="text-white font-normal underline decoration-yellow-500 underline-offset-4"> scalable systems and real-world solutions</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/resumeRonnyOlmos.pdf"
              target="_blank"
              className="flex items-center px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20"
            >
              <IconDownload /> CV
            </a>
            <a
              href="mailto:ronnyolmos16@gmail.com"
              className="flex items-center px-8 py-3 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <IconMail /> Contacto
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <a target="_blank" href="https://linkedin.com" className="text-gray-500 hover:text-white transition-colors"><IconLinkedin /></a>
            <a target="_blank" href="https://github.com" className="text-gray-500 hover:text-white transition-colors"><IconGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
