import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react'

const heroImages = [
  { id: 1, alt: 'Sustainable materials production', placeholder: '/images/hero-1.jpg' },
  { id: 2, alt: 'Recycling process', placeholder: '/images/hero-2.jpg' },
  { id: 3, alt: 'Engineering thermoplastics', placeholder: '/images/hero-3.jpg' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen min-h-[700px] relative overflow-hidden flex items-center"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-slate-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-500 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-500 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500 blur-[80px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Sustainable Polymeric Solutions
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                Engineering the{' '}
                <span className="text-emerald-400">Future</span> of Sustainable Materials
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                We transform industrial waste into high-performance engineering thermoplastics—without compromising on quality.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-lg bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-xl px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all gap-2"
                >
                  Get in Touch
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#process"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl px-8 gap-2 backdrop-blur-sm"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </div>

            {/* Right column - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="col-span-2 aspect-video bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors"
                >
                  <img
                    src={heroImages[0].placeholder}
                    alt={heroImages[0].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-slate-500 text-sm">Image Placeholder</span>'
                    }}
                  />
                </motion.div>
                {/* Two smaller images */}
                {heroImages.slice(1).map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="aspect-square bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors"
                  >
                    <img
                      src={image.placeholder}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-slate-500 text-sm">Image Placeholder</span>'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 mt-12 lg:hidden"
          >
            {heroImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <img
                  src={image.placeholder}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-slate-500 text-xs">Image</span>'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#process"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
