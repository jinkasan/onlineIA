import { motion } from 'framer-motion';
import { CheckCircleIcon, ShareIcon } from '@heroicons/react/24/outline';

type Step4SurveyProps = {
  formData: {
    name: string;
    productPreferences: string[];
    otherProductPreference: string;
    additionalQuestions: Record<string, any>;
    testerId?: number;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onComplete: () => void;
};

const productCategories = [
  { id: 'electromenager', label: 'Électroménager' },
  { id: 'moto', label: 'Moto' },
  { id: 'assurances', label: 'Assurances' },
  { id: 'smartphones', label: 'Smartphones' },
];

const additionalQuestions = [
  {
    id: 'location',
    type: 'select',
    question: 'Dans quelle ville/région du Burkina Faso habitez-vous ?',
    options: [
      { value: 'ouagadougou', label: 'Ouagadougou' },
      { value: 'bobo-dioulasso', label: 'Bobo-Dioulasso' },
      { value: 'koudougou', label: 'Koudougou' },
      { value: 'autre', label: 'Autre' },
    ],
  },
  {
    id: 'frequency',
    type: 'radio',
    question: 'À quelle fréquence achetez-vous des produits en groupe (avec famille, amis, collègues) ?',
    options: [
      { value: 'never', label: 'Jamais' },
      { value: 'rarely', label: 'Rarement' },
      { value: 'sometimes', label: 'Parfois' },
      { value: 'often', label: 'Souvent' },
      { value: 'very-often', label: 'Très souvent' },
    ],
  },
  {
    id: 'budget',
    type: 'select',
    question: 'Quel budget mensuel consacrez-vous aux achats non-alimentaires ?',
    options: [
      { value: 'less-10000', label: 'Moins de 10 000 FCFA' },
      { value: '10000-50000', label: '10 000-50 000 FCFA' },
      { value: '50000-100000', label: '50 000-100 000 FCFA' },
      { value: 'more-100000', label: 'Plus de 100 000 FCFA' },
    ],
  },
  {
    id: 'source',
    type: 'checkbox',
    question: 'Comment avez-vous entendu parler de Jinkasan ?',
    options: [
      { value: 'social-media', label: 'Réseaux sociaux' },
      { value: 'friend-family', label: 'Ami/Famille' },
      { value: 'radio', label: 'Radio' },
      { value: 'display', label: 'Affichage' },
      { value: 'other', label: 'Autre' },
    ],
  },
];

export default function Step4Survey({ 
  formData,
  onChange,
  onCheckboxChange,
  onComplete
}: Step4SurveyProps) {
  // Calculer le montant du bon d'achat basé sur le testerId
  const calculateVoucherAmount = () => {
    if (!formData.testerId) return 2000;
    
    if (formData.testerId <= 100) return 5000;
    if (formData.testerId <= 300) return 3000;
    return 2000;
  };

  return (
    <div className="py-8">
      {/* Badge PHASE BÊTA */}
      <div className="flex justify-center mb-6">
        <div className="bg-[var(--rouge)] text-white font-bold px-4 py-1.5 rounded-full transform rotate-[-2deg] shadow-sm">
          PHASE BÊTA
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircleIcon className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-[var(--grisF)] mb-2">
          Félicitations, testeur n°{formData.testerId || "XXX"} !
        </h2>
        
        <div className="bg-[var(--jaune)] bg-opacity-10 p-4 rounded-lg mb-6 border border-[var(--jaune)] border-opacity-20">
          <p className="text-[var(--grisF)] font-semibold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--jaune)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-4 4v12h10.2M16 8h2.9a4 4 0 014 4v8h-2" />
            </svg>
            Vous avez débloqué un bon d'achat de {calculateVoucherAmount().toLocaleString()} FCFA valable au lancement officiel.
          </p>
        </div>
      </motion.div>
      
      {/* Sondage */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-10">
        <h3 className="text-xl font-bold text-[var(--grisF)] mb-4">
          Aidez-nous à définir les produits pour les futurs achats groupés
        </h3>
        
        {/* Question principale */}
        <div className="mb-8">
          <p className="font-medium text-gray-700 mb-3">
            Quels produits ou services souhaitez-vous voir en achat groupé ?
          </p>
          <div className="space-y-2">
            {productCategories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`productPreference-${category.id}`}
                  name={`productPreference-${category.id}`}
                  onChange={onCheckboxChange}
                  checked={formData.productPreferences.includes(category.id)}
                  className="h-5 w-5 text-[var(--rouge)] focus:ring-[var(--violet)] rounded"
                />
                <label htmlFor={`productPreference-${category.id}`} className="ml-2 text-gray-700">
                  {category.label}
                </label>
              </div>
            ))}
            
            {/* Autre option */}
            <div>
              <label htmlFor="otherProductPreference" className="block text-gray-700 mb-1">
                Autre (précisez):
              </label>
              <input
                type="text"
                id="otherProductPreference"
                name="otherProductPreference"
                value={formData.otherProductPreference}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Vos suggestions de produits"
              />
            </div>
          </div>
        </div>
        
        {/* Questions additionnelles */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-[var(--grisF)] mb-4">
            Questions facultatives (pour mieux vous connaître)
          </h4>
          
          <div className="space-y-6">
            {additionalQuestions.map((question) => (
              <div key={question.id} className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{question.question}</p>
                
                {question.type === 'select' && (
                  <select
                    id={question.id}
                    name={question.id}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[var(--violet)] focus:border-[var(--violet)]"
                  >
                    <option value="">Sélectionnez une option</option>
                    {question.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                
                {question.type === 'radio' && (
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          id={`${question.id}-${option.value}`}
                          name={question.id}
                          value={option.value}
                          onChange={onChange}
                          className="h-4 w-4 text-[var(--rouge)] focus:ring-[var(--violet)]"
                        />
                        <label htmlFor={`${question.id}-${option.value}`} className="ml-2 text-sm text-gray-700">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                {question.type === 'checkbox' && (
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${question.id}-${option.value}`}
                          name={`${question.id}-${option.value}`}
                          onChange={onCheckboxChange}
                          className="h-4 w-4 text-[var(--rouge)] focus:ring-[var(--violet)] rounded"
                        />
                        <label htmlFor={`${question.id}-${option.value}`} className="ml-2 text-sm text-gray-700">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Et maintenant ? */}
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
        <h3 className="text-xl font-bold text-[var(--violet)] mb-4">
          Et maintenant ?
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li>Vous recevrez bientôt un SMS de confirmation</li>
          <li>Nous vous contacterons dès le début de la phase de test</li>
          <li>Votre bon d'achat sera activé au lancement officiel</li>
        </ol>
      </div>
      
      {/* Boutons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[var(--rouge)] hover:bg-[#E14A29] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-white"
          onClick={onComplete}
        >
          Terminer
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[var(--violet)] text-[var(--violet)] font-bold py-4 px-8 rounded-xl hover:bg-purple-50 flex items-center transition-all duration-150"
        >
          <ShareIcon className="h-5 w-5 mr-2" />
          Partager l'inscription
        </motion.button>
      </div>
    </div>
  );
}
