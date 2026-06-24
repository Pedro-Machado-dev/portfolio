import type { Language } from '../App'

type TechnologiesProps = {
  language: Language
}

const technologiesText = {
  en: {
    tag: 'Technologies',
    title: 'Tools and technologies I work with',
    cards: [
      {
        title: 'Programming',
        description: 'C, C++, Python, Java, JavaScript and TypeScript.',
      },
      {
        title: 'Web Development',
        description: 'HTML, CSS, React, Tailwind CSS and Vite.',
      },
      {
        title: 'Embedded Systems',
        description:
          'Arduino, ESP32, RFID, LCD displays, sensors, servo motors and RTC modules.',
      },
      {
        title: 'Electronics and Automation',
        description:
          'Electronics, PLC, Ladder Logic, pneumatics and industrial automation.',
      },
    ],
  },
  pt: {
    tag: 'Tecnologias',
    title: 'Ferramentas e tecnologias que utilizo',
    cards: [
      {
        title: 'Programação',
        description: 'C, C++, Python, Java, JavaScript e TypeScript.',
      },
      {
        title: 'Desenvolvimento Web',
        description: 'HTML, CSS, React, Tailwind CSS e Vite.',
      },
      {
        title: 'Sistemas Embarcados',
        description:
          'Arduino, ESP32, RFID, displays LCD, sensores, servo motores e módulos RTC.',
      },
      {
        title: 'Eletrônica e Automação',
        description:
          'Eletrônica, CLP, linguagem Ladder, pneumática e automação industrial.',
      },
    ],
  },
}

function Technologies({ language }: TechnologiesProps) {
  const text = technologiesText[language]

  return (
    <section id="technologies" className="technologies section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <div className="tech-grid">
        {text.cards.map((card) => (
          <div className="tech-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies