import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 px-6 py-10 text-white sm:px-8 sm:py-12">
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
            <p className="px-4 text-sm text-stone-400 sm:text-base">
              Inspired by walking Loofio.
            </p>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mb-6 h-px max-w-md bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          />

          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-stone-400 sm:text-base">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            </motion.div>
            <span>for the earth beneath our feet</span>
          </div>

          <p className="px-4 text-xs text-stone-500 sm:text-sm">
            © {new Date().getFullYear()} Loofio Cares. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
