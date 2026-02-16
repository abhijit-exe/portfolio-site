import { SectionHeader } from '../components/SectionHeader'
import { skillGroups } from '../data/skills'

export const SkillsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Skills"
        title="Tools I work with"
        description="A snapshot of the languages, frameworks, and tools I use across machine learning, deep learning, and generative AI projects."
      />
      <div className="two-column-grid">
        {skillGroups.map((group) => (
          <article key={group.label} className="card">
            <h3 style={{ margin: 0, fontSize: '0.95rem' }}>{group.label}</h3>
            <div className="stack-row" style={{ marginTop: '0.6rem' }}>
              {group.items.map((item) => (
                <span key={item} className="stack-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

