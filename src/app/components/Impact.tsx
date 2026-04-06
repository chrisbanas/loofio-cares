import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Footprints, Trash2, CalendarDays } from 'lucide-react';

const impactItems = [
  {
    icon: Footprints,
    title: 'Daily Walks',
    description: 'We clean as part of a routine, because change is easier to sustain when it fits into real life.',
    iconClassName: 'text-amber-700',
    panelClassName: 'bg-amber-100',
  },
  {
    icon: Trash2,
    title: 'Trash Picked',
    description: 'Each wrapper, bottle, and broken piece removed is one less thing left in the street.',
    iconClassName: 'text-emerald-700',
    panelClassName: 'bg-emerald-100',
  },
  {
    icon: CalendarDays,
    title: 'Consistency Over Events',
    description: 'This is not about waiting for a special cleanup day. It is about showing up again tomorrow.',
    iconClassName: 'text-sky-700',
    panelClassName: 'bg-sky-100',
  },
];

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="track" className="bg-[#fffaf2] px-6 py-16 sm:px-8 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-6 text-4xl font-light text-stone-900 sm:text-5xl md:text-6xl">
            Daily Track
          </h2>
          <div className="mx-auto h-1 w-24 bg-emerald-500" />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">
            We want this section to grow with the work. For now, it shows the kind of progress we want to record as Loofio Cares keeps going.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="rounded-[2rem] bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16 ${item.panelClassName}`}>
                <item.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${item.iconClassName}`} />
              </div>
              <h3 className="mb-4 text-xl font-light text-stone-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-stone-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-stone-200/70 bg-stone-900 text-stone-50 shadow-2xl sm:mt-16"
        >
          <div className="grid gap-8 px-6 py-8 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-300/80">
                Placeholder Tracking Board
              </p>
              <h3 className="mb-4 text-3xl font-light sm:text-4xl">
                We will keep counting the proof that small routines matter.
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
                As the project grows, this section can become a real running log with totals, route notes, photos, and daily counts. For now, it marks the intention clearly: pick up trash during the walk, and keep doing it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              <div className="rounded-2xl bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Walks Logged</p>
                <p className="mt-3 text-4xl font-light text-white">00</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Trash Items</p>
                <p className="mt-3 text-4xl font-light text-white">000</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Days in a Row</p>
                <p className="mt-3 text-4xl font-light text-white">00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
