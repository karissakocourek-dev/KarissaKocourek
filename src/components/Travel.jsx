import Section from './Section.jsx'

// Flag images instead of flag emoji, which Windows doesn't render.
const countries = [
  { code: 'fr', name: 'France' },
  { code: 'es', name: 'Spain' },
  { code: 'ag', name: 'Antigua' },
  { code: 'ca', name: 'Canada' },
]

export default function Travel() {
  return (
    <Section id="travel" eyebrow="Wanderlust" title={`${countries.length} new countries this year`}>
      <p className="lead">
        I love to travel. Exploring new places, food, and cultures is one of my
        favorite things to do. This year I visited {countries.length} countries
        for the first time.
      </p>
      <ul className="grid grid-4 countries">
        {countries.map((country) => (
          <li className="card country" key={country.code}>
            <img
              className="flag"
              src={`https://flagcdn.com/w160/${country.code}.png`}
              alt={`Flag of ${country.name}`}
              width="64"
              height="43"
            />
            <span>{country.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
