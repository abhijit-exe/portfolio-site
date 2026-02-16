import { SectionHeader } from '../components/SectionHeader'

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="About"
        title="Blending engineering with applied AI"
        description="I am a final-year undergraduate student with a strong focus on deep learning and generative AI, interested in building practical systems that connect research ideas to real-world impact."
      />
      <p className="section-description">
        My academic background in Electronics and Telecommunication, combined with an Honors in Deep
        Learning, allows me to understand both signal-level details and high-level ML architectures.
        I enjoy working on projects that involve end-to-end pipelines: data collection, modeling,
        evaluation, and deployment.
      </p>
    </div>
  )
}

