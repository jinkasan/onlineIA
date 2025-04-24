import { motion } from 'framer-motion'

export default function RewardTiers() {
  return (
    <div id="programme-beta" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-faso-pattern opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-jinkasan-red">
            Ne manquez pas cette opportunité !
          </h2>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-600">
            Rejoignez nos <span className="text-jinkasan-orange font-semibold">500 premiers testeurs</span> et 
            bénéficiez d'un bon d'achat pouvant aller jusqu'à <span className="text-jinkasan-orange font-semibold">10 000 FCFA</span>. 
            Plus vous vous inscrivez tôt, plus votre bon d'achat sera important.
          </p>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="#signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-xl bg-gradient-to-r from-jinkasan-red to-jinkasan-orange hover:from-jinkasan-red-light hover:to-jinkasan-orange-dark px-12 py-4 text-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Je réserve mon bon d'achat
            </motion.a>

            <div className="flex items-center gap-4">
              <div className="h-2 w-48 sm:w-64 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '68%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-jinkasan-red to-jinkasan-orange rounded-full"
                />
              </div>
              <span className="text-gray-500 font-medium">68% des places déjà prises</span>
            </div>
          </div>

          {/* Détails des bons */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titre: "Les 100 premiers",
                montant: "10 000 FCFA",
                validite: "12 mois",
                utilisation: "Utilisable en plusieurs fois",
                badge: "EXCLUSIF"
              },
              {
                titre: "Les 200 suivants",
                montant: "5 000 FCFA",
                validite: "6 mois",
                utilisation: "Utilisable en plusieurs fois",
                badge: "LIMITÉ"
              },
              {
                titre: "Les 200 derniers",
                montant: "1 000 FCFA",
                validite: "3 mois",
                utilisation: "Utilisable en une fois",
                badge: "BONUS"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute -top-3 right-4 px-3 py-1 text-xs font-bold rounded-full bg-jinkasan-yellow text-jinkasan-red">
                  {tier.badge}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{tier.titre}</h3>
                <p className="text-3xl font-bold text-jinkasan-red mb-2">{tier.montant}</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-jinkasan-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Valable dès le lancement
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-jinkasan-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {tier.utilisation}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-jinkasan-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Valable {tier.validite}
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            Les bons d'achat seront automatiquement crédités sur votre compte dès le lancement de la plateforme.
            Vous recevrez un email pour vous informer de la disponibilité de votre bon et des instructions pour l'utiliser.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
