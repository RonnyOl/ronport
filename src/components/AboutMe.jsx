/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import JsLogo from "./svgs/frontend/JsLogo";
import CssLogo from "./svgs/frontend/CssLogo";
import HtmlLogo from "./svgs/frontend/HtmlLogo";
import ReactLogo from "./svgs/frontend/ReactLogo";
import NextLogo from "./svgs/frontend/NextLogo";
import TailLogo from "./svgs/frontend/TailLogo";
import JavaLogo from "./svgs/backend/JavaLogo";
import PhpLogo from "./svgs/backend/PhpLogo";
import CLogo from "./svgs/backend/CLogo";
import MysqlLogo from "./svgs/databases/MysqlLogo";
import FirebaseLogo from "./svgs/databases/FirebaseLogo";
import GitHubLogo from "./svgs/cV/GitHubLogo";
import GitLogo from "./svgs/cV/GitLogo";
import SpringLogo from "./svgs/backend/SpringLogo";
import MongoLogo from "./svgs/databases/MongoLogo";
import NodeLogo from "./svgs/backend/NodeLogo";
import DockerLogo from "./svgs/backend/dockerLogo";
import AwsLogo from "./svgs/backend/AwsLogo";
export default function AboutMe() {
  const personalData = [
    { label: "Age", value: "22 years" },
    { label: "Ubication", value: "Buenos Aires, ARG" },
    { label: "Email", value: "ronnyolmos16@gmail.com" },
    { label: "LinkedIn", value: "/ronny-olmos-roman" },
  ];
  const softSkills = [
    "Creativity", "Teamwork", "Discipline",
    "Adaptability", "Problem Solving",
    "Time Management"
  ];

  return (
    <section id="aboutMe" className="relative bg-[#080808] min-h-screen w-full text-white py-24 px-6 lg:px-24 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* HEADER: TITULO E INTRODUCCIÓN */}
        <div className="flex flex-col lg:flex-row gap-12 items-end justify-between border-b border-white/10 pb-16">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter text-white opacity-5 absolute -top-10 left-0 select-none">
              PROFILE
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold relative z-10">
              About <span className="text-yellow-500">me.</span>
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Fullstack developer specialized in backend development, focused on building scalable and well-structured systems.
              I primarily work with Node.js and modern architectures, designing APIs and managing robust data-driven applications.
              I’m passionate about solving real-world problems and building reliable, production-ready solutions.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {personalData.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <p className="text-xs uppercase text-yellow-500 font-bold mb-1 tracking-widest">{item.label}</p>
                  <p className="text-sm text-gray-300 font-medium truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN DE SKILLS: REORGANIZADA SEGÚN SOLICITUD */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. FRONTEND - OCUPA TODO EL LARGO SUPERIOR */}
          <div id='skills' className="md:col-span-12 bg-gradient-to-br from-white/10 to-transparent p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <h4 className="text-8xl font-black italic">FRONT</h4>
            </div>
            <h4 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-yellow-500"></span> Frontend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {[
                { name: 'React', icon: <ReactLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#61DAFB]' },
                { name: 'NextJS', icon: <NextLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#ffffff]' },
                { name: 'JavaScript', icon: <JsLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#F7DF1E]' },
                { name: 'Tailwind', icon: <TailLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#38B2AC]' },
                { name: 'HTML5', icon: <HtmlLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#E34F26]' },
                { name: 'CSS3', icon: <CssLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#1572B6]' },
              ].map((skill, i) => (
                <div key={i} className={`flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 group ${skill.color} cursor-default`}>
                  {skill.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. BACKEND - OCUPA TODO EL LARGO DEBAJO DEL FRONT */}
          <div className="md:col-span-12 bg-gradient-to-bl from-yellow-500/5 to-transparent p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <h4 className="text-8xl font-black italic">BACK</h4>
            </div>
            <h4 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-yellow-500"></span> Backend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { name: 'Java ', icon: <JavaLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#ED8B00]' },
                { name: 'Node.js', icon: <NodeLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#68A888]' },
                { name: 'Spring Boot', icon: <SpringLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#68A063]' },
              ].map((skill, i) => (
                <div key={i} className={`flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 group ${skill.color} cursor-default`}>
                  {skill.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. DATABASES & TOOLS - OCUPA POCO ESPACIO */}
          <div className="md:col-span-12 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
            <div className="flex flex-col gap-8">
              <h5 className="text-[15px] font-black uppercase text-white flex items-center gap-3">
                <span className="w-12 h-[2px] bg-yellow-500"></span>
                Database & Tools
              </h5>

              <div className="flex flex-wrap justify-center gap-6">

                {[
                  { name: 'MongoDB', icon: <MongoLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#4DB33D]' },
                  { name: 'mySQL', icon: <MysqlLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#00758F]' },
                  { name: 'Git', icon: <GitLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#F05033]' },
                  { name: 'GitHub', icon: <GitHubLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#333FFF]' },
                  { name: 'Docker', icon: <DockerLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#2496ED]' },
                  { name: 'AWS', icon: <AwsLogo att={'w-16 h-16'} />, color: 'hover:shadow-[0_0_20px_-5px_#FF9900]' },

                ].map((tool, i) => (
                  <div key={i} className={`flex flex-col items-center gap-3 bg-black/40 p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 ${tool.color} cursor-default`}>
                    {tool.icon}
                    <span className={`text-xs font-bold uppercase tracking-widest text-center ${tool.color} `}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. IDIOMAS Y SOFT SKILLS (FILA FINAL DIVIDIDA) */}

          {/* Español */}
          <div className="md:col-span-4 bg-yellow-500 p-8 rounded-[2.5rem] text-black relative group overflow-hidden flex flex-col justify-between h-48">
            <div className="z-10">
              <p className="text-[10px] font-black uppercase mb-1 opacity-70">Native Language</p>
              <h5 className="text-4xl font-black italic tracking-tighter">SPANISH</h5>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          {/* Inglés */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between h-48 group hover:bg-white/10 transition-colors">
            <div>
              <p className="text-[10px] font-black uppercase text-yellow-500 mb-1">upper intermediate</p>
              <h5 className="text-4xl font-black italic tracking-tighter">ENGLISH</h5>
            </div>

          </div>

          {/* Soft Skills */}
          <div className="md:col-span-4 bg-[#111] p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between h-46 group hover:border-white/20 transition-all">
            <div className="flex justify-between items-start">
              <h5 className="text-[10px] font-black uppercase text-yellow-500 italic">Soft Skills</h5>
              <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <div key={skill} className="bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}
