import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/education'

export const EducationSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        description="Formal training in Electronics and Telecommunication with a specialization in Deep Learning."
      />
      <div className="two-column-grid">
        {education.map((entry) => (
          <article key={`${entry.institution}-${entry.program}`} className="card">
            <header>
              <div className="kicker">
                {entry.start} – {entry.end} · {entry.location}
              </div>
              <h3 style={{ margin: '0.25rem 0 0.1rem' }}>{entry.program}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {entry.institution}
              </p>
            </header>
            {entry.details ? (
              <p className="section-description" style={{ marginTop: '0.6rem' }}>
                {entry.details}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

