import { useEffect, useRef, useState } from 'react'
import type { Language } from '../App'
import { LuCpu, LuGraduationCap, LuLanguages, LuBriefcase, LuCode } from 'react-icons/lu'
import { FaMicrochip } from 'react-icons/fa'
import CircuitBackground from './CircuitBackground'

type TimelineProps = {
  language: Language
}

type MarkerType = 'education' | 'project' | 'achievement'

type TimelineItem = {
  year: string
  title: string
  subtitle: string
  type: MarkerType
  icon: 'lang' | 'cpu' | 'chip' | 'school' | 'work' | 'code'
}

type TimelineContent = {
  tag: string
  title: string
  legend: { education: string; project: string; achievement: string }
  items: TimelineItem[]
}

const iconMap = {
  lang: LuLanguages,
  cpu: LuCpu,
  chip: FaMicrochip,
  school: LuGraduationCap,
  work: LuBriefcase,
  code: LuCode,
}

const timelineText: Record<Language, TimelineContent> = {
  en: {
    tag: 'My Journey',
    title: 'The path so far',
    legend: {
      education: 'Education',
      project: 'Project',
      achievement: 'Experience',
    },
    items: [
      {
        year: '2019',
        title: 'English at CNA',
        subtitle: 'Language studies until 2025 — advanced level',
        type: 'education',
        icon: 'lang',
      },
      {
        year: '2023',
        title: 'Electronics Technician',
        subtitle: 'SENAI Pouso Alegre — where my journey began',
        type: 'education',
        icon: 'cpu',
      },
      {
        year: '2024',
        title: 'Final Project — RFID Access Control',
        subtitle: 'ESP32-based system, concluding the technical course',
        type: 'project',
        icon: 'chip',
      },
      {
        year: '2025',
        title: 'Software Engineering',
        subtitle: 'Started at Inatel — currently in progress',
        type: 'education',
        icon: 'school',
      },
      {
        year: '2025',
        title: 'Start_Inatel Scholarship',
        subtitle: 'Teaching programming and electronics workshops',
        type: 'achievement',
        icon: 'work',
      },
      {
        year: '2026',
        title: 'Katana Restaurant Website',
        subtitle: 'First freelance web project delivered',
        type: 'project',
        icon: 'code',
      },
    ],
  },
  pt: {
    tag: 'Minha Trajetória',
    title: 'O caminho até aqui',
    legend: {
      education: 'Formação',
      project: 'Projeto',
      achievement: 'Experiência',
    },
    items: [
      {
        year: '2019',
        title: 'Inglês no CNA',
        subtitle: 'Estudos até 2025 — nível avançado',
        type: 'education',
        icon: 'lang',
      },
      {
        year: '2023',
        title: 'Técnico em Eletrônica',
        subtitle: 'SENAI Pouso Alegre — onde tudo começou',
        type: 'education',
        icon: 'cpu',
      },
      {
        year: '2024',
        title: 'TCC — Controle de Acesso RFID',
        subtitle: 'Sistema com ESP32, concluindo o curso técnico',
        type: 'project',
        icon: 'chip',
      },
      {
        year: '2025',
        title: 'Engenharia de Software',
        subtitle: 'Início no Inatel — atualmente em andamento',
        type: 'education',
        icon: 'school',
      },
      {
        year: '2025',
        title: 'Bolsista no Start_Inatel',
        subtitle: 'Oficinas de programação e eletrônica para estudantes',
        type: 'achievement',
        icon: 'work',
      },
      {
        year: '2026',
        title: 'Site do Restaurante Katana',
        subtitle: 'Primeiro projeto web entregue como freelance',
        type: 'project',
        icon: 'code',
      },
    ],
  },
}

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const Icon = iconMap[item.icon]
  const side = index % 2 === 0 ? 'left' : 'right'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`timeline-node timeline-node--${side} timeline-node--${item.type} ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="timeline-card">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-node-title">{item.title}</h3>
        <p className="timeline-node-subtitle">{item.subtitle}</p>
      </div>

      <div className="timeline-marker">
        <Icon />
      </div>
    </div>
  )
}

function Timeline({ language }: TimelineProps) {
  const text = timelineText[language]

  return (
    <section id="journey" className="timeline section">
      <CircuitBackground />

      <p className="section-tag">{text.tag}</p>
      <h2 className="section-title">{text.title}</h2>

      <div className="timeline-track">
        <div className="timeline-line" aria-hidden="true" />
        {text.items.map((item, index) => (
          <TimelineNode key={`${item.year}-${item.title}`} item={item} index={index} />
        ))}
      </div>

      <div className="timeline-legend">
        <span className="timeline-legend-item timeline-legend-item--education">
          {text.legend.education}
        </span>
        <span className="timeline-legend-item timeline-legend-item--project">
          {text.legend.project}
        </span>
        <span className="timeline-legend-item timeline-legend-item--achievement">
          {text.legend.achievement}
        </span>
      </div>
    </section>
  )
}

export default Timeline
