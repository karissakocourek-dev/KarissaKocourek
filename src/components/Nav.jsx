const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'School' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#travel', label: 'Travel' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">KK</a>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
