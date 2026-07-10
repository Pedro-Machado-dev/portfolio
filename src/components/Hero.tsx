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
  SiVite,
} from 'react-icons/si'
import { LuCpu, LuWorkflow, LuMicrochip, LuDownload, LuRadio } from 'react-icons/lu'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import FluidBackground from './FluidBackground'

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

// Fileira 1 — software (desliza para a esquerda)
const softwareItems: TechItem[] = [
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiVite, name: 'Vite' },
  { icon: SiPython, name: 'Python' },
  { icon: SiOpenjdk, name: 'Java' },
]

// Fileira 2 — hardware e automação (desliza para a direita)
const hardwareItems: TechItem[] = [
  { icon: LuMicrochip, name: 'ESP32' },
  { icon: SiArduino, name: 'Arduino' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: LuCpu, name: 'PLC' },
  { icon: LuWorkflow, name: 'Ladder' },
  { icon: LuRadio, name: 'RFID' },
]

function TechRow({ items, direction }: { items: TechItem[]; direction: 'ltr' | 'rtl' }) {
  // Duplica os itens pra criar o loop infinito sem "buraco".
  const loop = [...items, ...items]

  return (
    <div className={`tech-row tech-row--${direction}`}>
      <div className="tech-row-track">
        {loop.map((tech, index) => {
          const Icon = tech.icon

          return (
            <span className="tech-chip" key={`${tech.name}-${index}`}>
              <Icon className="tech-chip-icon" />
              <span>{tech.name}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

function Hero({ language }: HeroProps) {
  const text = heroText[language]

  return (
    <section id="home" className="hero">
      <FluidBackground />

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
            href="https://github.com/Pedro-Machado-dev"
            className="button icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label={text.githubButton}
            title={text.githubButton}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-machado-dev/"
            className="button icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label={text.linkedinButton}
            title={text.linkedinButton}
          >
            <FaLinkedin />
          </a>

          <a
            href="/pedro-machado-resume.pdf"
            className="button icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label={text.resumeButton}
            title={text.resumeButton}
          >
            <LuDownload />
          </a>
        </div>

        <div className="tech-rows" aria-hidden="true">
          <TechRow items={softwareItems} direction="rtl" />
          <TechRow items={hardwareItems} direction="ltr" />
        </div>
      </div>
    </section>
  )
}

export default Hero
