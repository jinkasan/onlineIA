import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  TagIcon,
  ShieldCheckIcon,
  HeartIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: UsersIcon,
    title: "Co-construction",
    description: "Construisons ensemble un service adapté à la réalité burkinabè.",
    color: "from-[var(--rouge)] to-[var(--rouge-hover)]"
  },
  {
    icon: TagIcon,
    title: "Réductions exclusives",
    description: "Jusqu'à 5 000 FCFA de bon d'achat pour les testeurs.",
    color: "from-[var(--jaune)] to-[var(--jaune)]"
  },
  {
    icon: ShieldCheckIcon,
    title: "Sécurité & Fiabilité",
    description: "Transactions 100% sécurisées, retours pris en compte en temps réel.",
    color: "from-[var(--violet)] to-[var(--violet)]"
  },
  {
    icon: HeartIcon,
    title: "Solidarité & Impact",
    description: "Soutenez un projet conçu pour améliorer le pouvoir d'achat au Burkina.",
    color: "from-[var(--vert)] to-[var(--vert)]"
  }
];

const features = [
  {
    icon: BoltIcon,
    title: "Rapide",
    description: "Inscription en 2 min"
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Simple",
    description: "Interface intuitive"
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "Fiable",
    description: "Service client réactif"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--grisF)] mb-6" style={{ fontFamily: 'Verdana, sans-serif' }}>
            Pourquoi devenir <span className="text-[var(--rouge)]">bêta-testeur</span> Jinkasan ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Verdana, sans-serif' }}>
            Vos retours seront le moteur de notre amélioration. Ensemble, créons une plateforme qui répond aux besoins des Burkinabè.
          </p>
        </motion.div>

        {/* Cartes d'avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -3 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--grisF)] mb-3" style={{ fontFamily: 'Verdana, sans-serif' }}>{benefit.title}</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Verdana, sans-serif' }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bandeau récapitulatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--grisC)] rounded-2xl p-8 border border-[var(--rouge)] mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-[var(--rouge)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[var(--grisF)] mb-1" style={{ fontFamily: 'Verdana, sans-serif' }}>{feature.title}</h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Verdana, sans-serif' }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
            className="inline-flex items-center px-8 py-4 rounded-xl bg-[var(--rouge)] hover:bg-[var(--rouge-hover)] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-150 focus:outline-dotted focus:outline-2 focus:outline-[var(--jaune)]"
          >
            Je deviens bêta-testeur maintenant
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="mt-4 text-gray-600" style={{ fontFamily: 'Verdana, sans-serif' }}>
            Chaque bêta-testeur reçoit un bon d'achat et la possibilité de peser dans la balance du développement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
