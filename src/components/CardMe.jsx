"use client"

import { useState } from "react";

export default function CardMe() {

  const [isRotating, setIsRotating] = useState(false);

  const handleImageClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Después de 1 segundo, detiene la rotación
  };

  return (
    <section className="bg-[#222222] lg:h-96 h-fit py-16 w-full text-[#ffe66b] flex flex-col gap-6 items-center justify-center text-center lg:text-left league">
      <div className="flex items-center gap-16 items-center flex-col lg:flex-row">
        <div className="">
          <img className={isRotating ? "imagenMia w-80 h-80" :  " w-80 h-80 cursor-pointer "} src="myself.png" alt="pfpMe" onClick={handleImageClick} />
        </div>

        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6">
          <div className="flex flex-col gap-1">
            
            <h1 className="text-6xl text-white readex ">
              <b>Ronny Olmos</b>
            </h1>
            <h3 className="text-lg "> Full Stack Developer Trainee</h3>
          </div>

          <div className="flex items-center gap-6">
            <div className="">
              <button className="text-white text-lg border border-[#ffdb29] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#ffdb29] hover:shadow-[0_0_0.5rem] hover:shadow-[#ffda1e]">
                <a target="_blank" href="/resumeRonnyOlmos.pdf">Download resume</a>
              </button>
            </div>

            <div className="">
              <button  className="text-white text-lg border border-[#ffdb29] hover:text-[#1e1e1e] transition rounded-2xl p-3 w-32 hover:bg-[#ffdb29] hover:shadow-[0_0_0.4rem] hover:shadow-[#ffda1e]">
                <a href="mailto:ronnyolmos16@gmail.com">Contact me</a>
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-6">
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
    </section>
  );
}
