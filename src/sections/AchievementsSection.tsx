import { SectionHeader } from '../components/SectionHeader'
import { achievements } from '../data/achievements'

export const AchievementsSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Achievements"
        title="Competitions & recognition"
        description="Research and project work recognised at university, national, and international levels."
      />
      <div>
        {achievements.map((item) => (
          <article key={item.title} className="card">
            <header>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p className="muted" style={{ margin: '0.25rem 0 0' }}>
                {item.organizer}
              </p>
            </header>
            <p className="section-description" style={{ marginTop: '0.6rem' }}>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

