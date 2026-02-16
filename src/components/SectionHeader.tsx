interface SectionHeaderProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <header className="section-header">
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  )
}

