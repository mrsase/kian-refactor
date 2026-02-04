import { motion } from 'framer-motion'
import { Award, Factory, Handshake, Leaf, Recycle, Rocket } from 'lucide-react'

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'KianGreenUp established with a vision for sustainable polymeric solutions',
    icon: Rocket,
  },
  {
    year: '2017',
    title: 'First PA6 Upcycling Line',
    description: 'Launched our first commercial upcycling production line',
    icon: Factory,
  },
  {
    year: '2019',
    title: 'CARE Partnership',
    description: 'Partnered with CARE for advanced recycling technologies',
    icon: Handshake,
  },
  {
    year: '2021',
    title: 'Glass-Filled PA Launch',
    description: 'Introduced glass-filled PA compounds from recycled materials',
    icon: Recycle,
  },
  {
    year: '2023',
    title: 'ISO 14001 Certification',
    description: 'Achieved environmental management system certification',
    icon: Leaf,
  },
  {
    year: '2024',
    title: '10,000 Tons Milestone',
    description: 'Reached cumulative 10,000 tons of upcycled materials',
    icon: Award,
  },
]

export function Timeline() {
  return (
    <section id="company" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
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
            <span className="text-green-600 font-semibold tracking-widest uppercase text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              A decade of innovation in sustainable materials
            </p>
          </motion.div>

          {/* Timeline */}
          <ul className="timeline timeline-vertical timeline-snap-icon">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0

              return (
                <li key={milestone.year} className="min-h-[180px]">
                  {index > 0 && <hr className="bg-green-300" />}

                  {/* Left content */}
                  <div className={`timeline-${isLeft ? 'start' : 'end'} ${isLeft ? 'text-end md:pr-8' : 'md:pl-8'}`}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <time className="font-mono text-sm text-green-600 font-semibold tracking-wider">
                          {milestone.year}
                        </time>
                        <div className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-xs ml-auto">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Middle icon */}
                  <div className="timeline-middle">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="bg-linear-to-br from-green-600 to-blue-600 text-white rounded-full p-3 shadow-lg ring-4 ring-green-100"
                    >
                      <milestone.icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div className={`timeline-${isLeft ? 'end' : 'start'} ${!isLeft ? 'text-end md:pr-8' : 'md:pl-8'}`}>
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <time className="font-mono text-sm text-green-600 font-semibold tracking-wider">
                          {milestone.year}
                        </time>
                        <div className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-xs mr-auto">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {index < milestones.length - 1 && <hr className="bg-green-300" />}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
