import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Supply Chain Director',
    company: 'AutoTech Industries',
    rating: 5,
    quote:
      "KianGreenUp has been instrumental in helping us meet our sustainability goals without compromising on material performance. Their PA66 compounds perform exceptionally well in our automotive applications.",
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    title: 'Product Development Manager',
    company: 'ElectroComponents Ltd',
    rating: 5,
    quote:
      "The quality and consistency of KianGreenUp's materials are outstanding. We've successfully replaced virgin materials in several product lines, reducing our carbon footprint significantly.",
    avatar: 'MC',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Sustainability Officer',
    company: 'GreenBuild Corp',
    rating: 5,
    quote:
      'Working with KianGreenUp aligned perfectly with our circular economy initiatives. Their technical support and material expertise have been invaluable.',
    avatar: 'ER',
  },
]

const partners = ['CARE', 'ISO 14001', 'Partner 3', 'Partner 4']

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="card bg-white border border-gray-100 shadow-sm h-full"
                >
                  <div className="card-body p-6">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-green-200 mb-4" />

                    {/* Quote text */}
                    <p className="text-gray-600 leading-relaxed mb-6 grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">Proud partner of</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
