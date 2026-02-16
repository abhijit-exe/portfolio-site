import { SectionHeader } from '../components/SectionHeader'
import { publications } from '../data/publications'

export const PublicationsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Publications"
        title="Research output"
        description="Bringing together IoT sensing, machine learning, and forecasting for real-world problems."
      />
      <div>
        {publications.map((pub) => (
          <article key={pub.title} className="card">
            <header>
              <div className="kicker">
                {pub.venue} · {pub.year}
              </div>
              <h3 style={{ margin: '0.25rem 0 0.25rem' }}>{pub.title}</h3>
            </header>
            <p className="section-description">{pub.summary}</p>
            {pub.link ? (
              <p style={{ marginTop: '0.6rem' }}>
                <a href={pub.link} target="_blank" rel="noreferrer">
                  Read paper
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

