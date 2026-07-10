import type { Language } from '../App'
import { MdGTranslate } from 'react-icons/md'

type NavbarProps = {
  language: Language
  toggleLanguage: () => void
}

const navbarText = {
  en: {
    logo: 'Pedro Machado',
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    button: 'PT',
  },
  pt: {
    logo: 'Pedro Machado',
    home: 'Início',
    about: 'Sobre',
    journey: 'Trajetória',
    projects: 'Projetos',
    education: 'Formação',
    contact: 'Contato',
    button: 'EN',
  },
}

function Navbar({ language, toggleLanguage }: NavbarProps) {
  const text = navbarText[language]

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        {text.logo}
      </a>

      <nav className="nav-links">
        <a href="#home">{text.home}</a>
        <a href="#about">{text.about}</a>
        <a href="#journey">{text.journey}</a>
        <a href="#projects">{text.projects}</a>
        <a href="#skills">{text.education}</a>
        <a href="#contact">{text.contact}</a>
      </nav>

      <button
        className="language-button"
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'}
        title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'}
      >
        <MdGTranslate className="language-icon" />
        <span>{language === 'en' ? 'PT' : 'EN'}</span>
      </button>
    </header>
  )
}

export default Navbar
