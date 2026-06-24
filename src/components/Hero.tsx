import type { Language } from '../App'

import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiArduino,
} from 'react-icons/si'
import { LuCpu, LuWorkflow, LuMicrochip } from 'react-icons/lu'

type HeroProps = {
  language: Language
}

const heroText = {
  en: {
    tag: 'Software • Electronics • Embedded Systems',
    name: 'Pedro Machado',
    title: 'Software Engineering Student & Electronics Technician',
    description:
      'I am a Software Engineering student and Electronics Technician focused on Web Development, Embedded Systems, Electronics and Automation.',
    projectsButton: 'View Projects',
    githubButton: 'GitHub',
    linkedinButton: 'LinkedIn',
    resumeButton: 'Download CV',
  },
  pt: {
    tag: 'Software • Eletrônica • Sistemas Embarcados',
    name: 'Pedro Machado',
    title: 'Estudante de Engenharia de Software & Técnico em Eletrônica',
    description:
      'Sou estudante de Engenharia de Software e Técnico em Eletrônica, com foco em Desenvolvimento Web, Sistemas Embarcados, Eletrônica e Automação.',
    projectsButton: 'Ver Projetos',
    githubButton: 'GitHub',
    linkedinButton: 'LinkedIn',
    resumeButton: 'Baixar Currículo',
  },
}

type TechItem = {
  icon: IconType
  name: string
}

const techItems: TechItem[] = [
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: SiPython, name: 'Python' },
  { icon: SiOpenjdk, name: 'Java' },
  { icon: SiArduino, name: 'Arduino' },
  { icon: LuMicrochip, name: 'ESP32' },
  { icon: LuWorkflow, name: 'Ladder' },
  { icon: LuCpu, name: 'PLC' },
]

function Hero({ language }: HeroProps) {
  const text = heroText[language]

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">{text.tag}</p>

        <h1>{text.name}</h1>

        <h2>{text.title}</h2>

        <p className="hero-description">{text.description}</p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            {text.projectsButton}
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-machado-dev/"
            className="button secondary"
            target="_blank"
            rel="noreferrer"
          >
            {text.linkedinButton}
          </a>

          <a
            href="https://github.com/Pedro-Machado-dev"
            className="button secondary"
            target="_blank"
            rel="noreferrer"
          >
            {text.githubButton}
          </a>

          <a
            href="/pedro-machado-resume.pdf"
            className="button secondary"
            target="_blank"
            rel="noreferrer"
          >
            {text.resumeButton}
          </a>
        </div>

        <div className="tech-marquee" aria-hidden="true">
  <div className="tech-marquee-track">
    {[...techItems, ...techItems].map((tech, index) => {
      const Icon = tech.icon

      return (
        <span className="tech-marquee-item" key={`${tech.name}-${index}`}>
          <Icon className="tech-real-icon" />
          <span>{tech.name}</span>
        </span>
      )
    })}
  </div>
</div>
      </div>
    </section>
  )
}

export default Hero