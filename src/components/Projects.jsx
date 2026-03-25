/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SpringLogo from "./svgs/backend/SpringLogo";
import GitHubLogo from "./svgs/cV/GitHubLogo";
import FirebaseLogo from "./svgs/databases/FirebaseLogo";
import MysqlLogo from "./svgs/databases/MysqlLogo";
import CssLogo from "./svgs/frontend/CssLogo";
import HtmlLogo from "./svgs/frontend/HtmlLogo";
import NextLogo from "./svgs/frontend/NextLogo";
import ReactLogo from "./svgs/frontend/ReactLogo";
import TailLogo from "./svgs/frontend/TailLogo";
import { Zap } from 'lucide-react';

// --- ICONOS INTERNOS ---
const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const TechBadge = ({ label }) => (
  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400 group-hover:border-yellow-500/30 transition-colors">
    {label}
  </span>
);

// Mapeo de tecnologías a componentes de Logo
const TechIcon = ({ tech }) => {
  const iconProps = { className: "w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" };

  switch (tech) {
    case "React": return <ReactLogo  {...iconProps} att={'w-10 h-10'} />;
    case "NextJS": return <NextLogo  {...iconProps} att={'w-10 h-10'} />;
    case "Tailwind": return <TailLogo {...iconProps} att={'w-10 h-10'} />;
    case "HTML": return <HtmlLogo {...iconProps} att={'w-10 h-10'} />;
    case "CSS": return <CssLogo {...iconProps} att={'w-10 h-10'} />;
    case "Firebase": return <FirebaseLogo {...iconProps} att={'w-10 h-10'} />;
    case "Spring": return <SpringLogo {...iconProps} att={'w-10 h-10'} />;
    case "MySQL": return <MysqlLogo {...iconProps} att={'w-10 h-10'} />;
    case "Java": return null; // No hay logo importado para Java base, podrías añadirlo luego
    default: return null;
  }
};

export default function Projects() {
  const projects = [
    {
      title: "FestiCool",
      brand: "Festi",
      brandSuffix: "Cool",
      new: true,
      description: "Built a fullstack e-commerce platform using Node.js, TypeScript, Next.js, and MySQL. Implemented authentication, admin dashboard, product management, and order system. Integrated MercadoPago with webhooks for real-time payment validation. Deployed on AWS EC2 using Docker.",
      techs: ["React", "NextJS", "Tailwind", "HTML", "CSS"],
      link: "https://festicool.com",
      github: null,
      bgClass: "from-purple-500/10",
      img1: "/festicool.png",
      img2: "/festicool2.png"
    },
    {
      title: "Vibras",
      brand: "Vi",
      brandSuffix: "bras",
      description: "E-commerce platform using Java with Spring and Hibernate frameworks, and MySQL for database management. Includes inventory management.",
      techs: ["Java", "Spring", "MySQL", "HTML", "CSS"],
      link: null,
      github: "https://github.com/RonnyOl/grupo-9-OO2-2024",
      bgClass: "from-green-500/10",
      img1: "/vibras.png",
      img2: "/vibras2.png"
    },
    {
      title: "BarkMobb",
      brand: "Bark",
      brandSuffix: "Mobb",
      description: "React-based e-commerce clothing store, products loaded with Firebase database, access to an admin control with CRUD functions, and includes a product viewer.",
      techs: ["React", "NextJS", "Tailwind", "HTML", "CSS", "Firebase"],
      link: "https://barkmobb.netlify.app/",
      github: "https://github.com/RonnyOl/BarkMobbShop",
      bgClass: "from-blue-500/10",
      img1: "/barkmobb.png",
      img2: "/barkmobb2.png"
    },
    {
      title: "OrderMe",
      brand: "Order",
      brandSuffix: "Me",
      description: "Sample page for Orderme app, a restaurant-oriented company's software where they sell their services. Developed in 3 months with React.",
      techs: ["React", "NextJS", "Tailwind", "HTML", "CSS"],
      link: "https://orderme.app/",
      github: null,
      bgClass: "from-yellow-500/10",
      img1: "/orderme.png",
      img2: "/orderme2.png"
    },
  ];

  return (
    <section id="projects" className="projects bg-[#0a0a0a] w-full min-h-screen py-24 px-6 lg:px-20 font-sans leading-relaxed text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header de la Sección */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-yellow-500"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-yellow-500">Selected Work</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
            Projects<span className="text-yellow-500">.</span>
          </h2>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`
                group relative flex flex-col bg-[#111] rounded-[2.5rem] transition-all duration-700 
                ${proj.new
                  ? 'p-[2px] overflow-hidden'
                  : 'border border-white/5 overflow-hidden shadow-2xl'}
              `}
            >
              {/* Efecto de Borde Animado "Infinite Glow" para proyectos nuevos */}
              {proj.new && (
                <>
                  {/* El degradado que gira detrás del contenido */}
                  <div className="absolute inset-[-1000%] animate-border-slow bg-[conic-gradient(from_90deg_at_50%_50%,#EAB308_0%,#111_25%,#111_50%,#EAB308_75%,#EAB308_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-400"></div>

                  {/* Capa de fondo interna para mantener el radio del borde */}
                  <div className="absolute inset-[2px] bg-[#111] rounded-[2.45rem] z-0"></div>

                  {/* Resplandor externo difuso */}
                  <div className="absolute inset-0 shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)] z-0 pointer-events-none"></div>

                  {/* Badge flotante */}
                  <div className="absolute top-6 left-6 z-30 flex items-center gap-1.5 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)] animate-pulse">
                    <Zap className="w-3 h-3 fill-current" />
                    New
                  </div>
                </>
              )}

              {/* Contenedor Visual con efecto de Imagen Swap */}
              <div className="relative h-72 w-full bg-black overflow-hidden z-10">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${proj.img2}')` }}
                ></div>

                <div
                  className="absolute inset-0 bg-center bg-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                  style={{ backgroundImage: `url('${proj.img1}')` }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent opacity-80"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 select-none">
                    <span className="text-white">{proj.brand}</span>
                    <span className="text-yellow-500">{proj.brandSuffix}</span>
                  </h3>
                </div>
              </div>

              {/* Contenido de texto */}
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-3 z-10 relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors">
                      {proj.title}
                    </h4>


                  </div>

                  <div className="flex gap-3">
                    {proj.github && <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-yellow-500 rounded-full text-black hover:scale-110 transition-transform duration-300"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {proj.description}
                </p>

                {/* Badges de Tecnologías (Mantengo las etiquetas de texto abajo por claridad) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.techs.map(tech => (
                    <TechIcon key={tech} tech={tech} />
                  ))}
                </div>

                <div className="pt-4 mt-auto">
                  <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}