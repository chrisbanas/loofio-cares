import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Leaf, Users, Trash2 } from 'lucide-react';

const impactItems = [
  {
    icon: Leaf,
    title: 'Nature Conservation',
    description: 'Protecting ecosystems and preserving biodiversity for future generations',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Bringing together passionate individuals to create lasting environmental impact',
    color: 'blue',
  },
  {
    icon: Trash2,
    title: 'Cleanup Initiatives',
    description: 'Organizing targeted efforts to remove litter from our natural spaces',
    color: 'green',
  },
];

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-white to-emerald-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our Focus
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mb-6 touch-manipulation`}
              >
                <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${item.color}-600`} />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1772652864425-4485a5421024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlzdGluZSUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzQ4MzU0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pristine nature landscape"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 sm:p-8">
              <p className="text-white text-xl sm:text-2xl font-light">
                This is what we're fighting to protect
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}