type EducationItem = {
  title: string
  institution: string
  period: string
  description: string
}

const educationItems: EducationItem[] = [
  {
    title: 'Software Engineering',
    institution: 'Inatel - Instituto Nacional de Telecomunicações',
    period: '2025 - Current',
    description:
      'Undergraduate program focused on software development, programming, algorithms, data structures and computational systems.',
  },
  {
    title: 'Electronics Technician',
    institution: 'SENAI - Pouso Alegre',
    period: '01/2023 - 12/2024',
    description:
      'Technical training in electronics, circuits, automation, embedded systems, maintenance and practical hardware projects.',
  },
  {
    title: 'English Course',
    institution: 'CNA',
    period: '2019 - 2025',
    description:
      'English language course focused on communication, reading, writing and understanding technical content.',
  },
  {
    title: 'Industrial Automation Background',
    institution: 'SENAI',
    period: 'Technical training',
    description:
      'Practical experience with PLC programming using Ladder Logic, pneumatics, electropneumatic systems and industrial automation concepts.',
  },
]

function Education() {
  return (
    <section id="education" className="education section">
      <p className="section-tag">Education</p>

      <h2 className="section-title">Academic and technical background</h2>

      <div className="education-list">
        {educationItems.map((item) => (
          <div className="education-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-period">{item.period}</p>
            </div>

            <p className="education-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education