import { motion } from 'framer-motion';

interface Step1DeclicProps {
  onContinue: () => void;
  testerCount: number;
  onSkipToSurvey?: () => void;
};

export default function Step1Declic({ onContinue, testerCount, onSkipToSurvey }: Step1DeclicProps) {
  return (
    <div className="text-center py-8">
      {/* Badge PHASE BÊTA */}
      <div className="inline-block bg-[#2A4B35] text-white font-bold px-4 py-1.5 rounded-full mb-6 transform rotate-[-2deg] shadow-sm">
        Je deviens testeur
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--grisF)] mb-4">
        Souhaitez-vous devenir testeur Jinkasan ?
      </h1>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Testez notre future plateforme d'achat groupé et gagnez <span className="whitespace-nowrap">jusqu'à 5 000 FCFA</span>.
      </p>
      
      {/* Compteur avec animation */}
      <motion.div 
        className="flex items-center justify-center mb-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gray-100 rounded-xl p-6 inline-flex items-center shadow-sm border border-gray-200">
          <div className="text-2xl font-semibold text-[var(--violet)] mr-3">
            {testerCount}/500
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500">testeurs déjà inscrits</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-[#2A4B35]"
                initial={{ width: 0 }}
                animate={{ width: `${(testerCount / 500) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Boutons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2A4B35] hover:bg-[#2A4B35] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-white"
          onClick={onContinue}
        >
          Oui, je deviens testeur
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[var(--violet)] text-[var(--violet)] font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-150"
          onClick={onSkipToSurvey}
        >
          Participer au sondage uniquement
        </motion.button>
      </div>
      
      {/* Note importante */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-xl mx-auto">
        <p className="text-sm text-[var(--violet)] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold">Aucun paiement requis</span> - Phase de test uniquement
        </p>
      </div>
    </div>
  );
}
