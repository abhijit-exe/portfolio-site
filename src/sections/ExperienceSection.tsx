import { SectionHeader } from '../components/SectionHeader'
import { experience } from '../data/experience'

export const ExperienceSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Experience"
        title="Internships in applied AI"
        description="Hands-on experience building and evaluating ML and generative AI systems in industry settings."
      />
      <div className="two-column-grid">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="card">
            <header>
              <div className="kicker">
                {item.start} – {item.end} · {item.location}
              </div>
              <h3 style={{ margin: '0.25rem 0 0.1rem' }}>{item.role}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {item.company}
              </p>
            </header>
            <ul className="section-list" style={{ marginTop: '0.6rem' }}>
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

