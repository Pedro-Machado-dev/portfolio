import type { Language } from '../App'

type ProjectsProps = {
  language: Language
}

type Project = {
  title: string
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

const projectsText: Record<Language, ProjectsContent> = {
  en: {
    tag: 'Projects',
    title: 'Featured projects',
    button: 'View on GitHub',
    projects: [
      {
        title: 'C++ Pokédex',
        description:
          'Academic C++ project developed to manage Pokémon, cities and routes using data structures such as binary search trees, adjacency lists and graph traversal.',
        technologies: ['C++', 'Data Structures', 'Graphs', 'Binary Search Tree'],
        githubLink: 'https://github.com/Pedro-Machado-dev/pokedex-cpp',
      },
      {
        title: 'Arduino Elevator System',
        description:
          'Arduino-based elevator control system developed to simulate a multi-floor elevator using push buttons, position switches, an LCD display and motor direction control.',
        technologies: ['Arduino', 'C/C++', 'LCD Display', 'Embedded Systems'],
        githubLink: 'https://github.com/Pedro-Machado-dev/arduino-elevator-system',
      },
      {
        title: 'Arduino Electronic Safe',
        description:
          'Arduino-based electronic safe simulation using a numeric password system, LCD display, potentiometer, LEDs and servo motor lock control.',
        technologies: ['Arduino', 'Servo Motor', 'LCD Display', 'Electronics'],
        githubLink: 'https://github.com/Pedro-Machado-dev/arduino-electronic-safe',
      },
      {
        title: 'ESP32 RFID Machine Access Control',
        description:
          'ESP32-based RFID access control system designed to manage the power supply of a machine through a physical control box, using RFID cards, EEPROM storage, LCD display, RTC module and relay control.',
        technologies: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'Relay Control'],
        githubLink: 'https://github.com/Pedro-Machado-dev/esp32-rfid-access-control',
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
        description:
          'Projeto acadêmico em C++ desenvolvido para gerenciar Pokémon, cidades e rotas utilizando estruturas de dados como árvores binárias de busca, listas de adjacência e percurso em grafos.',
        technologies: ['C++', 'Estruturas de Dados', 'Grafos', 'Árvore Binária de Busca'],
        githubLink: 'https://github.com/Pedro-Machado-dev/pokedex-cpp',
      },
      {
        title: 'Sistema de Elevador com Arduino',
        description:
          'Sistema de controle de elevador com Arduino desenvolvido para simular um elevador de múltiplos andares usando botões, chaves de posição, display LCD e controle de direção do motor.',
        technologies: ['Arduino', 'C/C++', 'Display LCD', 'Sistemas Embarcados'],
        githubLink: 'https://github.com/Pedro-Machado-dev/arduino-elevator-system',
      },
      {
        title: 'Cofre Eletrônico com Arduino',
        description:
          'Simulação de cofre eletrônico com Arduino utilizando sistema de senha numérica, display LCD, potenciômetro, LEDs e controle de trava com servo motor.',
        technologies: ['Arduino', 'Servo Motor', 'Display LCD', 'Eletrônica'],
        githubLink: 'https://github.com/Pedro-Machado-dev/arduino-electronic-safe',
      },
      {
        title: 'Controle de Acesso RFID com ESP32',
        description:
          'Sistema de controle de acesso RFID com ESP32 desenvolvido para gerenciar a alimentação de uma máquina por meio de uma caixa física, utilizando cartões RFID, armazenamento em EEPROM, display LCD, módulo RTC e controle por relé.',
        technologies: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'Controle por Relé'],
        githubLink: 'https://github.com/Pedro-Machado-dev/esp32-rfid-access-control',
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

      <div className="projects-grid">
        {text.projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={project.githubLink}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              {text.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects