import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Markets', href: '#markets' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="navbar fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm h-16 px-4 lg:px-8"
    >
      <div className="navbar-start">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">KG</span>
          </div>
          <span className="text-xl font-bold text-gray-900">
            Kian<span className="text-green-600">GreenUp</span>
          </span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-600 group-hover:w-3/4 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn bg-linear-to-r from-green-600 to-blue-600 text-white border-none btn-sm lg:btn-md rounded-full px-6 shadow-lg hover:shadow-xl transition-shadow hidden sm:inline-flex"
        >
          Get Started
        </motion.a>

        <button
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg lg:hidden"
        >
          <ul className="menu p-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                className="btn bg-linear-to-r from-green-600 to-blue-600 text-white border-none rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
