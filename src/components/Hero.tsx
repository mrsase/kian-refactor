import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Recycle } from 'lucide-react'

const proofPoints = [
  { value: '30-50%', label: 'Recycled Content' },
  { value: '5000+', label: 'Tons Upcycled/Year' },
  { value: '40%', label: 'Energy Savings' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-linear-to-br from-green-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-200/40 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8"
          >
            <Leaf className="w-4 h-4" />
            Sustainable Polymeric Solutions
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Upcycled Engineering Thermoplastics for{' '}
            <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              High-Performance
            </span>{' '}
            Applications
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-6"
          >
            Leading the transition to sustainable polymeric solutions
          </motion.p>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            At KianGreenUp, we transform waste into value through sustainable compounding, creating
            high-performance engineering thermoplastics that don't compromise on quality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-lg bg-green-600 hover:bg-green-700 text-white border-none rounded-lg px-8 shadow-lg hover:shadow-xl transition-all gap-2"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#sustainability"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-lg btn-outline border-2 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-600 rounded-lg px-8 gap-2"
            >
              <Recycle className="w-5 h-5" />
              Our Sustainability Journey
            </motion.a>
          </motion.div>

          {/* Proof Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {proofPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                  {point.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600">{point.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating visual element */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
        >
          <div className="w-64 h-64 rounded-3xl bg-linear-to-br from-green-100 to-blue-100 p-8 shadow-xl border border-white/50">
            <div className="w-full h-full rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center">
              <div className="text-center">
                <Recycle className="w-16 h-16 text-green-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-gray-800">Sustainable Innovation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
