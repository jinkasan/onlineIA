import { motion } from 'framer-motion';
import { 
  UserPlusIcon, 
  EyeIcon, 
  UserGroupIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlusIcon,
      title: "Inscription",
      description: "Créez votre compte en 2 min et rejoignez notre communauté de testeurs",
      color: "from-[#FF4500] to-[#FF6347]"
    },
    {
      icon: EyeIcon,
      title: "Découverte",
      description: "Accédez en avant-première aux fonctionnalités de Jinkasan et explorez la plateforme",
      color: "from-[#FF6347] to-[#FF8C00]"
    },
    {
      icon: UserGroupIcon,
      title: "Participation",
      description: "Sélectionnez un produit, rejoignez un achat groupé et profitez d'économies exclusives Bêta",
      color: "from-[#FF8C00] to-[#FFA500]"
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Feedback",
      description: "Signalez vos bugs, partagez vos idées et aidez-nous à peaufiner Jinkasan avant le lancement final",
      color: "from-[#FFA500] to-[#FF4500]"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-black">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Comment ça marche ? Découvrez le rôle clé du{' '}
            <span className="text-[#FF4500]">Bêta-testeur</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80"
          >
            En quelques étapes simples, participez à la{' '}
            <span className="text-[#FF4500] font-semibold">co-construction</span> de Jinkasan
          </motion.p>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative h-full"
            >
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF4500]/50 to-[#FF6347]/50 transform -translate-y-1/2" />
              )}

              {/* Carte */}
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg flex flex-col">
                {/* Numéro de l'étape */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icône avec gradient */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-2.5 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}>
                  <step.icon className="w-full h-full text-white" />
                </div>

                {/* Contenu */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#FF4500] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de valeur et CTA */}
        <div className="text-center space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            <span className="font-semibold">Vos retours</span> = un{' '}
            <span className="text-[#FF4500]">Jinkasan plus performant</span>{' '}
            + un <span className="text-[#FF4500]">bon d'achat exclusif</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF4500] hover:bg-[#FF6347] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
            >
              Je rejoins la Bêta maintenant
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
