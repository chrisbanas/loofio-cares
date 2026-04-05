import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760891874998-21ecb8c2189a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBmb3Jlc3QlMjBncmVlbnxlbnwxfHx8fDE3NzQ4MzU0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Nature Conservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl w-full"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight px-4"
          >
            Loofio Cares
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-12 px-4"
          >
            Protecting our planet, one cleanup at a time
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 min-h-[44px] min-w-[44px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 touch-manipulation"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
          className="absolute bottom-8 hidden sm:block"
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}