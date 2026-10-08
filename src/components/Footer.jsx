export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Karissa Kocourek</p>
      <p className="credit">
        Background: Joffre Lakes Provincial Park, BC. Photo by{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Joffre_Lakes.jpg" target="_blank" rel="noreferrer">
          Mady1690
        </a>
        , licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">
          CC BY-SA 4.0
        </a>
        .
      </p>
    </footer>
  )
}
