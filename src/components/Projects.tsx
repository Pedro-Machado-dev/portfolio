import type { Language } from '../App'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type ProjectsProps = {
  language: Language
}

type WebProject = {
  title: string
  image: string
  siteLink: string
  githubLink: string
}

type Project = {
  title: string
  category: string
  status: string
  icon: string
  description: string
  technologies: string[]
  githubLink: string
}

type ProjectsContent = {
  tag: string
  title: string
  button: string
  projects: Project[]
}

const webProjects: WebProject[] = [
  {
    title: 'Maria Luiza Portfolio',
    image: '/projects/maria-luiza-portfolio.jpeg',
    siteLink: 'https://marialopes.vercel.app',
    githubLink: 'https://github.com/Pedro-Machado-dev/portfolio-maria-luiza',
  },
]

const projectsText: Record<Language, ProjectsContent> = {
  en: {
    tag: 'Projects',
    title: 'Featured projects',
    button: 'View on GitHub',
    projects: [
      {
        title: 'C++ Pokédex',
        category: 'Data Structures',
        status: 'Academic Project',
        icon: 'C++',
        description:
          'Academic C++ project developed to manage Pokémon, cities and routes using data structures such as binary search trees, adjacency lists and graph traversal.',
        technologies: ['C++', 'Data Structures', 'Graphs', 'Binary Search Tree'],
        githubLink: 'https://github.com/Pedro-Machado-dev/pokedex-cpp',
      },
      {
        title: 'Arduino Elevator System',
        category: 'Embedded Systems',
        status: 'Simulation',
        icon: 'ARD',
        description:
          'Arduino-based elevator control system developed to simulate a multi-floor elevator using push buttons, position switches, an LCD display and motor direction control.',
        technologies: ['Arduino', 'C/C++', 'LCD Display', 'Embedded Systems'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/arduino-elevator-system',
      },
      {
        title: 'Arduino Electronic Safe',
        category: 'Electronics',
        status: 'Simulation',
        icon: 'SAFE',
        description:
          'Arduino-based electronic safe simulation using a numeric password system, LCD display, potentiometer, LEDs and servo motor lock control.',
        technologies: ['Arduino', 'Servo Motor', 'LCD Display', 'Electronics'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/arduino-electronic-safe',
      },
      {
        title: 'ESP32 RFID Machine Access Control',
        category: 'Security and Automation',
        status: 'TCC Project',
        icon: 'ESP',
        description:
          'ESP32-based RFID access control system designed to manage the power supply of a machine through a physical control box, using RFID cards, EEPROM storage, LCD display, RTC module and relay control.',
        technologies: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'Relay Control'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/esp32-rfid-access-control',
      },
    ],
  },

  pt: {
    tag: 'Projetos',
    title: 'Projetos em destaque',
    button: 'Ver no GitHub',
    projects: [
      {
        title: 'Pokédex em C++',
        category: 'Estruturas de Dados',
        status: 'Projeto Acadêmico',
        icon: 'C++',
        description:
          'Projeto acadêmico em C++ desenvolvido para gerenciar Pokémon, cidades e rotas utilizando estruturas de dados como árvores binárias de busca, listas de adjacência e percurso em grafos.',
        technologies: ['C++', 'Estruturas de Dados', 'Grafos', 'Árvore Binária'],
        githubLink: 'https://github.com/Pedro-Machado-dev/pokedex-cpp',
      },
      {
        title: 'Sistema de Elevador com Arduino',
        category: 'Sistemas Embarcados',
        status: 'Simulação',
        icon: 'ARD',
        description:
          'Sistema de controle de elevador com Arduino desenvolvido para simular um elevador de múltiplos andares usando botões, chaves de posição, display LCD e controle de direção do motor.',
        technologies: ['Arduino', 'C/C++', 'Display LCD', 'Sistemas Embarcados'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/arduino-elevator-system',
      },
      {
        title: 'Cofre Eletrônico com Arduino',
        category: 'Eletrônica',
        status: 'Simulação',
        icon: 'SAFE',
        description:
          'Simulação de cofre eletrônico com Arduino utilizando sistema de senha numérica, display LCD, potenciômetro, LEDs e controle de trava com servo motor.',
        technologies: ['Arduino', 'Servo Motor', 'Display LCD', 'Eletrônica'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/arduino-electronic-safe',
      },
      {
        title: 'Controle de Acesso RFID com ESP32',
        category: 'Segurança e Automação',
        status: 'Projeto de TCC',
        icon: 'ESP',
        description:
          'Sistema de controle de acesso RFID com ESP32 desenvolvido para gerenciar a alimentação de uma máquina por meio de uma caixa física, utilizando cartões RFID, EEPROM, display LCD, módulo RTC e controle por relé.',
        technologies: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'Controle por Relé'],
        githubLink:
          'https://github.com/Pedro-Machado-dev/esp32-rfid-access-control',
      },
    ],
  },
}

function Projects({ language }: ProjectsProps) {
  const text = projectsText[language]

  return (
    <section id="projects" className="projects section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <div className="web-projects">
      <h3 className="projects-subtitle">
        {language === 'pt' ? 'Sites e Portfólios' : 'Websites & Portfolios'}
      </h3>

      <div className="web-projects-grid">
        {webProjects.map((project) => (
          <article className="web-project-card" key={project.title}>
            <div className="web-project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="web-project-image"
              />
            </div>

            <div className="web-project-card-footer">
              <h3>{project.title}</h3>

              <div className="web-project-actions">
                <a
                href={project.siteLink}
                className="web-project-button"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                title={language === 'pt' ? 'Abrir site' : 'Open website'}
              >
                <FaExternalLinkAlt />
              </a>

              <a
                href={project.githubLink}
                className="web-project-button"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} repository`}
                title="GitHub"
              >
                <FaGithub />
              </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    <h3 className="projects-subtitle">
      {language === 'pt' ? 'Projetos Acadêmicos' : 'Academic Projects'}
    </h3>

      <div className="projects-grid">
        {text.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <div className="project-icon">{project.icon}</div>

              <div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="project-status">{project.status}</span>

              <a
                href={project.githubLink}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                {text.button}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects