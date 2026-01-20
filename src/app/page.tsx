import React from 'react'
import About from './Components/About'
import HeroSection from './Components/HeroSection'
// import Service from './Components/Service'
import Project from './Components/Project'
import TableOfContentPage from './Components/Tableofcontent'
import ContactPage from './Components/Contact'
import Footer from './Components/Footer'

export default function page() {
  return (
    <div >
      <HeroSection/>
      <TableOfContentPage/>
      <About/>
      {/* <Service/> */}
      <Project/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}