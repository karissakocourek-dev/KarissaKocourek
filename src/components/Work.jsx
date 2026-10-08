import Section from './Section.jsx'

export default function Work() {
  return (
    <Section id="work" eyebrow="What I do" title="Research Scientist">
      <div className="card">
        <span className="card-icon" aria-hidden="true">🔬</span>
        <p>
          As a research scientist, I design experiments, analyze data, and turn
          questions into evidence. I enjoy the rigor of the scientific process
          and working with others to push our understanding forward.
        </p>
      </div>
    </Section>
  )
}
