import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';

export function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 bg-emerald-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join us in making a difference. Every action counts, and together we can create lasting change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={hoveredCard === 0 ? { scale: 2.5, opacity: 0.1 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full"
            />
            
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 touch-manipulation">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                Contact Us
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Have questions or want to learn more about our initiatives? Reach out to us and let's start a conversation.
              </p>
              <a
                href="mailto:hello@loofiocares.org"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors min-h-[44px] touch-manipulation break-all"
              >
                <span className="text-base sm:text-lg">hello@loofiocares.org</span>
              </a>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={hoveredCard === 1 ? { scale: 2.5, opacity: 0.2 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"
            />
            
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 touch-manipulation">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light mb-4">
                Support Our Cause
              </h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed text-white/90">
                Your support helps us organize cleanup events, raise awareness, and make a tangible impact on environmental conservation.
              </p>
              <p className="text-lg font-light">
                Together, we can protect what we love.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Nature Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-12 relative overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBsYW50aW5nJTIwdHJlZSUyMGVhcnRofGVufDF8fHx8MTc3NDgzNTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hands planting tree"
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-transparent flex items-center px-6 sm:px-8">
            <div>
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3" />
              <p className="text-white text-lg sm:text-xl md:text-2xl font-light">
                Local action, global impact
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}