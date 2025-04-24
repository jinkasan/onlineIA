import { motion } from "framer-motion";

export default function BetaBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-28 sm:top-20 left-0 z-50 transform"
    >
      <div className="bg-[var(--rouge)] shadow-md p-2 rounded-r-lg text-white font-bold text-sm transition-all duration-150 border-r border-t border-b border-white/10">
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>PHASE</span>
        <span className="block text-lg" style={{ fontFamily: 'Verdana, sans-serif' }}>BÊTA</span>
      </div>
    </motion.div>
  );
}
