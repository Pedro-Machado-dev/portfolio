import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export type Language = 'en' | 'pt'

function App() {
  const [language, setLanguage] = useState<Language>('en')

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <main className="portfolio">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Timeline language={language} />
      <Technologies language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}

export default App