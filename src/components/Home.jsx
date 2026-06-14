import { motion } from 'framer-motion'
import { scrollTo } from './Navbar'

// ── Edit your details here ────────────────────────────────────────────────
const NAME    = 'Sumit Patil'
const ROLE    = 'Software Tester |QA Tester| Automation Tester'
const TAGLINE = 'Passionate Software Tester | Finding Defects, Delivering Quality.'
const GITHUB  = 'https://github.com/Sumitp0112'
const LINKEDIN= 'https://www.linkedin.com/in/sumitpatil2010/'
const PROFILE_IMG = '/My_Portfolio/sumit.jpeg'   // put image in /public and uncomment
// ─────────────────────────────────────────────────────────────────────────


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-indigo-400 font-medium mb-2 tracking-widest uppercase text-sm"
        >
          Hello, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3"
        >
          {NAME}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl sm:text-2xl text-indigo-300 font-medium mb-6"
        >
          {ROLE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
        >
          {TAGLINE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-95"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 font-semibold rounded-lg transition-all duration-200 active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 justify-center md:justify-start"
        >
          <a href={GITHUB} target="_blank" rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.93C5.74 21.1 5.07 19 5.07 19c-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53C7.03 17.1 4.72 16.3 4.72 12.5c0-1.08.38-1.96 1.01-2.65-.1-.25-.44-1.26.1-2.62 0 0 .83-.27 2.7 1.01A9.4 9.4 0 0 1 12 7.97c.84 0 1.68.11 2.47.33 1.87-1.28 2.7-1.01 2.7-1.01.54 1.36.2 2.37.1 2.62.63.69 1.01 1.57 1.01 2.65 0 3.81-2.32 4.65-4.53 4.89.36.31.68.91.68 1.84v2.73c0 .3.2.65.78.54C20.71 21.38 24 17.07 24 12 24 5.73 18.27.5 12 .5z"/>
            </svg>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.7,
    delay: 0.2,
    type: "spring",
    stiffness: 100,
  }}
  className="flex-shrink-0"
>
  <div className="relative w-72 h-72 sm:w-80 sm:h-80">
    
    {/* Glow Effect */}
    <div
      className="absolute inset-0 rounded-full bg-indigo-600/20 animate-ping"
      style={{ animationDuration: "3s" }}
    />

    {/* Outer Ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl">
      
      {/* Image Container */}
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
        <img
          src="/My_Portfolio/sumit.jpeg"
          alt={NAME}
          className="w-full h-full object-cover object-top"
        />
      </div>

    </div>
  </div>
</motion.div>





 
    </div>
  )
}
