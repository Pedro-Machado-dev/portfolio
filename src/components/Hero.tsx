import type { Language } from '../App'

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

const techItems = [
  'React',
  'TypeScript',
  'JavaScript',
  'C++',
  'Python',
  'Arduino',
  'ESP32',
  'Ladder',
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
    </div>

    <div className="hero-visual" aria-hidden="true">
  <div className="tech-showcase">
    {techItems.map((tech, index) => (
      <span className={`floating-tech tech-${index}`} key={tech}>
        {tech}
      </span>
    ))}
  </div>
</div>
  </section>
)
}

export default Hero