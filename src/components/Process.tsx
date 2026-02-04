import { motion } from 'framer-motion'
import { Recycle, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Sustainable Compounding',
    description:
      'Advanced compounding processes transform waste materials into high-performance engineering thermoplastics.',
    icon: Recycle,
    color: 'bg-emerald-500',
  },
  {
    number: '02',
    title: 'Upcycling Excellence',
    description:
      'The result: premium-grade materials that match or exceed virgin material performance while reducing environmental impact.',
    icon: Sparkles,
    color: 'bg-teal-500',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Upcycling Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From waste to high-value materials through sustainable innovation
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-emerald-200 z-0" />
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full"
                >
                  <div className="card-body p-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mt-3 leading-relaxed">{step.description}</p>
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
