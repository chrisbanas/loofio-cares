import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, Mail, HandCoins } from 'lucide-react';

export function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="support" className="bg-[#dfeee5] px-6 py-16 sm:px-8 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-6 text-4xl font-light text-stone-900 sm:text-5xl md:text-6xl">
            Donate And Email Us
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-emerald-500" />
          <p className="mx-auto max-w-3xl px-4 text-lg text-stone-700 sm:text-xl">
            If this story feels familiar, we would love to hear from you. If you want to support the project, the donation link will be added here soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={hoveredCard === 0 ? { scale: 2.5, opacity: 0.1 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full"
            />
            
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 sm:h-16 sm:w-16">
                <Mail className="h-7 w-7 text-emerald-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-light text-stone-900 sm:text-3xl">
                Email Us
              </h3>
              <p className="mb-6 text-base leading-relaxed text-stone-700 sm:text-lg">
                Reach out if you want to share your own cleanup story, ask a question, or just say hello. We want Loofio Cares to feel personal and real.
              </p>
              <a
                href="mailto:loofiollc@gmail.com"
                className="inline-flex min-h-[44px] items-center break-all text-emerald-700 transition-colors hover:text-emerald-800"
              >
                <span className="text-base sm:text-lg">loofiollc@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-stone-900 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={hoveredCard === 1 ? { scale: 2.5, opacity: 0.2 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"
            />
            
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 sm:h-16 sm:w-16">
                <HandCoins className="h-7 w-7 text-white sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-light sm:text-3xl">
                Donation Link Coming Soon
              </h3>
              <p className="mb-6 text-base leading-relaxed text-white/90 sm:text-lg">
                We are still setting up donations. When the link is ready, it will appear here.
              </p>
              <div className="space-y-3 text-left text-sm leading-relaxed text-white/85 sm:text-base">
                <p>
                  1. Send trash-pick kits to people who want to start small.
                </p>
                <p>
                  2. Hold cleanup events like Earth Day pickups in neighborhoods, hiking trails, and by the ocean.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
