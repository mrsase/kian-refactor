import { motion } from 'framer-motion'
import { Award, Factory, Handshake, Leaf, Recycle, Rocket } from 'lucide-react'

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'KianGreenUp established with a vision for sustainable polymeric solutions',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    year: '2017',
    title: 'First PA6 Upcycling Line',
    description: 'Launched our first commercial upcycling production line',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80',
  },
  {
    year: '2019',
    title: 'CARE Partnership',
    description: 'Partnered with CARE for advanced recycling technologies',
    icon: Handshake,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  },
  {
    year: '2021',
    title: 'Glass-Filled PA Launch',
    description: 'Introduced glass-filled PA compounds from recycled materials',
    icon: Recycle,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    year: '2023',
    title: 'ISO 14001 Certification',
    description: 'Achieved environmental management system certification',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80',
  },
  {
    year: '2024',
    title: '10,000 Tons Milestone',
    description: 'Reached cumulative 10,000 tons of upcycled materials',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80',
  },
]

export function Timeline() {
  return (
    <section id="company" className="py-20 bg-gray-50">
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
            <span className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-3 block">
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
                <li key={milestone.year} className="min-h-[220px]">
                  {index > 0 && <hr className="bg-emerald-300" />}

                  {/* Left content */}
                  <div className={`timeline-start ${isLeft ? 'text-end md:pr-8' : 'md:pl-8'}`}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <time className="font-mono text-sm text-emerald-600 font-semibold tracking-wider">
                          {milestone.year}
                        </time>
                        <div className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-xs ml-auto">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:block"
                      >
                        <div className="card bg-white shadow-md overflow-hidden w-56 ml-auto hover:shadow-lg transition-shadow">
                          <figure>
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-36 object-cover"
                            />
                          </figure>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Middle icon */}
                  <div className="timeline-middle">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="bg-emerald-500 text-white rounded-full p-3 shadow-lg ring-4 ring-emerald-100"
                    >
                      <milestone.icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div className={`timeline-end ${!isLeft ? 'text-start md:pl-8' : 'md:pr-8'}`}>
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <time className="font-mono text-sm text-emerald-600 font-semibold tracking-wider">
                          {milestone.year}
                        </time>
                        <div className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-xs">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:block"
                      >
                        <div className="card bg-white shadow-md overflow-hidden w-56 hover:shadow-lg transition-shadow">
                          <figure>
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-36 object-cover"
                            />
                          </figure>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {index < milestones.length - 1 && <hr className="bg-emerald-300" />}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
