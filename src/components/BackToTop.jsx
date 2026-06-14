import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 flex items-center justify-center
        bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-full
        shadow-lg shadow-indigo-900/50 transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
