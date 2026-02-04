import { motion } from 'framer-motion'
import { ArrowRight, Clock, MessageSquare } from 'lucide-react'

export function CTABand() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a compound for your next project?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Let's discuss how our sustainable materials can meet your requirements
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-lg bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-none rounded-lg px-8 shadow-lg gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Talk to an Expert
            </motion.a>
            <motion.a
              href="#materials"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-lg btn-outline text-white border-white/30 hover:bg-white/10 hover:border-white/50 rounded-lg px-8 gap-2"
            >
              Browse Materials
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Response time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm">Typical response time: 1-2 business days</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
