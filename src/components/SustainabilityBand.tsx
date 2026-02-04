import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Recycle, TrendingDown, Zap } from 'lucide-react'

const metrics = [
  { icon: Recycle, value: '30-50%', label: 'Recycled Content', description: 'Average in our compounds' },
  { icon: TrendingDown, value: '2000', label: 'Tons CO₂/Year', description: 'Emissions saved annually' },
  { icon: Zap, value: '40%', label: 'Energy Savings', description: 'vs virgin production' },
  { icon: Leaf, value: '5000+', label: 'Tons Upcycled', description: 'Annually processed' },
]

export function SustainabilityBand() {
  return (
    <section
      id="sustainability"
      className="py-20 bg-linear-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Upcycling Waste into High-Value Materials
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Our commitment to environmental excellence
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <metric.icon className="w-10 h-10 text-green-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-green-100 font-medium">{metric.label}</div>
                <div className="text-green-200/70 text-sm mt-1">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="#company"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-lg bg-white text-green-700 hover:bg-green-50 border-none rounded-lg px-8 shadow-lg gap-2"
            >
              Explore Sustainability
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
