import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/projects'

export const ProjectsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        description="A few projects that capture my interests in generative modelling, time-series learning, and applied computer vision."
      />
      <div>
        {projects.map((project) => (
          <article key={project.title} className="card">
            <header>
              <div className="kicker">{project.period}</div>
              <h3 style={{ margin: '0.25rem 0 0.1rem' }}>{project.title}</h3>
            </header>
            <p className="section-description" style={{ marginTop: '0.6rem' }}>
              {project.summary}
            </p>
            {project.notes ? (
              <p className="section-description" style={{ marginTop: '0.4rem' }}>
                {project.notes}
              </p>
            ) : null}
            <div className="stack-row" style={{ marginTop: '0.6rem' }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

