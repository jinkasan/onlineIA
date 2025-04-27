import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

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
  onQuit: () => void;
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
  onComplete,
  onQuit
}: Step4SurveyProps) {
  // Déterminer si l'utilisateur est un participant au sondage uniquement (testerId >= 900)
  const isSurveyOnlyParticipant = formData.testerId && formData.testerId >= 900;
  
  // État pour afficher les messages d'erreur de validation
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  // État pour afficher une bannière d'erreur globale
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  
  // Calculer le montant du bon d'achat basé sur le testerId
  const calculateVoucherAmount = () => {
    if (!formData.testerId) return 2000;
    
    if (formData.testerId <= 100) return 5000;
    if (formData.testerId <= 300) return 3000;
    return 2000;
  };
  
  // Valider le formulaire avant soumission
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Vérifier qu'au moins une case est cochée pour chaque groupe de checkbox
    additionalQuestions
      .filter(q => q.type === 'checkbox')
      .forEach(question => {
        const hasChecked = question.options.some(opt => 
          formData.additionalQuestions?.[`${question.id}-${opt.value}`]);
        
        if (!hasChecked) {
          errors[question.id] = 'Veuillez sélectionner au moins une option';
        }
      });
    
    // Vérifier qu'au moins un produit est sélectionné ou qu'une suggestion est fournie
    if (formData.productPreferences.length === 0 && !formData.otherProductPreference) {
      errors['products'] = 'Veuillez sélectionner au moins un produit ou fournir une suggestion';
    }
    
    return errors;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = () => {
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowErrorBanner(true);
      
      // Faire défiler vers le haut pour afficher la bannière d'erreur
      const formElement = document.getElementById('surveyForm');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    
    // Si pas d'erreurs, soumettre le formulaire
    setValidationErrors({});
    setShowErrorBanner(false);
    onComplete();
  };

  return (
    <div className="py-8">
      {/* Badge PHASE BÊTA */}
      <div className="flex justify-center mb-6">
        <div className="bg-[var(--green)] text-white font-bold px-4 py-1.5 rounded-full transform rotate-[-2deg] shadow-sm">
          Je deviens testeur
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center mb-10"
        id="surveyForm"
      >
        {/* Bannière d'erreur */}
        {showErrorBanner && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3 text-left">
                <h3 className="text-sm font-medium text-red-800">Veuillez compléter tous les champs obligatoires</h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {Object.entries(validationErrors).map(([key, message]) => (
                      <li key={key}>{message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Affichage différent selon le type d'utilisateur */}
        {isSurveyOnlyParticipant ? (
          /* Contenu pour les participants au sondage uniquement */
          <div className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--grisF)] mb-4">
              Participez à notre sondage
            </h1>
            <p className="text-gray-600 mb-10">
              Merci de prendre quelques minutes pour compléter ce sondage. Vos réponses nous aideront à améliorer notre service.
            </p>
          </div>
        ) : (
          /* Contenu original pour les testeurs inscrits */
          <div>
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
            
            <p className="text-gray-600 mb-6">
              Complétez le sondage ci-dessous pour nous aider à améliorer notre service.
            </p>
          </div>
        )}
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
                  required={formData.productPreferences.length === 0}
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
                required={formData.productPreferences.length === 0}
              />
            </div>
          </div>
        </div>
        
        {/* Questions additionnelles */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-[var(--grisF)] mb-4">
            Questions (toutes les réponses sont obligatoires)
          </h4>
          
          <div className="space-y-6">
            {additionalQuestions.map((question) => (
              <div key={question.id} className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {question.question}
                  <span className="text-red-500 ml-1">*</span>
                </p>
                {validationErrors[question.id] && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-2 -mt-1 text-xs italic text-red-500 flex items-center"
                  >
                    <svg className="h-3 w-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {validationErrors[question.id]}
                  </motion.div>
                )}
                
                {question.type === 'select' && (
                  <select
                    id={question.id}
                    name={question.id}
                    onChange={(e) => {
                      onChange(e);
                      if (e.target.value) {
                        setValidationErrors(prev => {
                          const updated = {...prev};
                          delete updated[question.id];
                          return updated;
                        });
                      }
                    }}
                    className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-[var(--violet)] focus:border-[var(--violet)] sm:text-sm ${validationErrors[question.id] ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  >
                    <option value="">Sélectionner une option</option>
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
                          onChange={(e) => {
                            // Effacer l'erreur de validation
                            setValidationErrors(prev => {
                              const updated = {...prev};
                              delete updated[question.id];
                              return updated;
                            });
                            
                            // Utiliser le gestionnaire onChange passé en props
                            // Créer un nouvel événement avec les bonnes propriétés
                            const customEvent = {
                              ...e,
                              target: {
                                name: 'additionalQuestions',
                                value: {
                                  ...formData.additionalQuestions,
                                  [question.id]: e.target.value
                                },
                                type: 'select'
                              }
                            } as unknown as React.ChangeEvent<HTMLSelectElement>;
                            
                            onChange(customEvent);
                          }}
                          checked={formData.additionalQuestions?.[question.id] === option.value}
                          className={`h-4 w-4 text-[var(--rouge)] focus:ring-[var(--violet)] ${validationErrors[question.id] ? 'border-red-500' : ''}`}
                          required
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
                          onChange={(e) => {
                            onCheckboxChange(e);
                            // Effacer l'erreur lorsqu'une case est cochée
                            if (e.target.checked) {
                              setValidationErrors(prev => {
                                const updated = {...prev};
                                delete updated[question.id];
                                return updated;
                              });
                            }
                          }}
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
      
      {/* Et maintenant ? - seulement affiché si ce n'est pas un participant uniquement au sondage */}
      {!isSurveyOnlyParticipant && (
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
          <h3 className="text-xl font-bold text-[var(--violet)] mb-4">
            Et maintenant ?
          </h3>
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>Vous recevrez bientôt un email de confirmation</li>
            <li>Nous vous contacterons dès le début de la phase de test</li>
            <li>Votre bon d'achat sera activé au lancement officiel</li>
          </ol>
        </div>
      )}
      
      {/* Boutons */}
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2A4B35] hover:bg-[#2A4B35] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-white flex-1"
          onClick={handleSubmit}
        >
          Soumettre mes réponses
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[var(--rouge)] font-bold py-4 px-8 border-2 border-[var(--rouge)] rounded-xl shadow-sm transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-[var(--rouge)] flex-1"
          onClick={() => {
            // Réinitialiser les erreurs avant de quitter
            setValidationErrors({});
            setShowErrorBanner(false);
            onQuit();
          }}
        >
          Quitter
        </motion.button>
      </div>
    </div>
  );
}
