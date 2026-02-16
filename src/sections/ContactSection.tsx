import { SectionHeader } from '../components/SectionHeader'
import { githubUrl, linkedinUrl, location } from '../data/profile'

interface ContactSectionProps {
  email: string
}

export const ContactSection = ({ email }: ContactSectionProps) => {
  return (
    <div>
      <SectionHeader
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Open to AI research, Generative AI, and Data Science internships or projects."
      />
      <div className="card">
        <p className="contact-row">
          <span className="hero-meta-label">Email:</span>{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="contact-row">
          <span className="hero-meta-label">Location:</span> {location}
        </p>
        <p className="contact-row">
          <span className="hero-meta-label">Links:</span>{' '}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  )
}

