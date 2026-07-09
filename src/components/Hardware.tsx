import type { Language } from '../App'

type HardwareProps = {
  language: Language
}

type HardwareItem = {
  category: string
  title: string
  description: string
  image: string
  tech: string[]
}

type HardwareContent = {
  tag: string
  title: string
  items: HardwareItem[]
}

const hardwareText: Record<Language, HardwareContent> = {
  en: {
    tag: 'Hardware & Embedded',
    title: 'Hands-on hardware',
    items: [
      {
        category: 'Final Project · SafeGuard',
        title: 'RFID Machine Access Control',
        description:
          'My technical course final project: an ESP32-based control box that manages machine access through RFID cards, with an LCD display, real-time clock and relay control to lock or unlock equipment.',
        image: '/projects/rfid-tcc.jpg',
        tech: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'LCD', 'Relay'],
      },
      {
        category: 'Electronics Practice',
        title: 'PCB Assembly & Soldering',
        description:
          'A hands-on exercise in printed circuit board fabrication and manual soldering, assembling components onto a PCB to practice and refine electronics assembly techniques.',
        image: '/projects/pcb-board.jpg',
        tech: ['PCB', 'Soldering', 'Electronics', 'Components'],
      },
    ],
  },
  pt: {
    tag: 'Hardware & Embarcados',
    title: 'Mão na massa com hardware',
    items: [
      {
        category: 'TCC · SafeGuard',
        title: 'Controle de Acesso RFID',
        description:
          'Meu projeto de conclusão do curso técnico: uma caixa de controle baseada em ESP32 que gerencia o acesso a máquinas por cartões RFID, com display LCD, relógio em tempo real e controle por relé para bloquear ou desbloquear equipamentos.',
        image: '/projects/rfid-tcc.jpg',
        tech: ['ESP32', 'RFID', 'EEPROM', 'RTC', 'LCD', 'Relé'],
      },
      {
        category: 'Prática de Eletrônica',
        title: 'Montagem e Soldagem de PCB',
        description:
          'Um exercício prático de fabricação de placa de circuito impresso e soldagem manual, montando componentes em uma PCB para praticar e aprimorar técnicas de montagem eletrônica.',
        image: '/projects/pcb-board.jpg',
        tech: ['PCB', 'Soldagem', 'Eletrônica', 'Componentes'],
      },
    ],
  },
}

function Hardware({ language }: HardwareProps) {
  const text = hardwareText[language]

  return (
    <section id="hardware" className="hardware section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <div className="hardware-list">
        {text.items.map((item, index) => (
          <article
            className={`hardware-card ${
              index % 2 === 1 ? 'hardware-card--reverse' : ''
            }`}
            key={item.title}
          >
            <div className="hardware-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="hardware-image"
                loading="lazy"
              />
            </div>

            <div className="hardware-body">
              <p className="hardware-category">{item.category}</p>
              <h3 className="hardware-card-title">{item.title}</h3>
              <p className="hardware-description">{item.description}</p>

              <div className="hardware-tech">
                {item.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Hardware