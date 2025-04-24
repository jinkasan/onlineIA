import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const roles = [
  {
    icon: BeakerIcon,
    title: "Tester",
    description: "Explorez les fonctionnalités de la plateforme en avant-première",
    color: "from-purple-700 to-purple-900"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Donner son avis",
    description: "Partagez votre expérience pour améliorer la plateforme",
    color: "from-red-600 to-red-700"
  },
  {
    icon: GiftIcon,
    title: "Recevoir des bonus",
    description: "Obtenez des bons d'achat exclusifs pour votre participation",
    color: "from-orange-500 to-orange-700"
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Influencer l'offre",
    description: "Aidez-nous à définir les produits que vous souhaitez voir sur la plateforme",
    color: "from-blue-600 to-blue-700"
  }
];

export default function BetaTimeline() {
  return (
    <section className="py-20 bg-slate-50" id="beta-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi recherchons-nous des <span className="text-purple-700">testeurs</span> ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Votre participation est essentielle pour créer une plateforme qui répond vraiment aux besoins des utilisateurs burkinabè.
          </p>
        </motion.div>

        {/* Cartes des rôles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -3 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                <role.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
              <p className="text-gray-600">{role.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Le parcours du <span className="text-purple-700">testeur</span>
          </h3>

          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-700 via-red-600 to-green-600"></div>

            {/* Phases */}
            <div className="space-y-16">
              {/* Phase 1: Avant */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-700 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center z-10">1</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-purple-700 mb-2">AVANT LE TEST</h4>
                  <p className="text-gray-700 mb-4">Inscription et préparation pour le lancement de la phase bêta</p>
                  <div className="bg-purple-50 rounded-lg p-4 text-purple-900">
                    <p className="font-medium">Vous êtes ici !</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Choisissez de rejoindre l'aventure</li>
                      <li>Recevez les informations pour la phase de test</li>
                      <li>Préparez-vous à explorer la plateforme</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2: Pendant */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-red-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center z-10">2</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-red-600 mb-2">PENDANT LE TEST</h4>
                  <p className="text-gray-700 mb-4">Exploration et feedback sur les fonctionnalités</p>
                  <div className="bg-red-50 rounded-lg p-4 text-red-900">
                    <ul className="list-disc list-inside text-sm">
                      <li>Testez la plateforme en priorité</li>
                      <li>Partagez vos impressions via les formulaires</li>
                      <li>Participez aux sessions d'amélioration</li>
                      <li>Contribuez à l'évolution de la plateforme</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3: Après */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center z-10">3</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-green-600 mb-2">APRÈS LE TEST</h4>
                  <p className="text-gray-700 mb-4">Lancement officiel et avantages exclusifs</p>
                  <div className="bg-green-50 rounded-lg p-4 text-green-900">
                    <ul className="list-disc list-inside text-sm">
                      <li>Recevez votre bon d'achat en récompense</li>
                      <li>Bénéficiez d'un statut privilégié de pionnier</li>
                      <li>Profitez des avantages exclusifs lors du lancement</li>
                      <li>Soyez fier d'avoir contribué à la création d'une plateforme adaptée</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini-FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            FAQ - Rôle du testeur
          </h3>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Est-ce que je dois payer quelque chose ?</h4>
              <p className="text-gray-700">Non, aucun paiement n'est requis pendant la phase de test. Votre rôle est uniquement de tester les fonctionnalités et de donner votre avis.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Quand recevrai-je mon bon d'achat ?</h4>
              <p className="text-gray-700">Les bons d'achat seront distribués lors du lancement officiel de la plateforme, après la phase de test.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Combien de temps dure la phase de test ?</h4>
              <p className="text-gray-700">La phase de test est prévue pour durer environ 3 mois. Vous recevrez tous les détails après votre inscription.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Quel est l'engagement demandé ?</h4>
              <p className="text-gray-700">Nous vous demanderons simplement de tester les fonctionnalités et de partager vos impressions via des formulaires simples. Votre participation active est précieuse mais reste flexible selon vos disponibilités.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-700 to-red-600 hover:from-red-600 hover:to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Je deviens testeur maintenant
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="mt-4 text-gray-600">
            Faites partie des 500 premiers testeurs et co-construisez l'avenir des achats groupés
          </p>
        </motion.div>
      </div>
    </section>
  );
}
