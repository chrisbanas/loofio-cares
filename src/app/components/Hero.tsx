import { motion } from 'motion/react';
import { ArrowDown, HeartHandshake, Leaf, PawPrint } from 'lucide-react';
import { trackerCells, trackerMonth, trackerSummary, type TrackDay } from '../trackerData';

const heroCellStyles: Record<TrackDay['status'], string> = {
  pickup: 'bg-emerald-400 text-stone-950',
  'long-walk': 'bg-amber-300 text-stone-950',
  none: 'bg-white/10 text-white/55 ring-1 ring-inset ring-white/10',
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.22),transparent_24%),radial-gradient(circle_at_20%_25%,rgba(120,177,138,0.22),transparent_28%),linear-gradient(135deg,#0f1d16,#18382d_42%,#10261e)]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-16 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="absolute inset-x-0 top-16 z-0 flex justify-center px-6 sm:top-20">
        <div className="w-full max-w-5xl">
          <div className="hidden items-center justify-center md:flex">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full border border-white/12 bg-white/8 p-8 text-center text-white/90 backdrop-blur-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-300/20 text-amber-200">
                <PawPrint className="h-7 w-7" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Animal</p>
              <p className="mt-3 max-w-[8rem] text-lg font-light text-white">Loofio brings us outside.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="relative z-20 -mx-5 flex h-64 w-64 flex-col items-center justify-center rounded-full border border-white/15 bg-white/10 px-10 py-10 text-center text-white shadow-2xl backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.16),transparent_60%)]" />
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-300/20 text-sky-100">
                <Leaf className="h-10 w-10" />
              </div>
              <p className="relative mt-5 text-sm uppercase tracking-[0.3em] text-white/55">Earth</p>
              <p className="relative mt-3 max-w-[14rem] text-2xl font-light text-white">
                The place we care for together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full border border-white/12 bg-white/8 p-8 text-center text-white/90 backdrop-blur-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-300/20 text-rose-100">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Human</p>
              <p className="mt-3 max-w-[8rem] text-lg font-light text-white">We choose to act now.</p>
            </motion.div>
          </div>

          <div className="grid gap-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mx-auto flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-8 text-center text-white shadow-2xl backdrop-blur-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-300/20 text-sky-100">
                <Leaf className="h-8 w-8" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/55">Earth</p>
              <p className="mt-3 max-w-[10rem] text-xl font-light">The place we care for together.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-white/6 p-6 text-center text-white/90 backdrop-blur-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-300/20 text-amber-200">
                  <PawPrint className="h-7 w-7" />
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Animal</p>
                <p className="mt-3 max-w-[6rem] text-sm font-light text-white">Loofio brings us outside.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-white/6 p-6 text-center text-white/90 backdrop-blur-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-300/20 text-rose-100">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Human</p>
                <p className="mt-3 max-w-[6rem] text-sm font-light text-white">We choose to act now.</p>
              </motion.div>
            </div>
          </div>
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
            Turn Every Dog Walk Into A Cleanup.
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
            Dog walks with a trash picker. That&apos;s how we start.
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

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('track')?.scrollIntoView({ behavior: 'smooth' })}
            className="mx-auto mt-10 block w-full max-w-xl rounded-[2rem] border border-white/12 bg-white/8 p-5 text-left text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Daily Track Preview</p>
                <p className="mt-2 text-2xl font-light text-white">{trackerMonth.monthLabel}</p>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                {trackerSummary.cleanupDays} cleanup days
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1.5 text-center text-[10px] uppercase tracking-[0.2em] text-white/35">
              {trackerMonth.weekdayLabels.map((weekday) => (
                <span key={weekday}>{weekday.slice(0, 1)}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {trackerCells.map((cell, index) => {
                if (!cell) {
                  return <div key={`empty-${index}`} className="aspect-square rounded-xl bg-transparent" />;
                }

                const isFuture = cell.day > trackerMonth.loggedThroughDay;

                return (
                  <div
                    key={cell.day}
                    className={`flex aspect-square items-center justify-center rounded-xl text-xs transition-colors sm:text-sm ${
                      isFuture ? 'bg-white/5 text-white/25 ring-1 ring-inset ring-white/8' : heroCellStyles[cell.status]
                    }`}
                  >
                    {cell.day}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/70 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Pickup done
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                Long walk cleanup
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                Not logged yet
              </span>
            </div>
          </motion.button>

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
