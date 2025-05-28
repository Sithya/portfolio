"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Timeline from "./components/timeline"
import Contact from "./components/contact"
import Footer from "./components/footer"
import LoadingScreen from "./components/loading-screen"
import CVDownload from "./components/cv-download"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <CVDownload />
      </main>
      <Footer />
    </div>
  )
}
