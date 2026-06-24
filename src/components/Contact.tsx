import type { Language } from '../App'

type ContactProps = {
  language: Language
}

const contactText = {
  en: {
    tag: 'Contact',
    title: "Let's connect",
    description:
      'I am open to internship opportunities, academic projects and professional connections related to software development, electronics, embedded systems and automation.',
    emailButton: 'Send Email',
    linkedinButton: 'LinkedIn',
    githubButton: 'GitHub',
  },
  pt: {
    tag: 'Contato',
    title: 'Vamos nos conectar',
    description:
      'Estou aberto a oportunidades de estágio, projetos acadêmicos e conexões profissionais relacionadas a desenvolvimento de software, eletrônica, sistemas embarcados e automação.',
    emailButton: 'Enviar Email',
    linkedinButton: 'LinkedIn',
    githubButton: 'GitHub',
  },
}

function Contact({ language }: ContactProps) {
  const text = contactText[language]

  return (
    <section id="contact" className="contact section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <p className="section-description">{text.description}</p>

      <div className="contact-buttons">
        <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=pedromara2709@gmail.com"
         className="button primary"
         target="_blank"
         rel="noreferrer"
        >
         {text.emailButton}
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
      </div>
    </section>
  )
}

export default Contact