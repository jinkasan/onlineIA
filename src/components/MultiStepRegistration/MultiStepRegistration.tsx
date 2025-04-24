import { useState } from 'react';
import { motion } from 'framer-motion';
import Step1Declic from './Step1Declic';
import Step2Confirmation from './Step2Confirmation';
import Step3Form from './Step3Form';
import Step4Survey from './Step4Survey';
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

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

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
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Générer un ID de testeur aléatoire entre 300 et 400
      const testerId = Math.floor(Math.random() * 100) + 300;
      
      setFormData(prev => ({...prev, testerId}));
      nextStep();
    } catch (error) {
      console.error("Error registering tester:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="beta-registration-container relative">
      {/* Sticky header with progress & counter */}
      <BetaHeader 
        currentStep={currentStep} 
        totalSteps={4} 
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
        
        {currentStep === 4 && (
          <Step4Survey 
            formData={formData}
            onChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onComplete={() => console.log("Registration process completed")}
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
