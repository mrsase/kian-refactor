import { motion } from 'framer-motion'
import { ArrowRight, Beaker } from 'lucide-react'

const materials = [
  {
    name: 'PA6 (Polyamide 6)',
    tagline: 'Versatile engineering thermoplastic with excellent mechanical properties',
    recycledContent: '30-50%',
    applications: ['Automotive components', 'Industrial machinery', 'Consumer goods'],
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'PA66 (Polyamide 66)',
    tagline: 'Superior heat resistance and mechanical strength',
    recycledContent: '25-45%',
    applications: ['Automotive under-hood', 'Electronic connectors', 'Industrial gears'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Glass-Filled PA',
    tagline: 'Enhanced stiffness and dimensional stability',
    recycledContent: '20-40%',
    applications: ['Structural automotive parts', 'Power tool housings', 'Load-bearing components'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Impact-Modified PA',
    tagline: 'Superior toughness for demanding environments',
    recycledContent: '25-50%',
    applications: ['Automotive bumpers', 'Sports equipment', 'Protective casings'],
    color: 'from-orange-500 to-orange-600',
  },
]

export function Materials() {
  return (
    <section id="materials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Material Families
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-performance engineering thermoplastics from sustainable sources
            </p>
          </motion.div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm h-full overflow-hidden group"
                >
                  {/* Gradient header */}
                  <div className={`h-2 bg-linear-to-r ${material.color}`} />

                  <div className="card-body p-6">
                    {/* Recycled badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${material.color} flex items-center justify-center shadow-md`}
                      >
                        <Beaker className="w-6 h-6 text-white" />
                      </div>
                      <span className="badge badge-success badge-outline">
                        {material.recycledContent} recycled
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900">{material.name}</h3>

                    {/* Tagline */}
                    <p className="text-gray-600 italic mt-1">{material.tagline}</p>

                    {/* Applications */}
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Key Applications
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {material.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="btn btn-ghost btn-sm text-green-600 hover:bg-green-50 gap-2 group-hover:gap-3 transition-all p-0">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
