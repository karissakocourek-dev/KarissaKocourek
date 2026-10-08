import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Education from './components/Education.jsx'
import Hobbies from './components/Hobbies.jsx'
import Travel from './components/Travel.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="container">
        <About />
        <Work />
        <Education />
        <Hobbies />
        <Travel />
      </main>
      <Footer />
    </>
  )
}
