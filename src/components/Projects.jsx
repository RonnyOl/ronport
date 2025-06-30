/* eslint-disable react/no-unescaped-entities */
import SpringLogo from "./svgs/backend/SpringLogo";
import GitHubLogo from "./svgs/cV/GitHubLogo";
import FirebaseLogo from "./svgs/databases/FirebaseLogo";
import MysqlLogo from "./svgs/databases/MysqlLogo";
import CssLogo from "./svgs/frontend/CssLogo";
import HtmlLogo from "./svgs/frontend/HtmlLogo";
import NextLogo from "./svgs/frontend/NextLogo";
import ReactLogo from "./svgs/frontend/ReactLogo";
import TailLogo from "./svgs/frontend/TailLogo";


export default function Projects() {
  return (
    <section className="projects bg-[#222222] w-full min-h-screen flex flex-col items-center pt-16 league">
      <h2 className="text-6xl text-white">Projects</h2>

      <div className="flex flex-col lg:flex-row py-16 gap-36 lg:mx-16 items-center justify-center w-full lg:flex-wrap">
        {/* -------------------- */}
        <div className="text-center bg-[#121212] py-3 px-3 shadow-[0_0_0.5rem] w-[28rem] sm:w-[35rem] flex flex-col items-center">

          <h2 className="text-4xl py-6 text-[#ffe66b]"><span className="text-white">Bark</span>Mobb</h2>

          <h5 className="text-white text-lg w-96">React-based e-commerce clothing store, products loaded with Firebase database, access to an admin control with CRUD
            functions, and includes a product viewer</h5>

          <div
            className="BarkMobb h-96 w-[22rem] sm:w-[30rem] bg-center bg-cover sm:border rounded sm:shadow-[0_0_0.5rem] transition duration-500 ease-in-out hover:shadow-white"
          ></div>

          <div>
            <ul className="text-white text-3xl py-6 flex-row flex gap-6 justify-center flex-wrap items-center">
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <ReactLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <NextLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <TailLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <HtmlLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <CssLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <FirebaseLogo att={"w-8 h-8"} />
              </li>

            </ul>

          </div>

          <div className="py-3 flex justify-center items-center gap-6">
            <button className="text-white text-lg border border-[#ffdb29] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#ffdb29] hover:shadow-[0_0_0.5rem] hover:shadow-[#ffda1e]">
              <a target="_blank" href="https://barkmobb.netlify.app/">Look the page</a>
            </button>

            <button className="text-white text-lg border border-[white] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#fff] hover:shadow-[0_0_0.5rem] hover:shadow-[white]">
              <a target="_blank" href="https://github.com/RonnyOl/BarkMobbShop"><GitHubLogo att={"w-8 h-8"}></GitHubLogo></a>
            </button>
          </div>


        </div>
        {/* -------------------- */}

        {/* -------------------- */}
        <div className="text-center bg-[#121212] py-3 px-3 shadow-[0_0_0.5rem] w-[28rem] sm:w-[35rem] flex flex-col items-center">

          <h2 className="text-4xl py-6 text-[#ffe66b]"><span className="text-white">Festi</span>Cool</h2>

          <h5 className="text-white text-lg w-96">Website developed in React, contains a catalog with all the products loaded through rest api, contains a search that filters
            the products by the name or series, and the website contains information about the company.</h5>

          <div

            className="festiCool h-96 w-[22rem] sm:w-[30rem] bg-center bg-cover sm:border rounded sm:shadow-[0_0_0.5rem] transition duration-500 ease-in-out hover:shadow-white"
          ></div>

          <div>
            <ul className="text-white text-3xl py-6 flex-row flex gap-6 justify-center flex-wrap items-center">
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <ReactLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <NextLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <TailLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <HtmlLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <CssLogo att={"w-8 h-8"} />
              </li>

            </ul>

          </div>
          <div className="py-3 flex justify-center items-center gap-6">
            <button className="text-white text-lg border border-[#ffdb29] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#ffdb29] hover:shadow-[0_0_0.5rem] hover:shadow-[#ffda1e]">
              <a target="_blank" href="https://festicoolarg.netlify.app/">Look the page</a>
            </button>

            <button className="text-white text-lg border border-[white] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#fff] hover:shadow-[0_0_0.5rem] hover:shadow-[white]">
              <a target="_blank" href="https://github.com/RonnyOl/festicool_"><GitHubLogo att={"w-8 h-8"}></GitHubLogo></a>
            </button>
          </div>
        </div>
        {/* -------------------- */}

        {/* -------------------- */}
        <div className="text-center bg-[#121212] py-3 px-3 shadow-[0_0_0.5rem] w-[28rem] sm:w-[35rem] flex flex-col items-center">

          <h2 className="text-4xl py-6 text-[#ffe66b]"><span className="text-white">Order</span>Me</h2>

          <h5 className="text-white text-lg w-96">Sample page for Orderme app, a restaurant-oriented company's software where they sell their services. I sold and
            developed it in 3 months, also developed in React</h5>

          <div

            className="orderMe h-96 w-[22rem] sm:w-[30rem] bg-center bg-cover sm:border rounded sm:shadow-[0_0_0.5rem] transition duration-500 ease-in-out hover:shadow-white"
          ></div>

          <div>
            <ul className="text-white text-3xl py-6 flex-row flex gap-6 justify-center flex-wrap items-center">
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <ReactLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <NextLogo att={"w-8 h-8"} />

              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <TailLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <HtmlLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <CssLogo att={"w-8 h-8"} />
              </li>

            </ul>

          </div>
          <div className="py-3 flex justify-center items-center gap-6">
            <button className="text-white text-lg border border-[#ffdb29] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#ffdb29] hover:shadow-[0_0_0.5rem] hover:shadow-[#ffda1e]">
              <a target="_blank" href="https://orderme.app/">Look the page</a>
            </button>

            <button className="text-white text-lg border border-[white] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#fff] hover:shadow-[0_0_0.5rem] hover:shadow-[white]">
              <a target="_blank" href="https://github.com/RonnyOl/ORDERME1.1"><GitHubLogo att={"w-8 h-8"}></GitHubLogo></a>
            </button>
          </div>
        </div>
        {/* -------------------- */}

        {/* -------------------- */}
        <div className="text-center bg-[#121212] py-3 px-3 shadow-[0_0_0.5rem] w-[28rem] sm:w-[35rem] flex flex-col items-center">

          <h2 className="text-4xl py-6 text-[#ffe66b]"><span className="text-white">Vi</span>bras</h2>

          <h5 className="text-white text-lg w-96">This is a E-commerce platform, using Java with Spring and Hibernate frameworks,
            and MySQL for database management. The site includes product listings, supplier information, inventory management,
            and an administrative section</h5>

          <div

            className="vibras h-96 w-[22rem] sm:w-[30rem] bg-center bg-cover sm:border rounded sm:shadow-[0_0_0.5rem] transition duration-500 ease-in-out hover:shadow-white"
          ></div>

          <div>
            <ul className="text-white text-3xl py-6 flex-row flex gap-6 justify-center flex-wrap items-center">

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <SpringLogo att={"w-8 h-8"} />
              </li>
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <HtmlLogo att={"w-8 h-8"} />
              </li>

              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <CssLogo att={"w-8 h-8"} />
              </li>
              <li className="h-16 border-b hover:animate-pulse hover:rounded-lg hover:border-[#ffe66b] hover:border-b-4 p-3 flex items-center gap-2 duration-150 ease-in-out hover:drop-shadow-[0_0px_15px_rgba(255,230,107,0.35)]">
                <MysqlLogo att={"w-8 h-8"} />
              </li>
            </ul>

          </div>
          <div className="py-3 flex justify-center items-center gap-6">

            <button className="text-white text-lg border border-[white] hover:text-[#1e1e1e] transition duration-75 rounded-2xl p-3 w-38 hover:bg-[#fff] hover:shadow-[0_0_0.5rem] hover:shadow-[white]">
              <a target="_blank" href="https://github.com/RonnyOl/grupo-9-OO2-2024"><GitHubLogo att={"w-8 h-8"}></GitHubLogo></a>
            </button>
          </div>
        </div>
        {/* -------------------- */}


      </div>
    </section>
  );
}
