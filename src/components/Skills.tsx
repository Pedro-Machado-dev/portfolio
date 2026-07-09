import type { Language } from '../App'
import type { IconType } from 'react-icons'
import {
  LuCode,
  LuGlobe,
  LuCpu,
  LuBinary,
  LuWrench,
  LuLanguages,
} from 'react-icons/lu'

type SkillsProps = {
  language: Language
}

type SkillCategory = {
  icon: IconType
  title: string
  items: string[]
}

type LanguageSkill = {
  name: string
  levelLabel: string
  level: number
}

type SkillsContent = {
  tag: string
  title: string
  categories: SkillCategory[]
  languagesTitle: string
  languages: LanguageSkill[]
}

const skillsText: Record<Language, SkillsContent> = {
  en: {
    tag: 'Skills',
    title: 'Skills and competencies',
    languagesTitle: 'Languages',
    categories: [
      {
        icon: LuCode,
        title: 'Programming',
        items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
      },
      {
        icon: LuGlobe,
        title: 'Web Development',
        items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Vite'],
      },
      {
        icon: LuCpu,
        title: 'Embedded Systems',
        items: ['Arduino', 'ESP32', 'RFID', 'LCD', 'Sensors', 'RTC'],
      },
      {
        icon: LuBinary,
        title: 'Data Structures & Algorithms',
        items: ['Binary Search Tree', 'Hashing', 'Recursion', 'Sorting', 'Graphs'],
      },
      {
        icon: LuWrench,
        title: 'Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Arduino IDE'],
      },
      {
        icon: LuLanguages,
        title: 'Electronics & Automation',
        items: ['Electronics', 'PLC', 'Ladder Logic', 'Pneumatics'],
      },
    ],
    languages: [
      { name: 'Portuguese', levelLabel: 'Native', level: 100 },
      { name: 'English', levelLabel: 'Advanced', level: 90 },
      { name: 'Spanish', levelLabel: 'Intermediate', level: 60 },
    ],
  },
  pt: {
    tag: 'Habilidades',
    title: 'Habilidades e competências',
    languagesTitle: 'Idiomas',
    categories: [
      {
        icon: LuCode,
        title: 'Programação',
        items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
      },
      {
        icon: LuGlobe,
        title: 'Desenvolvimento Web',
        items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Vite'],
      },
      {
        icon: LuCpu,
        title: 'Sistemas Embarcados',
        items: ['Arduino', 'ESP32', 'RFID', 'LCD', 'Sensores', 'RTC'],
      },
      {
        icon: LuBinary,
        title: 'Estruturas de Dados e Algoritmos',
        items: ['Árvore Binária', 'Hashing', 'Recursão', 'Ordenação', 'Grafos'],
      },
      {
        icon: LuWrench,
        title: 'Ferramentas',
        items: ['Git', 'GitHub', 'VS Code', 'Arduino IDE'],
      },
      {
        icon: LuLanguages,
        title: 'Eletrônica e Automação',
        items: ['Eletrônica', 'CLP', 'Linguagem Ladder', 'Pneumática'],
      },
    ],
    languages: [
      { name: 'Português', levelLabel: 'Nativo', level: 100 },
      { name: 'Inglês', levelLabel: 'Avançado', level: 90 },
      { name: 'Espanhol', levelLabel: 'Intermediário', level: 60 },
    ],
  },
}

function Skills({ language }: SkillsProps) {
  const text = skillsText[language]

  return (
    <section id="education" className="skills section">
      <p className="section-tag">{text.tag}</p>

      <h2 className="section-title">{text.title}</h2>

      <div className="skills-grid">
        {text.categories.map((category) => {
          const Icon = category.icon

          return (
            <div className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <span className="skill-card-icon">
                  <Icon />
                </span>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          )
        })}

        <div className="skill-card skill-card--languages">
          <div className="skill-card-header">
            <span className="skill-card-icon">
              <LuLanguages />
            </span>
            <h3>{text.languagesTitle}</h3>
          </div>

          <div className="skill-languages">
            {text.languages.map((lang) => (
              <div className="skill-language" key={lang.name}>
                <div className="skill-language-top">
                  <span className="skill-language-name">{lang.name}</span>
                  <span className="skill-language-level">{lang.levelLabel}</span>
                </div>
                <div className="skill-language-bar">
                  <div
                    className="skill-language-fill"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills