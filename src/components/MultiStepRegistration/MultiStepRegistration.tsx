import { useState } from 'react';
import { motion } from 'framer-motion';
import Step1Declic from './Step1Declic';
import Step2Confirmation from './Step2Confirmation';
import Step3Form from './Step3Form';
import Step3CodeVerification from './Step3CodeVerification';
import Step4Survey from './Step4Survey';
import Step5Share from './Step5Share';
import BetaHeader from './BetaHeader';

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  productPreferences: string[];
  otherProductPreference: string;
  additionalQuestions: Record<string, any>;
  testerId?: number;
};

export default function MultiStepRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    email: '',
    productPreferences: [],
    otherProductPreference: '',
    additionalQuestions: {}
  });
  // Utilisation du préfixe underscore pour indiquer une variable intentionnellement non utilisée
  const [testerCount, _setTesterCount] = useState(321);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    // Faire défiler vers le haut de la section d'inscription
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    // Faire défiler vers le haut de la section d'inscription
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Fonction pour passer directement à l'étape du sondage sans inscription
  const skipToSurvey = () => {
    // Créer un utilisateur anonyme pour le sondage avec des valeurs par défaut
    setFormData({
      ...formData,
      name: "Utilisateur anonyme", 
      email: "anonymous@jinkasan.com",
      testerId: Math.floor(Math.random() * 100) + 900, // ID spécial pour les anonymes (900-999)
      productPreferences: [], // Initialiser les préférences de produits avec un tableau vide
      otherProductPreference: "", // Initialiser les autres préférences
      additionalQuestions: {} // Initialiser les questions additionnelles avec un objet vide
    });
    
    // Passer directement à l'étape de l'enquête (étape 5)
    setCurrentStep(5);
    
    // Faire défiler vers le haut de la section d'inscription
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name.startsWith('productPreference-')) {
      const product = name.replace('productPreference-', '');
      setFormData(prev => {
        const updatedPreferences = checked 
          ? [...prev.productPreferences, product]
          : prev.productPreferences.filter(p => p !== product);
        
        return {
          ...prev,
          productPreferences: updatedPreferences
        };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        additionalQuestions: {
          ...prev.additionalQuestions,
          [name]: checked
        }
      }));
    }
  };

  const handleSubmitForm = async () => {
    setIsSubmitting(true);
    try {
      // Simuler un appel API pour envoyer le code de vérification par email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Dans une implémentation réelle, nous générerions et enverrions
      // un code de 4 chiffres à l'adresse email fournie
      console.log(`Code de vérification envoyé à: ${formData.email}`);
      
      // Passer à l'étape de vérification du code
      setVerificationSent(true);
      setCurrentStep(currentStep + 1);
      // Faire défiler vers le haut de la section d'inscription
      document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Error sending verification code:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleVerifyCode = async () => {
    setIsSubmitting(true);
    try {
      // Simuler un appel API pour vérifier le code
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Générer un ID de testeur aléatoire entre 300 et 400
      const testerId = Math.floor(Math.random() * 100) + 300;
      
      console.log(`Code vérifié pour: ${formData.email}, testerId attribué: ${testerId}`);
      
      setFormData(prev => ({...prev, testerId}));
      setCurrentStep(currentStep + 1);
      // Faire défiler vers le haut de la section d'inscription
      document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Error verifying code:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleResendCode = async () => {
    // Simuler un nouvel envoi du code
    console.log(`Nouveau code envoyé à: ${formData.email}`);
  };
  
  const handleComplete = () => {
    // Simuler la finalisation de l'inscription
    console.log('Soumission du sondage pour:', formData.name);
    
    // Passer à l'étape de partage
    setCurrentStep(6);
    
    // Faire défiler vers le haut de la section d'inscription
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const quit = () => {
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      phone: '',
      email: '',
      productPreferences: [],
      otherProductPreference: '',
      additionalQuestions: {}
    });
    
    // Revenir à l'étape 1
    setCurrentStep(1);
    
    // Faire défiler vers le haut de la page complètement (vers la section Hero)
    window.scrollTo(0, 0);
  };
  
  // Messages de partage personnalisés par plateforme
  const getWhatsAppMessage = () => {
    // Message spécifique pour WhatsApp avec emojis pour plus d'engagement
    return `💡 *Je viens de rejoindre la communauté Jinkasan !* 🎉

👥 Cette nouvelle plateforme d'achat groupé va révolutionner notre façon d'acheter au Burkina Faso.

💰 *Avantages exclusifs pour les bêta-testeurs :*
- Jusqu'à 5000 FCFA de bon d'achat
- Accès prioritaire aux meilleures offres
- Influence sur les futurs produits

🚀 Rejoins-moi en devenant testeur dès maintenant !
`;
  };
  
  const getFacebookMessage = () => {
    // Message plus formel pour Facebook
    return `Je viens de m'inscrire comme testeur sur Jinkasan, la nouvelle plateforme d'achat groupé qui va changer nos habitudes de consommation au Burkina Faso ! 🎉

En tant que bêta-testeur, je vais bénéficier d'avantages exclusifs et participer à l'évolution de cette innovation 100% burkinabé. Rejoignez l'aventure et obtenez jusqu'à 5000 FCFA de bon d'achat pour le lancement officiel !`;
  };
  
  // Partage via WhatsApp
  const handleShareWhatsApp = () => {
    const message = getWhatsAppMessage();
    const url = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message + '\n\n🔗 ' + url)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Partage via Facebook
  const handleShareFacebook = () => {
    // Solution simple qui ne nécessite pas d'App ID Facebook
    const message = getFacebookMessage();
    const url = window.location.href;
    
    // Utilise l'API Sharer standard
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    
    // Ouvre la fenêtre de partage Facebook
    window.open(facebookUrl, '_blank', 'width=626,height=436');
    
    // Comme Facebook ne permet pas de préremplir facilement le message via l'API Sharer,
    // nous copions le message dans le presse-papiers pour que l'utilisateur puisse facilement le coller
    try {
      navigator.clipboard.writeText(message)
        .then(() => {
          // Attendre que la fenêtre Facebook s'ouvre
          setTimeout(() => {
            alert("Le message a été copié dans votre presse-papiers ! Collez-le dans votre publication Facebook.");
          }, 1000);
        })
        .catch(() => console.log('Impossible de copier le message dans le presse-papiers'));
    } catch (error) {
      console.log('Erreur lors de la copie du message:', error);
    }
  };
  
  // Fonction de partage générique supprimée car non utilisée

  return (
    <div className="beta-registration-container relative bg-gradient-to-b from-[#DD442E]/5 via-white to-[#FACE31]/10">
      {/* Sticky header with progress & counter */}
      <BetaHeader 
        currentStep={currentStep} 
        totalSteps={5} 
        testerCount={testerCount} 
      />

      {/* Main content based on current step */}
      <motion.div 
        className="step-content max-w-4xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentStep === 1 && (
          <Step1Declic 
            onContinue={nextStep} 
            testerCount={testerCount}
            onSkipToSurvey={skipToSurvey}
          />
        )}
        
        {currentStep === 2 && (
          <Step2Confirmation 
            onContinue={nextStep} 
            onBack={prevStep} 
          />
        )}
        
        {currentStep === 3 && (
          <Step3Form 
            formData={formData} 
            onChange={handleInputChange}
            onContinue={handleSubmitForm}
            onBack={prevStep}
            isSubmitting={isSubmitting}
          />
        )}
        
        {currentStep === 4 && verificationSent && (
          <Step3CodeVerification 
            email={formData.email}
            onVerify={handleVerifyCode}
            onResend={handleResendCode}
            onBack={prevStep}
            isSubmitting={isSubmitting}
          />
        )}
        
        {currentStep === 5 && (
          <Step4Survey 
            formData={formData}
            onChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onComplete={handleComplete}
            onQuit={quit}
          />
        )}
        
        {currentStep === 6 && (
          <Step5Share
            onShareWhatsApp={handleShareWhatsApp}
            onShareFacebook={handleShareFacebook}
            onQuit={quit}
          />
        )}
      </motion.div>
      
      {/* Footer with Prototype label */}
      <div className="beta-footer bg-purple-900 text-white text-center py-3 text-sm">
        <p>⚠️ Site en version bêta de collecte de testeurs – la plateforme finale ouvrira après vos retours.</p>
      </div>
    </div>
  );
}
