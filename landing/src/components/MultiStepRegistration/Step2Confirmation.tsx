import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
  BuildingStorefrontIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

type Step2ConfirmationProps = {
  onContinue: () => void;
  onBack: () => void;
};

const benefits = [
  {
    icon: BeakerIcon,
    title: "Testez en avant-première",
    description: "Explorez la plateforme avant tout le monde"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Donnez votre avis",
    description: "Contribuez à améliorer l'expérience utilisateur"
  },
  {
    icon: GiftIcon,
    title: "Recevez des bons d'achat",
    description: "Jusqu'à 5 000 FCFA au lancement officiel"
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Influencez le choix des produits",
    description: "Aidez-nous à définir le catalogue"
  }
];

export default function Step2Confirmation({ onContinue, onBack }: Step2ConfirmationProps) {
  return (
    <div className="py-8">
      {/* Badge PHASE BÊTA */}
      <div className="flex justify-center mb-6">
        <div className="bg-[var(--rouge)] text-white font-bold px-4 py-1.5 rounded-full transform rotate-[-2deg] shadow-sm">
          PHASE BÊTA
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-[var(--grisF)] mb-4">
        Votre rôle en tant que <span className="text-[var(--violet)]">testeur</span>
      </h2>
      
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Vous ne rejoignez pas un site e-commerce déjà actif, mais participez à sa création !
      </p>
      
      {/* Liste des avantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex"
          >
            <div className="bg-purple-100 rounded-full p-3 mr-4 self-start">
              <benefit.icon className="h-6 w-6 text-[var(--violet)]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--violet)] mb-1">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Ce que vous ne ferez PAS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-red-50 border border-red-100 rounded-xl p-6 max-w-2xl mx-auto mb-10"
      >
        <h3 className="font-bold text-lg text-gray-900 mb-3">
          Ce que vous ne ferez PAS pendant la phase Beta :
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700">Acheter des produits</span>
          </li>
          <li className="flex items-center">
            <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700">Effectuer des paiements</span>
          </li>
          <li className="flex items-center">
            <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700">Partager vos coordonnées bancaires</span>
          </li>
        </ul>
      </motion.div>
      
      {/* Boutons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[var(--rouge)] hover:bg-[#E14A29] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-white"
          onClick={onContinue}
        >
          Je confirme mon rôle de testeur
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[var(--violet)] text-[var(--violet)] font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-150"
          onClick={onBack}
        >
          Je préfère attendre
        </motion.button>
      </div>
    </div>
  );
}
