import { motion } from "framer-motion";

export default function BetaBadge() {
  return (
    <motion.div
      initial={{ opacity: 1, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      className="fixed top-28 sm:top-20 left-0 z-[999] transform flex flex-col gap-1.5 scale-95 origin-left"
    >
      <div className="bg-[#2A4B35] shadow-md p-1.5 rounded-r-lg text-white font-semibold text-xs transition-all duration-150 border-r border-t border-b border-white/20 hover:bg-[#355d42]">
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>D</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>e</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>v</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>e</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>n</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>e</span>
        <span className="block" style={{ fontFamily: 'Verdana, sans-serif' }}>z</span>
      </div>
      <div className="bg-[#2A4B35] shadow-md p-1.5 rounded-r-lg text-white font-semibold text-xs transition-all duration-150 border-r border-t border-b border-white/20 hover:bg-[#355d42]">
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>T</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>E</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>S</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>T</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>E</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>U</span>
        <span className="block text-sm" style={{ fontFamily: 'Verdana, sans-serif' }}>R</span>
      </div>
    </motion.div>
  );
}
