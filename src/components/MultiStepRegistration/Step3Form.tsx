import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';

type Step3FormProps = {
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContinue: () => void;
  onBack: () => void;
  isSubmitting: boolean;
};

export default function Step3Form({ 
  formData, 
  onChange, 
  onContinue, 
  onBack,
  isSubmitting 
}: Step3FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div className="py-8">
      {/* Badge PHASE BÊTA */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#2A4B35] text-white font-bold px-4 py-1.5 rounded-full transform rotate-[-2deg] shadow-sm">
          Je deviens testeur
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-[var(--grisF)] mb-4">
        Vos informations de testeur
      </h2>
      
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Un code de validation à 4 chiffres sera envoyé à votre adresse email pour confirmer votre inscription
      </p>
      
      {/* Formulaire */}
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100"
      >
        <div className="space-y-6">
          {/* Nom complet */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[var(--violet)] focus:border-[var(--violet)]"
              placeholder="Votre nom et prénom"
              required
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[var(--violet)] focus:border-[var(--violet)]"
              placeholder="votre.email@exemple.com"
              required
            />
            <p className="mt-1 text-xs text-gray-500">Nous vous enverrons un code de validation à 4 chiffres</p>
          </div>
          
          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone <span className="text-gray-500">(facultatif, format: +226 XX XX XX XX)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[var(--violet)] focus:border-[var(--violet)]"
              placeholder="+226"
              pattern="^(\+226|226)?[0-9]{8}$"
            />
          </div>
          
          {/* RGPD */}
          <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-3">
            <LockClosedIcon className="h-5 w-5 text-[var(--violet)] mt-0.5" />
            <p className="text-sm text-gray-600">
              Vos données personnelles sont protégées et ne seront utilisées que dans le cadre de la phase de test. 
              Aucune information bancaire ne vous sera demandée pendant cette phase.
            </p>
          </div>
        </div>
        
        {/* Boutons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2A4B35] hover:bg-[#355d42] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-white w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Validation en cours...
              </span>
            ) : (
              "Valider mes informations"
            )}
          </motion.button>
          
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[var(--violet)] text-[var(--violet)] font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-150 w-full sm:w-auto"
            onClick={onBack}
            disabled={isSubmitting}
          >
            Revenir à l'étape précédente
          </motion.button>
        </div>
      </motion.form>
      
      {/* Sauvegarde locale */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Vos données sont sauvegardées localement. Vous pouvez continuer plus tard.
      </p>
    </div>
  );
}
