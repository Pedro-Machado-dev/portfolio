import { FaCss3Alt } from 'react-icons/fa'
import { LuTriangle } from 'react-icons/lu'
import { SiReact, SiTypescript, SiVite } from 'react-icons/si'
import type { Language } from '../App'

type FooterProps = {
  language: Language
}

const footerText = {
  en: {
    name: 'Pedro Machado',
    role: 'Software Engineering Student & Electronics Technician',
    builtWith: 'Built with',
    styledWith: 'Styled with',
    deployedOn: 'Deployed on',
    copyright: '© 2026 Pedro Henrique Silva Machado. All rights reserved.',
  },
  pt: {
    name: 'Pedro Machado',
    role: 'Estudante de Engenharia de Software & Técnico em Eletrônica',
    builtWith: 'Construído com',
    styledWith: 'Estilizado com',
    deployedOn: 'Publicado na',
    copyright: '© 2026 Pedro Henrique Silva Machado. Todos os direitos reservados.',
  },
}

function Footer({ language }: FooterProps) {
  const text = footerText[language]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{text.name}</h3>
          <p>{text.role}</p>
        </div>

        <div className="footer-stack">
          <p>
            {text.builtWith}
            <span>
              <SiReact /> React
            </span>
            <span>
              <SiTypescript /> TypeScript
            </span>
            <span>
              <SiVite /> Vite
            </span>
          </p>

          <p>
            {text.styledWith}
            <span>
              <FaCss3Alt /> CSS
            </span>
          </p>

          <p>
            {text.deployedOn}
            <span>
              <LuTriangle /> Vercel
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{text.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer