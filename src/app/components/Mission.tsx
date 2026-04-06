import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import loofioImage from '@/assets/loofio.jpg';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="story" className="bg-[#f6f1e8] px-6 py-16 sm:px-8 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-6 text-4xl font-light text-stone-900 sm:text-5xl md:text-6xl">
            Our Story
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-amber-500" />
          <p className="mx-auto max-w-3xl px-4 text-lg leading-relaxed text-stone-700 sm:text-xl">
            Loofio Cares began with our daily walks, our love of nature, and one decision to stop waiting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={loofioImage}
                alt="Loofio"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent" />
            </div>
            <p className="mt-4 text-center text-sm uppercase tracking-[0.28em] text-stone-500">
              Meet Loofio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 px-4 text-stone-700"
          >
            <h3 className="text-2xl font-light text-stone-900 sm:text-3xl">
              Why we stopped waiting
            </h3>
            <p className="text-base leading-relaxed sm:text-lg">
              We walk our dog, Loofio, every day around our neighborhood. On weekends, we take him on longer walks, usually to a hiking trail or the beach.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              We love nature. Time outside feels like a reset for us. It gives us energy for the week ahead. Because of Loofio, we have had more chances to be close to nature and notice the quiet details of daily life: spring flowers in bloom, the bright summer sun, yellow autumn leaves, and the stillness of winter.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              In a life shaped by long hours of sitting and working, that connection feels especially precious. But even in that peace, we kept noticing trash everywhere: used tissues, plastic packaging, and bagged dog waste left behind. It made us feel powerless.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              We know there is no perfect way to stop people from littering, and there may never be a day when the world is completely trash-free. For a long time, we imagined that maybe one day we would start a nonprofit and organize people to clean up together. But real life made that dream feel far away.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              Then one night, after feeling disappointed in our own helplessness again, we realized something simple:
            </p>
            <p className="rounded-[1.5rem] border-l-4 border-amber-500 bg-white/70 px-5 py-4 text-lg font-medium leading-relaxed text-stone-900 shadow-sm sm:text-xl">
              Just because we cannot fix everything does not mean we cannot do anything.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              We can start by picking up trash ourselves. We may not be able to solve the world&apos;s litter problem, but the trash we pick up is real. And when we remove it, the earth is truly a little cleaner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
