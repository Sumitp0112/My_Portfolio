import Navbar    from './components/Navbar'
import Home      from './components/Home'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <main>
        <section id="home"     className="py-20 pt-28 md:pt-36 px-4 sm:px-6 lg:px-8">
          <Home />
        </section>

        <section id="about"    className="py-20 px-4 sm:px-6 lg:px-8">
          <About />
        </section>

        <section id="skills"   className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/40">
          <Skills />
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <Projects />
        </section>

        <section id="contact"  className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/40">
          <Contact />
        </section>
      </main>
 
 
      <Footer />
      <BackToTop />
    </div>
  )
}
