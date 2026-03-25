"use client"
import React, { useEffect, useState } from 'react'

// Iconos SVG para evitar errores de importación de librerías externas
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

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Manejador del menú móvil
  const menuHandler = () => {
    setShowMenu(!showMenu)
    if (!showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // Función de desplazamiento suave nativa
  const scrollToSection = (e, id, offset = 80) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (showMenu) menuHandler();
    }
  };

  // Detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Cambio de estilo del Navbar
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa para el indicador visual
      const sections = ['aboutMe', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About me', to: 'aboutMe' },
    { name: 'Skills', to: 'skills' },
    { name: 'Proyectos', to: 'projects' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${isScrolled
          ? 'bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, 'hero', 0)}
            className="text-xl md:text-2xl font-bold italic tracking-tighter text-white hover:text-yellow-500 transition-colors"
          >
            RONNY<span className="text-yellow-500">.DEV</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={(e) => scrollToSection(e, link.to)}
                  className={`text-sm font-medium transition-colors relative group cursor-pointer ${activeSection === link.to ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-yellow-500 transition-all ${activeSection === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons Desktop */}
          <div className="flex items-center gap-5 border-l border-white/10 pl-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ronny-olmos-roman/"
              className="text-gray-400 hover:text-yellow-500 transition-all transform hover:scale-110"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/RonnyOl"
              className="text-gray-400 hover:text-yellow-500 transition-all transform hover:scale-110"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={menuHandler}
          className="lg:hidden p-2 text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {showMenu ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${showMenu ? 'visible' : 'invisible'
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${showMenu ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={menuHandler}
        ></div>

        {/* Sidebar Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-[#161616] border-l border-white/10 p-8 flex flex-col transition-transform duration-500 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="mb-12">
            <h2 className="text-2xl font-bold italic">Menu<span className="text-yellow-500">.</span></h2>
          </div>

          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={(e) => scrollToSection(e, link.to)}
                  className={`text-2xl font-semibold block transition-colors ${activeSection === link.to ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-white/10 flex gap-6">
            <a target="_blank" href="https://linkedin.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <IconLinkedin />
            </a>
            <a target="_blank" href="https://github.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <IconGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}