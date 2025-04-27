import { motion } from 'framer-motion';

type Step5ShareProps = {
  onShareWhatsApp: () => void;
  onShareFacebook: () => void;
  onQuit: () => void;
};

export default function Step5Share({
  onShareWhatsApp,
  onShareFacebook,
  onQuit
}: Step5ShareProps) {
  return (
    <div className="py-8 text-center">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#2A4B35] text-white font-bold px-4 py-1.5 rounded-full transform rotate-[-2deg] shadow-sm">
          Merci pour votre participation
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center mb-10"
      >
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--grisF)] mb-6">
            Vos réponses ont été enregistrées !
          </h1>
          
          <p className="text-gray-600 mb-8">
            Merci d'avoir pris le temps de répondre à notre sondage. Partagez cette opportunité avec vos proches !
          </p>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[var(--grisF)]">
              Partagez sur
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3 px-5 rounded-lg shadow-md transition-all duration-150 min-w-[140px]"
                onClick={onShareWhatsApp}
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.button>
              
              {/* Facebook */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-[#1877F2] text-white font-bold py-3 px-5 rounded-lg shadow-md transition-all duration-150 min-w-[140px]"
                onClick={onShareFacebook}
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </motion.button>
            </div>
          </div>
          
          {/* Bouton Quitter */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 border-2 border-gray-300 text-gray-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-150"
            onClick={onQuit}
          >
            Quitter
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
