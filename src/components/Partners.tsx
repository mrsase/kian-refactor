import { motion } from 'framer-motion'
import { Award, Handshake, Leaf, Recycle } from 'lucide-react'

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building partnerships for a sustainable future
            </p>
          </motion.div>

          {/* CARE Partnership Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* CARE Logo/Icon */}
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
                  <Handshake className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>

              {/* Partnership Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  Strategic Partnership
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Proud Partner of CARE
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We collaborate with CARE (Circular Alliance for Recycling Excellence) to advance 
                  cutting-edge recycling technologies and drive circular economy initiatives. Together, 
                  we're transforming post-industrial waste into high-value engineering materials, 
                  setting new standards for sustainable polymeric solutions.
                </p>

                {/* Partnership Benefits */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Recycle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Advanced Recycling</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Leaf className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Circular Economy</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">
              Certifications & Standards
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="font-semibold text-gray-700">ISO 14001</span>
                <p className="text-xs text-gray-500 mt-1">Environmental Management</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="font-semibold text-gray-700">ISO 9001</span>
                <p className="text-xs text-gray-500 mt-1">Quality Management</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
