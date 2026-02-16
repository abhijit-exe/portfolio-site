import { SectionHeader } from '../components/SectionHeader'
import { extracurricularRoles } from '../data/extracurricular'

export const ExtracurricularSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Extracurricular"
        title="Leadership & community"
        description="Student leadership roles where I helped organize technical activities and support peers."
      />
      <div>
        {extracurricularRoles.map((role) => (
          <article key={role.role + role.organisation} className="card">
            <header>
              <h3 style={{ margin: 0 }}>{role.role}</h3>
              <p className="muted" style={{ margin: '0.25rem 0 0' }}>
                {role.organisation}
              </p>
            </header>
            <p className="section-description" style={{ marginTop: '0.6rem' }}>
              {role.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

