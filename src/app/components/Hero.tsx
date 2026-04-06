import { motion } from 'motion/react';
import { ArrowDown, Globe, HeartHandshake, PawPrint } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.22),transparent_24%),radial-gradient(circle_at_20%_25%,rgba(120,177,138,0.22),transparent_28%),linear-gradient(135deg,#0f1d16,#18382d_42%,#10261e)]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-16 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="absolute inset-x-0 top-20 z-0 flex justify-center px-6">
        <div className="grid w-full max-w-3xl grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="rounded-[2rem] border border-white/10 bg-white/6 p-5 text-white/90 backdrop-blur-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-300/20 text-amber-200">
              <PawPrint className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/55">Animal</p>
            <p className="mt-3 text-lg font-light text-white sm:text-xl">Loofio the dog who started the walk</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/6 p-5 text-white/90 backdrop-blur-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-300/20 text-rose-100">
              <HeartHandshake className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/55">Human</p>
            <p className="mt-3 text-lg font-light text-white sm:text-xl">People choosing action over waiting</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="rounded-[2rem] border border-white/10 bg-white/6 p-5 text-white/90 backdrop-blur-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-300/20 text-sky-100">
              <Globe className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/55">Earth</p>
            <p className="mt-3 text-lg font-light text-white sm:text-xl">A cleaner route, one day at a time</p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl pt-56 text-center sm:pt-64 md:pt-72"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-amber-200/90"
          >
            Daily Walk. Daily Pickup. Daily Care.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 px-4 text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Loofio Cares
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mb-5 max-w-3xl px-4 text-lg font-light text-white/90 sm:text-xl md:text-2xl"
          >
            Loofio is our dog. We started this project during our walks with him, after seeing trash everywhere and realizing we did not need to wait for a big event to begin.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mx-auto mb-12 max-w-2xl px-4 text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Loofio Cares is about doing one small real thing every day: grab a picker, walk the dog, and leave the street cleaner than we found it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-h-[44px] min-w-[44px] rounded-full bg-amber-300 px-8 py-4 text-stone-950 transition-all duration-300 hover:bg-amber-200"
            >
              Read Our Story
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('track')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-h-[44px] min-w-[44px] rounded-full border border-white/25 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              See Daily Track
            </motion.button>
          </motion.div>

        </motion.div>

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
