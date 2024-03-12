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

export default function AboutMe() {
  return (
    <div className="bg-[#121212] min-h-[180rem] sm:min-h-[130rem] lg:min-h-screen w-full text-white flex items-center flex-col gap-16 league lg:p-24">
      
      <div className="flex gap-6 w-full flex-col lg:flex-row items-center pt-16 text-center lg:text-left lg:pt-0">
        <div className="justify-center flex flex-col items-center gap-6 w-3/6">
          <h1 className="text-3xl readex aboutMe">About me</h1>

          <p className="text-xl">
            I am a responsible and committed person, looking to gain work
            experience in a position where I can learn, improve and achieve my
            work objectives in a pleasant and comfortable environment.
          </p>
        </div>

        <div className=" flex flex-col items-center gap-6 w-3/6">
          <h1 className="text-3xl readex">Personal Info</h1>

          <div>
            <ul className="flex justify-start items-start flex-col w-full text-xl gap-2">
              <li className="flex">
                <b className="w-24 text-xl">Age</b> 20 y/o
              </li>
              <li className="flex ">
                <b className="w-24 text-xl">Phone</b>+54 11 2324-2319
              </li>
              <li className="flex">
                <b className="w-24 text-xl">Linkedin</b>Ronny-olmos-roman
              </li>
              <li className="flex">
                <b className="w-24 text-xl">Email</b> ronnyolmos16@gmail.com
              </li>
              <li className="flex">
                <b className="w-24 text-xl">Location</b> Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 w-5/6 lg:w-full"></div>

      <div className="flex justify-center flex-col items-center gap-6 w-full">
        <h1 className="text-6xl readex skills">Skills</h1>

        <div className="text-2xl self-start flex flex-col gap-16 w-full">
          <div className="frontEnd flex flex-col gap-3 justify-center items-center">
            <h2 className="text-[#ffe66b] text-3xl">
              Front<span className="text-white">End</span>
            </h2>
            <ul className="flex gap-6 sm:flex-wrap flex-col sm:flex-row justify-center min-h-fit max-h-fit items-center">
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <HtmlLogo att={"w-8 h-8"} /> HTML5
              </li>
              <li className=" border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <CssLogo att={"w-8 h-8"} /> CSS
              </li>
              <li className="h-16 border-b hover:animate-pulse hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <JsLogo att={"w-8 h-8"} />
                JavaScript
                
              </li>
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <ReactLogo att={"w-8 h-8"} />
                React
              </li>
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <NextLogo att={"w-8 h-8"} /> NextJS
              </li>
              <li className="border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <TailLogo att={"w-8 h-8"} /> TailWindCSS
              </li>
            </ul>
          </div>

          <div className="backend flex flex-col gap-3 justify-center items-center">
            <h2 className="text-[#ffe66b] text-3xl">
              Back<span className="text-white">End</span>
            </h2>
            <ul className="flex gap-6 sm:flex-wrap flex-col sm:flex-row justify-center min-h-fit max-h-fit items-center">
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <JavaLogo att={"w-8 h-8"} /> Java
              </li>
              <li className="h-16  border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                
                <PhpLogo att={"w-8 h-8"} /> PHP
              </li>
              
            </ul>
          </div>

            

          <div className="others flex flex-row lg:gap-3 w-full justify-center items-center flex-wrap lg:flex-nowrap gap-20">
            <div className="w-6/12 flex flex-col justify-center items-center ">
              <h2 className="text-[#ffe66b] text-3xl">
                Data<span className="text-white">Bases</span>
              </h2>
              <ul className="flex flex-row gap-6 h-16">
                <li className="border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <FirebaseLogo att={"w-8 h-8"} /> Firebase
                </li>
                <li className="border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <MysqlLogo att={"w-8 h-8"} /> MySql
                </li>
              </ul>
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center ">
              <h2 className="text-[#ffe66b] text-3xl">
                Version<span className="text-white"> Control </span>
              </h2>
              <ul className="flex flex-row gap-6 h-16">
                <li className="border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <GitHubLogo att={"w-8 h-8"} /> GitHub
                </li>
                <li className="border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <GitLogo att={"w-8 h-8"} /> Git
                </li>
              </ul>
            </div>
          </div>

          


        </div>
      </div>



      <div className="flex flex-col w-full items-center lg:gap-24 gap-24 pt-16 text-center">
        <div className="w-3/6 justify-center items-center flex flex-col gap-6">
          <h1 className="text-3xl white readex w-96 py-6"><span className="text-[#ffe66b]">Language</span> Skills</h1>
          <ul className="flex gap-6 h-16">
          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>Spanish (Native)</p>
          </li>

          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>English (Fluent)</p>
          </li>
          </ul>
        </div>

        <div className="w-3/6 justify-center items-center flex flex-col gap-6 ">
        <h1 className="text-3xl white readex"><span className="text-[#ffe66b]">Soft</span> Skills</h1>
          <ul className="flex gap-6 h-16 flex-col items-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>Creativity</p>
          </li>

          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>Teamwork</p>
          </li>

          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>Adaptability</p>
          </li>
          <li className="text-2xl border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                  
                  <p>Discipline</p>
          </li>

          </ul>
        </div>

        </div>
    </div>
  );
}
