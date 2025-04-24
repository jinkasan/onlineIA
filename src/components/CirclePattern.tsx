import { motion } from 'framer-motion';

interface CirclePatternProps {
  className?: string;
}

export default function CirclePattern({ className = '' }: CirclePatternProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Cercle rouge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-32 h-32 rounded-full bg-[#FF4500]/10"
      />
      
      {/* Cercle vert */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute w-24 h-24 -right-6 top-6 rounded-full bg-[#4CAF50]/10"
      />
      
      {/* Cercle jaune */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute w-20 h-20 -left-4 top-12 rounded-full bg-[#FFD700]/10"
      />
    </div>
  );
}
