type Project = {
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

const projects: Project[] = [
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
]

function Projects() {
  return (
    <section id="projects" className="projects section">
      <p className="section-tag">Projects</p>

      <h2 className="section-title">Featured projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
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
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects