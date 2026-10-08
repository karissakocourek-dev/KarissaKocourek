import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="education" eyebrow="What I study" title="AI in Biomedical & Health Science">
      <div className="card">
        <span className="card-icon" aria-hidden="true">🧠</span>
        <p>
          I'm studying how artificial intelligence and machine learning can be
          applied to biomedical research and health care, from making sense of
          complex biological data to improving how we diagnose and treat disease.
        </p>
      </div>
    </Section>
  )
}
