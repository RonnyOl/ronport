import React from 'react'

import CardMe from './CardMe'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import Projects from './Projects'
import Footer from './Footer'

export default function Inicio() {
  return (
    <>
    <Navbar></Navbar>
    <CardMe></CardMe>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}
