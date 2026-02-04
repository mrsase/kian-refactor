import { motion } from 'framer-motion'
import { ArrowRight, Package, Recycle, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Sorting & Collection',
    description:
      'We carefully source and sort post-industrial polymeric waste, ensuring quality and consistency from the start.',
    icon: Package,
    color: 'from-green-500 to-green-600',
  },
  {
    number: '02',
    title: 'Sustainable Compounding',
    description:
      'Advanced compounding processes transform waste materials into high-performance engineering thermoplastics.',
    icon: Recycle,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '03',
    title: 'Upcycling Excellence',
    description:
      'The result: premium-grade materials that match or exceed virgin material performance while reducing environmental impact.',
    icon: Sparkles,
    color: 'from-green-600 to-blue-600',
  },
]

export function Process() {
  return (
    <section id="solutions" className="py-20 bg-white">
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
              Our 3-Step Upcycling Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From waste to high-value materials through sustainable innovation
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-gray-200 to-transparent z-0" />
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full"
                >
                  <div className="card-body p-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <span className="text-sm font-semibold text-green-600 tracking-wide">
                      STEP {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mt-3 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="#materials"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group"
            >
              Learn more about our materials
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
