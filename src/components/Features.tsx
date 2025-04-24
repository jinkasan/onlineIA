import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: "Achetez en groupe",
    description:
      "Regroupez-vous avec d'autres acheteurs pour obtenir des prix avantageux sur vos produits préférés.",
    icon: UserGroupIcon,
    color: "from-jinkasan-red to-jinkasan-orange",
  },
  {
    name: "Paiement sécurisé",
    description:
      "Vos transactions sont 100% sécurisées. Nous utilisons les meilleurs systèmes de paiement mobile.",
    icon: ShieldCheckIcon,
    color: "from-jinkasan-yellow to-jinkasan-green",
  },
  {
    name: "Prix avantageux",
    description:
      "Bénéficiez de réductions allant jusqu'à 20% grâce à la force du groupe.",
    icon: CurrencyDollarIcon,
    color: "from-jinkasan-orange to-jinkasan-yellow",
  },
  {
    name: "Livraison fiable",
    description:
      "Livraison rapide et sûre dans les principales villes du Burkina Faso.",
    icon: TruckIcon,
    color: "from-jinkasan-green to-jinkasan-yellow",
  },
]

export default function Features() {
  return (
    <div id="features" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Motif d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 faso-pattern-bg opacity-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-jinkasan-red">
              Pourquoi nous choisir
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Une nouvelle façon d'acheter{' '}
              <span className="text-jinkasan-red">ensemble</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Découvrez les avantages de faire vos achats en groupe avec Jinkasan
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex flex-col"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <dt className="flex items-center gap-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                      <feature.icon
                        className="h-7 w-7 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xl font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600 pl-20">
                    {feature.description}
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-jinkasan-red to-jinkasan-orange p-1 shadow-2xl"
        >
          <div className="rounded-xl bg-white/95 p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-jinkasan-red/10 p-4">
                  <svg className="h-8 w-8 text-jinkasan-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Rapide</h3>
                <p className="mt-2 text-sm text-gray-500">Commandez en quelques clics</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-jinkasan-yellow/10 p-4">
                  <svg className="h-8 w-8 text-jinkasan-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Simple</h3>
                <p className="mt-2 text-sm text-gray-500">Interface intuitive</p>
              </div>
              <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                <div className="rounded-full bg-jinkasan-green/10 p-4">
                  <svg className="h-8 w-8 text-jinkasan-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Fiable</h3>
                <p className="mt-2 text-sm text-gray-500">Service client réactif</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
