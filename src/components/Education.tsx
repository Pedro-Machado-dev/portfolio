import type { Language } from '../App'

type EducationProps = {
  language: Language
}

type EducationItem = {
  title: string
  institution: string
  period: string
  description: string
}

type EducationContent = {
  tag: string
  title: string
  items: EducationItem[]
}

const educationText: Record<Language, EducationContent> = {
  en: {
    tag: 'Education',
    title: 'Academic and technical background',
    items: [
      {
        title: 'Software Engineering',
        institution: 'Inatel - Instituto Nacional de Telecomunicações',
        period: '2025 - Current',
        description:
          'Undergraduate program focused on software development, programming, algorithms, data structures and computational systems.',
      },
      {
        title: 'Electronics Technician',
        institution: 'SENAI - Pouso Alegre',
        period: '01/2023 - 10/2024',
        description:
          'Technical training in electronics, circuits, automation, embedded systems, maintenance and practical hardware projects.',
      },
      {
        title: 'English Course',
        institution: 'CNA',
        period: '2019 - 2025',
        description:
          'English language course focused on communication, reading, writing and understanding technical content.',
      },
      {
        title: 'Industrial Automation Background',
        institution: 'SENAI',
        period: 'Technical training',
        description:
          'Practical experience with PLC programming using Ladder Logic, pneumatics, electropneumatic systems and industrial automation concepts.',
      },
    ],
  },

  pt: {
    tag: 'Formação',
    title: 'Formação acadêmica e técnica',
    items: [
      {
        title: 'Engenharia de Software',
        institution: 'Inatel - Instituto Nacional de Telecomunicações',
        period: '2025 - Atualmente',
        description:
          'Graduação voltada ao desenvolvimento de software, programação, algoritmos, estruturas de dados e sistemas computacionais.',
      },
      {
        title: 'Técnico em Eletrônica',
        institution: 'SENAI - Pouso Alegre',
        period: '01/2023 - 10/2024',
        description:
          'Formação técnica em eletrônica, circuitos, automação, sistemas embarcados, manutenção e projetos práticos de hardware.',
      },
      {
        title: 'Curso de Inglês',
        institution: 'CNA',
        period: '2019 - 2025',
        description:
          'Curso de inglês com foco em comunicação, leitura, escrita e compreensão de conteúdos técnicos.',
      },
      {
        title: 'Base em Automação Industrial',
        institution: 'SENAI',
        period: 'Formação técnica',
        description:
          'Experiência prática com programação de CLP utilizando linguagem Ladder, pneumática, sistemas eletropneumáticos e conceitos de automação industrial.',
      },
    ],
  },
}

function Education({ language }: EducationProps) {
  const text = educationText[language]

  return (
    <section id="education" className="education section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <div className="education-list">
        {text.items.map((item) => (
          <div className="education-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-period">{item.period}</p>
            </div>

            <p className="education-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education