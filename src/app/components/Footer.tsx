import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-light mb-2">Loofio Cares</h3>
            <p className="text-gray-400 text-sm sm:text-base px-4">
              A non-profit organization dedicated to nature conservation
            </p>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-6 max-w-md mx-auto"
          />

          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base mb-6">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            </motion.div>
            <span>for our planet</span>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm px-4">
            © {new Date().getFullYear()} Loofio Cares. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}