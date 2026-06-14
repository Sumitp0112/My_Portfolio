import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Skills',   id: 'skills'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact'  },
]

export function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [active,   setActive]   = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (vis.length) setActive(vis[0].target.id)
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-200 select-none"
        >
          SP<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = active === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-white/10 transition-colors"
        >
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-gray-900/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${active === id
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
