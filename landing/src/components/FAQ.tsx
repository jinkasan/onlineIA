import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Comment puis-je m'inscrire au programme Bêta ?",
    answer: "L'inscription est simple et gratuite ! Remplissez le formulaire avec votre nom et numéro de téléphone. Un email est recommandé mais optionnel. Vous recevrez immédiatement votre confirmation d'inscription."
  },
  {
    question: "Y a-t-il des critères d'éligibilité au Bêta-test ?",
    answer: "Le programme est ouvert à tous les résidents du Burkina Faso. Vous devez simplement avoir un téléphone mobile pour les paiements et être prêt à partager vos retours d'expérience."
  },
  {
    question: "Qu'est-ce que je reçois en devenant testeur ?",
    answer: "Vous recevez un bon d'achat allant jusqu'à 5000 FCFA, un accès prioritaire aux offres, et la possibilité d'influencer le développement de la plateforme."
  },
  {
    question: "Quel est mon rôle en tant que testeur ?",
    answer: "Votre rôle est d'utiliser la plateforme, de participer aux achats groupés et de partager vos retours sur votre expérience. Vos commentaires nous aideront à améliorer Jinkasan."
  },
  {
    question: "Quand commence la phase Bêta et combien de temps dure-t-elle ?",
    answer: "La phase Bêta commence dès votre inscription et dure environ 3 mois. Vous serez informé des dates exactes par SMS."
  },
  {
    question: "Dois-je payer pour participer ?",
    answer: "Non, la participation au programme Bêta est totalement gratuite. Vous ne payez que lorsque vous décidez de faire un achat sur la plateforme."
  },
  {
    question: "Comment et quand pourrai-je utiliser mon bon d'achat ?",
    answer: "Votre bon d'achat sera disponible dès votre première connexion et valable sur votre premier achat groupé. Il n'y a pas de montant minimum d'achat."
  },
  {
    question: "Qu'arrive-t-il après la phase Bêta ?",
    answer: "Vous conserverez votre compte et bénéficierez d'avantages exclusifs en tant que membre fondateur lors du lancement officiel."
  },
  {
    question: "Comment puis-je donner un feedback ou signaler un bug ?",
    answer: "Un bouton de feedback sera disponible dans l'application. Vous pouvez aussi nous contacter directement par WhatsApp ou email."
  },
  {
    question: "Puis-je arrêter de participer au Bêta si je le souhaite ?",
    answer: "Oui, vous pouvez arrêter à tout moment. Il suffit de nous contacter et nous désactiverons votre compte."
  }
]

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onClick}
        className="w-full bg-white/5 backdrop-blur-md rounded-xl p-6 text-left border border-white/10 hover:border-[#FF4500]/30 transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white pr-8">
            {question}
          </h3>
          <ChevronDownIcon
            className={`h-5 w-5 text-[#FF4500] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-white/80">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Questions <span className="text-[#FF4500]">fréquentes</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
