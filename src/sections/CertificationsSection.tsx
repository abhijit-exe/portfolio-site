import { SectionHeader } from '../components/SectionHeader'
import { certifications } from '../data/certifications'

export const CertificationsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Certifications"
        title="Selected certifications"
        description="Structured learning in machine learning, deep learning, and generative AI."
      />
      <div>
        {certifications.map((cert) => (
          <article key={cert.name} className="card">
            <header>
              <h3 style={{ margin: 0 }}>{cert.name}</h3>
              <p className="muted" style={{ margin: '0.25rem 0 0' }}>
                {cert.provider} · {cert.year}
              </p>
            </header>
            {cert.summary ? (
              <p className="section-description" style={{ marginTop: '0.6rem' }}>
                {cert.summary}
              </p>
            ) : null}
            {cert.link ? (
              <p style={{ marginTop: '0.6rem' }}>
                <a href={cert.link} target="_blank" rel="noreferrer">
                  View certificate
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

