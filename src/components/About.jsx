import { motion } from 'framer-motion'
import { scrollTo } from './Navbar'

// ── Edit your details here ────────────────────────────────────────────────
const ABOUT = {
  name:        'Sumit Patil',
  email:       'sumitpatil9931@gmail.com ⋄',
  location:    'Jalgaon, India',
  degree:      'Bachelor of Engineering in Computer Engineering',
  experience:  'Fresh Graduate',
  bio1: 'Motivated and detail-oriented QA Engineer with hands-on experience in Manual Testing, API Testing, and Selenium Automation Testing. Strong understanding of Software Development Life Cycle (SDLC), Software Testing Life Cycle (STLC), defect management, and test case design techniques',
  bio2: 'Seeking an opportunity to contribute to a dynamic QA team while continuously enhancing technical and testing skills.',
}
// ─────────────────────────────────────────────────────────────────────────

const fadeLeft  = { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
const fadeRight = { initial: { opacity: 0, x:  30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.1 } }

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div {...fadeLeft}>
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 blur-sm" />
            <div className="relative w-full aspect-square rounded-2xl bg-gray-900 border border-white/10
              flex items-center justify-center text-8xl shadow-xl">
              
              <img src="/sumit.jpeg" alt="Profile" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div {...fadeRight} className="space-y-5">
          <p className="text-gray-400 leading-relaxed text-lg">{ABOUT.bio1}</p>
          <p className="text-gray-400 leading-relaxed">{ABOUT.bio2}</p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { label: '📛 Name',       value: ABOUT.name       },
              { label: '📧 Email',      value: ABOUT.email      },
              { label: '📍 Location',   value: ABOUT.location   },
              { label: '🎓 Degree',     value: ABOUT.degree     },
              { label: '💼 Experience', value: ABOUT.experience },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-900/60 border border-white/5 rounded-lg px-4 py-2.5">
                <p className="text-indigo-400 text-xs font-semibold mb-0.5">{label}</p>
                <p className="text-gray-300 text-sm truncate">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-95"
            >
              Hire Me
            </button>
            <a
              href="/Roshan_Patil_Resume.pdf" target="_blank" rel="noopener noreferrer"
              download
              className="px-6 py-3 border border-white/20 text-gray-300 hover:bg-white/5 font-semibold rounded-lg transition-all duration-200 active:scale-95"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
      {subtitle && <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
