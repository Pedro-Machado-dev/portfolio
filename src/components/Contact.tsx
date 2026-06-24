import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import type { Language } from '../App'

type ContactProps = {
  language: Language
}

const EMAILJS_SERVICE_ID = 'service_phsm2709'
const EMAILJS_TEMPLATE_ID = 'template_7dksyqg'
const EMAILJS_PUBLIC_KEY = 'GAXGSas_BWSBrJ0jd'

const contactText = {
  en: {
    tag: 'Contact',
    title: "Let's connect",
    description:
      'I am open to internship opportunities, academic projects and professional connections related to software development, electronics, embedded systems and automation.',
    location: 'Brazil, Minas Gerais',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    button: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    directEmail: 'Email',
  },
  pt: {
    tag: 'Contato',
    title: 'Vamos conversar',
    description:
      'Estou aberto a oportunidades de estágio, projetos acadêmicos e conexões profissionais relacionadas a desenvolvimento de software, eletrônica, sistemas embarcados e automação.',
    location: 'Brasil, Minas Gerais',
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    button: 'Enviar mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso!',
    error: 'Algo deu errado. Tente novamente.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    directEmail: 'Email',
  },
}

function Contact({ language }: ContactProps) {
  const text = contactText[language]
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formRef.current) {
      return
    }

    setStatus('sending')

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )
      .then(() => {
        setStatus('success')
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="section-tag">{text.tag}</p>

          <h2 className="section-title">{text.title}</h2>

          <p className="section-description">{text.description}</p>

          <div className="contact-location">
            <MdLocationOn />
            <span>{text.location}</span>
          </div>

          <div className="contact-socials">
            <a
              href="mailto:pedromara2709@gmail.com"
              className="contact-social-link"
            >
              <MdEmail />
              {text.directEmail}
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-machado-dev/"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              {text.linkedin}
            </a>

            <a
              href="https://github.com/Pedro-Machado-dev"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              {text.github}
            </a>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder={text.name}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder={text.email}
            required
          />

          <textarea
            name="message"
            placeholder={text.message}
            rows={7}
            required
          />

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? text.sending : text.button}
          </button>

          {status === 'success' && (
            <p className="form-message success">{text.success}</p>
          )}

          {status === 'error' && (
            <p className="form-message error">{text.error}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact