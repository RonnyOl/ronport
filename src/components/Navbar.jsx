/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
    const [showMenu, setshowMenu] = useState(false)

    const [pos, setpos] = useState(null)

    const menuHandler = () => {
        setshowMenu(!showMenu)
        
        if (!showMenu) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
        const posicionVertical = window.scrollY;
        setpos(Math.floor(posicionVertical))
        console.log('Posición vertical actual:', Math.floor(pos));
        })}
    }, [pos])
    
  return (
    <>
    <nav className='h-16 w-full bg-[#222222] flex text-white justify-between py-6 px-6 readex sticky top-0 z-30'>

        <div className='flex justify-center items-center'>
            <a className='metal text-3xl'> Ronny's Portfolio</a>
        </div>

        

        <div className='hidden lg:flex'>
        <ul className='flex gap-6'>
            <ScrollLink className="cursor-pointer"
                  activeClass="active"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={-400}
                  duration={500}>About me</ScrollLink>
            <ScrollLink className="cursor-pointer"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}>Skills</ScrollLink>
            <ScrollLink className="cursor-pointer"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>Projects</ScrollLink>
        </ul>
        </div> 

        <div className='gap-6 flex items-center'>
        <a target="_blank" href="https://www.linkedin.com/in/ronny-olmos-roman/">
        <svg
                
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 icon icon-tabler icon-tabler-brand-linkedin hover:stroke-[#ffdd35] transition hover:drop-shadow-[0_0px_10px_rgba(255,230,107,0.2)]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              > 
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              </a>

              <a target="_blank"  href="https://github.com/RonnyOl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 icon icon-tabler icon-tabler-brand-github hover:stroke-[#ffdd35] transition hover:drop-shadow-[0_0px_10px_rgba(255,230,107,0.2)]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg></a>


              <div className="flex items-center gap-4">
            <button
                onClick={menuHandler}
              className="block rounded-full border p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
              
        </div>

       
    </nav>
    
    {showMenu && <header className=''>
        <div style={{"top" : pos+60}} className={`bg-black min-h-screen w-full opacity-50 absolute z-10`}>
        
        </div>
        <div style={{"top" : pos+60}} className={`zoom-in-out-box  bg-[#222222] min-h-screen w-[16rem] absolute  right-0 z-20`}>

            <div className='text-white text-2xl flex justify-center items-center w-full pt-16 border-b border-white pb-6'>
                 <h1 className=''>Ronny's Portfolio</h1>
            </div>

            <div className='flex justify-center text-2xl pt-16  text-white w-full'>
                <ul className='w-full flex justify-center items-center flex-col gap-8'>
                <li className='w-56 border-b border-[#ffdb29] pb-2 text-center'><ScrollLink className="cursor-pointer"
                  activeClass="active"
                  to="aboutMe"
                  onClick={menuHandler}
                  spy={true}
                  smooth={true}
                  offset={-400}
                  duration={500}>About me</ScrollLink></li>

<li className='w-56 border-b border-[#ffdb29] pb-2 text-center'><ScrollLink className="cursor-pointer  w-full "
                  activeClass="active"
                  to="skills"
                  spy={true}
                  onClick={menuHandler}
                  smooth={true}
                  offset={-100}
                  duration={500}>Skills</ScrollLink></li>


<li className='w-56 border-b border-[#ffdb29] pb-2 text-center'><ScrollLink className="cursor-pointer  w-full "
                  activeClass="active"
                  to="projects"
                  onClick={menuHandler}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>Projects</ScrollLink></li>
                </ul>
            </div>

            <div className='flex justify-center items-center h-full pt-64'>
            <div className='gap-6 flex items-center'>
        <a href="https://www.linkedin.com/in/ronny-olmos-roman/">
        <svg
                
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 icon icon-tabler icon-tabler-brand-linkedin hover:stroke-[#ffdd35] transition hover:drop-shadow-[0_0px_10px_rgba(255,230,107,0.2)]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              > 
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg></a>
              <a href="https://github.com/RonnyOl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 icon icon-tabler icon-tabler-brand-github hover:stroke-[#ffdd35] transition hover:drop-shadow-[0_0px_10px_rgba(255,230,107,0.2)]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg></a>
        </div>
            </div>

        </div>

    </header>}
    </>
  )
}
