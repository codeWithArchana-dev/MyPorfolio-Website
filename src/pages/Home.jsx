import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Snapshot from '../components/Snapshot.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Certificates from '../components/Certificates.jsx'
import Education from '../components/Education.jsx'
import GitHubJourney from '../components/GitHubJourney.jsx'
import WhyHireMe from '../components/WhyHireMe.jsx'
import RecruiterProfile from '../components/RecruiterProfile.jsx'
import Contact from '../components/Contact.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

export default function Home() {
  const { state } = useLocation()

  // Honour a section target passed when navigating back from a project page.
  useEffect(() => {
    if (!state?.scrollTo) return
    const id = state.scrollTo
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [state])

  return (
    <>
      <Hero />
      <Snapshot />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Education />
      <GitHubJourney />
      <WhyHireMe />
      <RecruiterProfile />
      <Contact />
      <FinalCTA />
    </>
  )
}
