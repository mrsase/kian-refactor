import { motion } from 'framer-motion'
import { ArrowRight, Building, Car, Cpu, Factory, Package, ShoppingBag } from 'lucide-react'

const markets = [
  {
    name: 'Automotive',
    description: 'High-performance materials for the automotive industry',
    icon: Car,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Electronics',
    description: 'Reliable materials for electronic applications',
    icon: Cpu,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Industrial',
    description: 'Robust solutions for industrial applications',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Consumer Goods',
    description: 'Safe, reliable materials for consumer products',
    icon: ShoppingBag,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    name: 'Construction',
    description: 'Durable materials for building applications',
    icon: Building,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    name: 'Packaging',
    description: 'Sustainable packaging solutions',
    icon: Package,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
]

export function Markets() {
  return (
    <section id="markets" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
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
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-performance materials for diverse applications
            </p>
          </motion.div>

          {/* Markets Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, index) => (
              <motion.div
                key={market.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm h-full cursor-pointer group"
                >
                  <div className="card-body p-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${market.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <market.icon className={`w-7 h-7 ${market.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900">{market.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mt-2">{market.description}</p>

                    {/* CTA */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
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
