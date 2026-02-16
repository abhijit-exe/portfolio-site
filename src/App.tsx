import './App.css'
import { ThemeToggle } from './components/ThemeToggle'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { EducationSection } from './sections/EducationSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { PublicationsSection } from './sections/PublicationsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { ExtracurricularSection } from './sections/ExtracurricularSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ContactSection } from './sections/ContactSection'
import { githubUrl, linkedinUrl, publicEmail } from './data/profile'

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  return (
    <div className="app-root">
      <div className="app-shell">
        <header className="nav">
          <div className="nav-left">
            <div>
              <div className="nav-name">Abhijit Kshirsagar</div>
              <div className="nav-tagline">Student and AI Enthusiast</div>
            </div>
          </div>
          <nav className="nav-links" aria-label="Primary">
            <button type="button" className="nav-link" onClick={() => scrollToId('about')}>
              About
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('experience')}>
              Experience
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('projects')}>
              Projects
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('publications')}>
              Publications
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('certifications')}>
              Certifications
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('achievements')}>
              Achievements
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('extracurricular')}>
              Extracurricular
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToId('contact')}>
              Contact
            </button>
          </nav>
          <div className="nav-right">
            <a className="icon-button" href={githubUrl} target="_blank" rel="noreferrer">
              <span>GitHub</span>
            </a>
            <a className="icon-button" href={linkedinUrl} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
            </a>
            <ThemeToggle />
          </div>
        </header>

        <main>
          <section id="home" className="section section--hero">
            <HeroSection />
          </section>
          <section id="about" className="section section--about">
            <AboutSection />
          </section>
          <section id="experience" className="section section--split">
            <ExperienceSection />
          </section>
          <section id="education" className="section section--split-alt">
            <EducationSection />
          </section>
          <section id="skills" className="section section--band">
            <SkillsSection />
          </section>
          <section id="projects" className="section section--cards">
            <ProjectsSection />
          </section>
          <section id="publications" className="section section--panel">
            <PublicationsSection />
          </section>
          <section id="certifications" className="section section--panel-alt">
            <CertificationsSection />
          </section>
          <section id="achievements" className="section section--band-alt">
            <AchievementsSection />
          </section>
          <section id="extracurricular" className="section section--panel">
            <ExtracurricularSection />
          </section>
          <section id="contact" className="section section--footer">
            <ContactSection email={publicEmail} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
