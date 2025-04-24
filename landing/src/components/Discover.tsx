import { motion } from 'framer-motion';
import { UsersIcon, DevicePhoneMobileIcon, GiftIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: UsersIcon,
    title: "Achat groupé",
    description: "Testez notre système innovant d'achats groupés et aidez-nous à l'optimiser.",
    betaRole: "Votre rôle : Participer aux premiers groupes d'achat et partager votre expérience.",
    image: "/images/hero-bg.jpg"
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Paiement mobile",
    description: "Découvrez et testez notre système de paiement mobile intégré aux solutions locales.",
    betaRole: "Votre rôle : Valider la simplicité et la sécurité des transactions.",
    image: "/images/hero-bg.jpg"
  },
  {
    icon: GiftIcon,
    title: "Produits variés",
    description: "Explorez notre catalogue de produits et services en avant-première.",
    betaRole: "Votre rôle : Nous aider à sélectionner les meilleurs produits et fournisseurs.",
    image: "/images/hero-bg.jpg"
  }
];

const categories = [
  {
    title: "Électroménager",
    description: "Testez nos offres sur les réfrigérateurs, climatiseurs et plus",
    items: ["Réfrigérateurs", "Climatiseurs", "Machines à laver"],
    image: "/images/hero-bg.jpg"
  },
  {
    title: "Transport",
    description: "Évaluez notre service d'achats groupés pour les motos",
    items: ["Motos", "Pièces détachées", "Accessoires"],
    image: "/images/hero-bg.jpg"
  },
  {
    title: "Services",
    description: "Donnez votre avis sur nos offres de services",
    items: ["Assurances", "Maintenance", "Formation"],
    image: "/images/hero-bg.jpg"
  }
];

export default function Discover() {
  return (
    <section className="py-20 bg-black" id="discover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Découvrez Jinkasan et devenez un{' '}
            <span className="text-[#FF4500]">bêta-testeur clé</span> !
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Jinkasan est la <span className="text-[#FF4500] font-semibold">future plateforme d'achats groupés</span> au Burkina Faso. 
            Vos retours de testeurs nous aideront à la peaufiner avant son lancement officiel.
          </p>
        </motion.div>

        {/* Blocs visuels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-black/50 border border-white/10"
            >
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-8 w-8 text-[#FF4500] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 mb-4">{feature.description}</p>
                  <p className="text-[#FF4500] font-medium text-sm border-t border-white/10 pt-4">
                    {feature.betaRole}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ce que vous pourrez <span className="text-[#FF4500]">tester</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <svg className="h-5 w-5 text-[#FF4500] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-[#FF4500] hover:bg-[#FF6347] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            J'aide Jinkasan à se construire
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="mt-4 text-white/60">
            Votre participation est essentielle pour créer une plateforme adaptée aux besoins des Burkinabè
          </p>
        </motion.div>
      </div>
    </section>
  );
}
