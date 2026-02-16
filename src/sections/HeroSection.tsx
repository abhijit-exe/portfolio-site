import { heroBody, heroSummary, location, name, title, githubUrl, linkedinUrl } from '../data/profile'

export const HeroSection = () => {
  return (
    <div className="hero-layout">
      <div>
        <div className="hero-eyebrow">AI · Deep Learning · Generative AI</div>
        <h1 className="hero-title">{name}</h1>
        <div className="hero-subtitle">{title}</div>
        <p className="hero-body">
          {heroSummary} {heroBody}
        </p>
        <div className="hero-actions">
          <a href="#projects">
            <button type="button">View projects</button>
          </a>
          <a href="#experience">
            <button type="button">Experience</button>
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <button type="button">GitHub</button>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <button type="button">LinkedIn</button>
          </a>
        </div>
      </div>
      <div className="hero-meta">
        <div className="card">
          <div className="hero-meta-row">
            <span className="hero-meta-label">Current:</span>
            Final-year B.Tech (Electronics &amp; Telecommunication), Honors in Deep Learning
          </div>
          <div className="hero-meta-row">
            <span className="hero-meta-label">Focus:</span>
            AI, Deep Learning, Generative AI, LLMs
          </div>
          <div className="hero-meta-row">
            <span className="hero-meta-label">Location:</span>
            {location}
          </div>
          <div className="hero-meta-row">
            <span className="hero-meta-label">Open to:</span>
            AI research, Generative AI, and Data Science opportunities
          </div>
        </div>
      </div>
    </div>
  )
}

