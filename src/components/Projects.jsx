import { motion } from 'framer-motion'
import { SectionHeading } from './About'

// ── Edit your projects here ───────────────────────────────────────────────
const PROJECTS = [
  {
    title:       'Sauce Demo E-Commerce Application',
    description: 'Sauce Demo E-Commerce Application',
    tags: ['Selenium WebDriver', 'Manual Testing', 'Java', 'Automation Testing'],
    github:      'https://github.com/Sumitp0112/SauceDemo-Automation-Framework',
    emoji: '🛒',
    featured:    true,
  },
  {
   title: 'Adactin Hotel Reservation System',
  description: 'Conducted comprehensive Manual Testing of the Adactin Hotel Reservation System by executing over 100 test cases. Performed Functional, Regression, and End-to-End Testing, identified defects, maintained defect reports, and ensured complete requirement traceability through SRS validation.',
  tags: ['Manual Testing', 'Regression Testing', 'End-to-End Testing', 'JIRA'],
  emoji: '🏨',
  featured: true,
  },
  {
    title:       'portfolio-website',
    description: 'A responsive personal portfolio website designed to showcase technical skills, projects, achievements, and contact information with a clean and professional user interface.',
    tags:          ['React', 'JavaScript', 'HTML', 'Tailwind CSS'],
    github:      'https://github.com/Roshan6570/portfolio-website',
    demo:        'https://portfolio-website-roshan-patil-04.vercel.app',
    emoji:       '💼',
  },
 
]
// ─────────────────────────────────────────────────────────────────────────

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.93C5.74 21.1 5.07 19 5.07 19c-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53C7.03 17.1 4.72 16.3 4.72 12.5c0-1.08.38-1.96 1.01-2.65-.1-.25-.44-1.26.1-2.62 0 0 .83-.27 2.7 1.01A9.4 9.4 0 0 1 12 7.97c.84 0 1.68.11 2.47.33 1.87-1.28 2.7-1.01 2.7-1.01.54 1.36.2 2.37.1 2.62.63.69 1.01 1.57 1.01 2.65 0 3.81-2.32 4.65-4.53 4.89.36.31.68.91.68 1.84v2.73c0 .3.2.65.78.54C20.71 21.38 24 17.07 24 12 24 5.73 18.27.5 12 .5z"/>
  </svg>
)

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="My Projects" subtitle="A selection of things I've built" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map(({ title, description, tags, github, demo, emoji, featured }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4
              border transition-all duration-300 group
              hover:shadow-xl hover:shadow-indigo-900/20
              ${featured
                ? 'border-indigo-500/30 hover:border-indigo-500/60'
                : 'border-white/10 hover:border-indigo-500/30'}`}
          >
            {featured && (
              <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full
                bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Featured
              </span>
            )}

            <div className="flex items-start gap-3">
              <span className="text-4xl">{emoji}</span>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full
                    bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-1 border-t border-white/5">
              <a href={github} target="_blank" rel="noopener noreferrer"
                aria-label={`${title} GitHub`}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
                <GithubIcon /> <span>Code</span>
              </a>
              <a href={demo} target="_blank" rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                <LinkIcon /> <span>Live Demo</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/Sumitp0112"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-gray-400
            hover:border-indigo-500/50 hover:text-indigo-300 rounded-lg transition-all duration-200"
        >
          <GithubIcon />
          View More on GitHub
        </a>
      </motion.div>
    </div>
  )
}
