import { motion } from 'framer-motion'
import { SectionHeading } from './About'

// ── Edit your skills here ─────────────────────────────────────────────────
const SKILLS = [
  { name: 'Manual Testing', level: 88, icon: '🧪' },
  { name: 'Accessibility Testing', level: 85, icon: '♿' },
  { name: 'End-to-End Testing', level: 85, icon: '🔄' },
  { name: 'Regression Testing | Sanity Testing | Smoke Testing', level: 85, icon: '✅' },
  { name: 'Selenium WebDriver', level: 70, icon: '🤖' },
  { name: 'Java', level: 80, icon: '☕' },
  { name: 'SQL', level: 90, icon: '🗄️' },
  { name: 'API Testing', level: 60, icon: '🔌' },
  { name: 'Postman', level: 70, icon: '📮' },
  { name: 'JIRA', level: 80, icon: '🎯' },
  { name: 'NVDA', level: 80, icon: '🗣️' },
  { name: 'Colour Contrast Analyser (CCA)', level: 80, icon: '🎨' },
  { name: 'Git / GitHub', level: 85, icon: '🐙' }
  
  
]

const TOOLS = [
  'VS Code', 'Postman', 'Render',,
]
// ─────────────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="My Skills" subtitle="Technologies and tools I work with regularly" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {SKILLS.map(({ name, level, icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-gray-900 border border-white/10 rounded-xl p-5 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{icon}</span>
                <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">{name}</span>
              </div>
              <span className="text-indigo-400 text-sm font-bold">{level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                className="h-2 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools / Technologies badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Also experienced with</p>
        <div className="flex flex-wrap justify-center gap-2">
          {TOOLS.map((tool) => (
            <span key={tool}
              className="px-3 py-1.5 text-sm rounded-full border border-white/10 text-gray-400
                hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
