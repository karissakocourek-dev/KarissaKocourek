export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children}
    </section>
  )
}
