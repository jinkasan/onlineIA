import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type Step3CodeVerificationProps = {
  email: string;
  onVerify: () => void;
  onResend: () => void;
  onBack: () => void;
  isSubmitting: boolean;
};

export default function Step3CodeVerification({ 
  email, 
  onVerify, 
  onResend, 
  onBack,
  isSubmitting 
}: Step3CodeVerificationProps) {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  
  // Timer pour le renvoi du code
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [timer]);
  
  // Gestion des entrées du code
  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Si l'utilisateur colle un code complet
      const pastedCode = value.slice(0, 4).split('');
      const newVerificationCode = [...verificationCode];
      
      for (let i = 0; i < pastedCode.length; i++) {
        if (i + index < 4) {
          newVerificationCode[i + index] = pastedCode[i];
        }
      }
      
      setVerificationCode(newVerificationCode);
      
      // Focus le dernier input si le code est complet
      if (newVerificationCode.every(digit => digit !== '')) {
        const inputs = document.getElementsByClassName('code-input');
        if (inputs.length === 4) {
          (inputs[3] as HTMLInputElement).focus();
        }
      }
    } else if (/^\d?$/.test(value)) {
      // Pour un seul chiffre
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      
      // Passer au champ suivant si un chiffre est entré
      if (value !== '' && index < 3) {
        const inputs = document.getElementsByClassName('code-input');
        if (inputs.length > index + 1) {
          (inputs[index + 1] as HTMLInputElement).focus();
        }
      }
    }
  };
  
  // Gestion des touches spéciales (backspace)
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      // Si l'utilisateur appuie sur Backspace dans un champ vide, revenir au champ précédent
      const inputs = document.getElementsByClassName('code-input');
      if (inputs.length > index - 1) {
        (inputs[index - 1] as HTMLInputElement).focus();
      }
    }
  };
  
  // Vérification du code
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Valider que le code est complet
    if (verificationCode.some(digit => digit === '')) {
      setError('Veuillez entrer le code complet à 4 chiffres');
      return;
    }
    
    // Simuler la vérification du code (à remplacer par l'API)
    // Dans un environnement réel, vous feriez une validation côté serveur
    const mockCorrectCode = '1234';  // Ceci est pour la démonstration
    const enteredCode = verificationCode.join('');
    
    if (enteredCode === mockCorrectCode) {
      onVerify();
    } else {
      setError('Code incorrect. Veuillez réessayer.');
    }
  };
  
  // Renvoi du code
  const handleResend = () => {
    setTimer(60);
    onResend();
    setError('');
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
        Vérifiez votre email
      </h2>
      
      <div className="text-center mb-8">
        <div className="bg-purple-50 inline-flex items-center px-4 py-2 rounded-full mb-4">
          <EnvelopeIcon className="h-5 w-5 text-[var(--violet)] mr-2" />
          <span className="text-[var(--violet)] font-medium">{email}</span>
        </div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Nous avons envoyé un code de vérification à 4 chiffres à votre adresse email.
          <br />Veuillez entrer ce code pour continuer.
        </p>
      </div>
      
      {/* Formulaire de code */}
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleVerify}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100"
      >
        <div className="space-y-6">
          {/* Champs du code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
              Entrez le code à 4 chiffres
            </label>
            <div className="flex justify-center gap-3">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="code-input w-14 h-14 text-center text-2xl font-bold rounded-lg border border-gray-300 focus:ring-[var(--violet)] focus:border-[var(--violet)]"
                  maxLength={1}
                  inputMode="numeric"
                />
              ))}
            </div>
            
            {/* Message d'erreur */}
            {error && (
              <p className="mt-2 text-red-500 text-center">{error}</p>
            )}
          </div>
          
          {/* Renvoi du code */}
          <div className="text-center">
            {timer > 0 ? (
              <p className="text-sm text-gray-500">
                Vous pouvez demander un nouveau code dans {timer} secondes
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-[var(--violet)] font-medium underline text-sm"
              >
                Renvoyer le code
              </button>
            )}
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
                Vérification en cours...
              </span>
            ) : (
              "Vérifier le code"
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
            Modifier mon email
          </motion.button>
        </div>
      </motion.form>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        Vérifiez votre dossier spam si vous ne trouvez pas le code.
      </p>
    </div>
  );
}
