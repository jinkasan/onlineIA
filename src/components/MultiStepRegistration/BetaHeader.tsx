import { motion } from 'framer-motion';

type BetaHeaderProps = {
  currentStep: number;
  totalSteps: number;
  testerCount: number;
};

export default function BetaHeader({ currentStep, totalSteps, testerCount }: BetaHeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md py-3 px-8 sm:px-12 border-b border-[var(--grisC)]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo avec badge BÊTA */}
        <div className="flex items-center relative">
          <img src="/jinkasan.svg" alt="Jinkasan Logo" className="h-10 bg-white p-1 rounded" />
          <div className="bg-[var(--rouge)] text-white text-xs font-bold px-2 py-1 rounded-lg absolute -top-2 -right-2 transform rotate-[-8deg] border border-white shadow-sm">
            PHASE BÊTA
          </div>
        </div>
        
        {/* Stepper */}
        <div className="flex items-center justify-center">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 === currentStep
                    ? 'bg-[var(--rouge)] text-white'
                    : index + 1 < currentStep
                    ? 'bg-[var(--vert)] text-white'
                    : 'border-2 border-[var(--rouge)] bg-white text-[var(--grisF)]'
                }`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div 
                  className={`w-8 h-1 ${index + 1 < currentStep ? 'bg-[var(--vert)]' : 'bg-gray-200'}`}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Compteur de testeurs */}
        <motion.div 
          className="flex items-center bg-[var(--grisC)] bg-opacity-30 text-[var(--grisF)] px-4 py-2 rounded-full shadow-sm border border-[var(--grisC)]"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-bold">{testerCount}/500 testeurs</span>
          
          {/* Barre de progression */}
          <div className="ml-2 w-16 h-2 bg-[var(--grisC)] rounded-full overflow-hidden">
            <div 
              className="h-full" 
              style={{ 
                width: `${(testerCount / 500) * 100}%`,
                background: `linear-gradient(90deg, var(--vert) 0%, var(--rouge) 100%)`
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
