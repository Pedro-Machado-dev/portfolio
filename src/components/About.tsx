import type { Language } from '../App'

type AboutProps = {
  language: Language
}

const aboutText = {
  en: {
    tag: 'About Me',
    title: 'Connecting software and hardware',
    firstParagraph:
      'I am a Software Engineering student at Inatel and an Electronics Technician, with experience in academic and technical projects involving programming, embedded systems, electronics and automation.',
    secondParagraph:
      'My main interests include Web Development, C/C++, Arduino, ESP32, RFID systems, industrial automation and the integration between software and hardware.',
  },
  pt: {
    tag: 'Sobre Mim',
    title: 'Conectando software e hardware',
    firstParagraph:
      'Sou estudante de Engenharia de Software no Inatel e Técnico em Eletrônica, com experiência em projetos acadêmicos e técnicos envolvendo programação, sistemas embarcados, eletrônica e automação.',
    secondParagraph:
      'Meus principais interesses incluem Desenvolvimento Web, C/C++, Arduino, ESP32, sistemas RFID, automação industrial e a integração entre software e hardware.',
  },
}

function About({ language }: AboutProps) {
  const text = aboutText[language]

  return (
    <section id="about" className="about section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <p className="section-description">{text.firstParagraph}</p>

      <p className="section-description">{text.secondParagraph}</p>
    </section>
  )
}

export default About