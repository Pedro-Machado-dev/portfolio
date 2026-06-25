import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  SiReact,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

import { FaCss3Alt } from 'react-icons/fa'
import { LuTriangle } from 'react-icons/lu'
import type { Language } from '../App'

type FooterProps = {
  language: Language
}

const footerText = {
  en: {
    builtWith: 'Built with',
    styledWith: 'Styled with',
    deployedOn: 'Deployed on',
    copyright: '© 2026 Pedro Henrique Silva Machado. All rights reserved.',
  },
  pt: {
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
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/pedro-machado-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Pedro-Machado-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="mailto:pedromara2709@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
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