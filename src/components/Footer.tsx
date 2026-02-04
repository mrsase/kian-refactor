import { Leaf } from 'lucide-react'

const footerLinks = {
  materials: [
    { label: 'PA6 Compounds', href: '#materials' },
    { label: 'PA66 Compounds', href: '#materials' },
    { label: 'Glass-Filled PA', href: '#materials' },
    { label: 'Impact-Modified PA', href: '#materials' },
  ],
  company: [
    { label: 'About Us', href: '#company' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">KG</span>
              </div>
              <span className="text-xl font-bold text-white">
                Kian<span className="text-emerald-400">GreenUp</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Leading the way in sustainable polymer solutions. We transform industrial waste into 
              premium engineering thermoplastics for a greener tomorrow.
            </p>
          </div>

          {/* Materials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Materials</h4>
            <ul className="space-y-3">
              {footerLinks.materials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KianGreenUp. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Committed to a sustainable future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
