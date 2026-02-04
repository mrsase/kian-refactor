import { Leaf, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  solutions: [
    { label: 'PA6 Compounds', href: '#materials' },
    { label: 'PA66 Compounds', href: '#materials' },
    { label: 'Glass-Filled PA', href: '#materials' },
    { label: 'Impact-Modified PA', href: '#materials' },
  ],
  markets: [
    { label: 'Automotive', href: '#markets' },
    { label: 'Electronics', href: '#markets' },
    { label: 'Industrial', href: '#markets' },
    { label: 'Consumer Goods', href: '#markets' },
  ],
  company: [
    { label: 'About Us', href: '#company' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Our Journey', href: '#company' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">KG</span>
              </div>
              <span className="text-xl font-bold text-white">
                Kian<span className="text-green-400">GreenUp</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Transforming waste into value through sustainable compounding. High-performance
              engineering thermoplastics that don't compromise on quality.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@kiangreenup.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@kiangreenup.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>123 Green Street, Eco City, EC 12345, Country</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-white font-semibold mb-4">Markets</h4>
            <ul className="space-y-3">
              {footerLinks.markets.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
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
                    className="text-gray-400 hover:text-green-400 transition-colors"
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
              <Leaf className="w-4 h-4 text-green-500" />
              <span>Committed to a sustainable future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
