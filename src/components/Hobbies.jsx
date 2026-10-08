import Section from './Section.jsx'

const hobbies = [
  {
    icon: '🔥',
    title: 'Grilling',
    text: "I recently got a new grill and I've been putting it to work, trying new recipes, marinades, and techniques every chance I get.",
  },
  {
    icon: '🧁',
    title: 'Allergy-free baking',
    text: 'I love baking desserts that everyone can enjoy. Creating treats free of common allergens without sacrificing flavor is my favorite kind of kitchen experiment.',
  },
]

export default function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="Off the clock" title="In the kitchen">
      <div className="grid grid-2">
        {hobbies.map((hobby) => (
          <div className="card" key={hobby.title}>
            <span className="card-icon" aria-hidden="true">{hobby.icon}</span>
            <h3>{hobby.title}</h3>
            <p>{hobby.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
