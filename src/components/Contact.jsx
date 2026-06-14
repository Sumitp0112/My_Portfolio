import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './About'
import emailjs from '@emailjs/browser'

// ── Edit your contact info here ───────────────────────────────────────────
const CONTACT_INFO = [
  { icon: '📧', label: 'Email',    value: 'sumitpatil9931@gmail.com', href: 'mailto:sumitpatil9931@gmail.com'  },
  { icon: '📍', label: 'Location', value: 'Jalgaon, India', href: null  },
  { icon: '💼', label: 'LinkedIn', value: 'https://www.linkedin.com/in/sumitpatil2010/', href: 'https://www.linkedin.com/in/sumitpatil2010/' },
  { icon: '🐙', label: 'GitHub',   value: 'https://github.com/Sumitp0112', href: 'https://github.com/Sumitp0112'  },
  { icon: '📱', label: 'LeedCode',    value: 'https://leetcode.com/u/SumitBPatil/', href: 'https://leetcode.com/u/SumitBPatil/'  },
]
// ─────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const isValid = form.name && form.email && form.message && /\S+@\S+\.\S+/.test(form.email)

  

 const handleSubmit = async () => {
  if (!isValid) {
    setTouched({ name: true, email: true, message: true })
   return
  }

  setStatus('sending')

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_Service_ID,
      import.meta.env.VITE_EMAILJS_Template_ID,
      {
        user_name: form.name,
        user_email: form.email,
        subject: form.subject || 'New Contact Form Message',
        message: form.message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_Public_Key,
      }
    )

    setStatus('success')
    setForm({
        name: '',
      email: '',
       subject: '',
       message: '',
     })
     setTouched({})
// Hide success message after 2 seconds
    setTimeout(() => {
      setStatus(null)
    }, 2000)
   } catch (error) {
    console.error('EmailJS Error:', error)
    setStatus('error')

 // Hide error message after 2 seconds (optional)
    setTimeout(() => {
      setStatus(null)
    }, 2000)
  }
 }



  const fieldClass = (name) =>
    `w-full bg-gray-800 rounded-lg px-4 py-2.5 text-white text-sm
     placeholder-gray-600 transition-colors focus:outline-none
     ${touched[name] && !form[name]
       ? 'border border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
       : 'border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'}`

  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Contact info */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          <p className="text-gray-400 leading-relaxed text-sm">
            I'm currently open to freelance projects, full-time roles, and interesting collaborations.
            Feel free to reach out through any channel below.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20
                  flex items-center justify-center text-xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-white transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-4 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your name"
                  className={fieldClass('name')}
                />
                {touched.name && !form.name && (
                  <p className="text-red-400 text-xs mt-1">Name is required</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="you@email.com"
                  className={fieldClass('email')}
                />
                {touched.email && form.email && !/\S+@\S+\.\S+/.test(form.email) && (
                  <p className="text-red-400 text-xs mt-1">Enter a valid email</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="What's this about?"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm
                  placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange} placeholder="Tell me about your project or just say hi..."
                rows={5}
                className={`${fieldClass('message')} resize-none`}
              />
              {touched.message && !form.message && (
                <p className="text-red-400 text-xs mt-1">Message is required</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-[0.99]"
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Sending…
                </span>
              ) : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm text-center bg-green-500/10 border border-green-500/20 rounded-lg py-3"
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg py-3">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
