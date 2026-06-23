import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

export default App