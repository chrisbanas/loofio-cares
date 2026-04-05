import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission" className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every piece of litter tells a story of neglect. We're here to change that narrative. 
            Loofio Cares is dedicated to protecting our natural world through organized cleanup 
            efforts and raising awareness about environmental conservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY2xlYW5pbmclMjBiZWFjaCUyMHRyYXNofGVufDF8fHx8MTc3NDgzNTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers cleaning beach"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 px-4"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Why We Started
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The sadness we feel when we see litter scattered across beautiful landscapes 
              drove us to action. We believe that change starts with awareness and community effort.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              My wife and I founded Loofio Cares to create a platform where like-minded 
              individuals can come together, organize cleanup initiatives, and make a tangible 
              difference in preserving the beauty of our natural world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}