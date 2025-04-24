import { useState } from 'react'
import { motion } from 'framer-motion'

type FormState = {
  name: string
  phone: string
  email: string
  otp: string
}

export default function SignUpForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    otp: ''
  })
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation simple
    if (!formState.name || !formState.phone) {
      setError('Veuillez remplir tous les champs obligatoires')
      return
    }

    if (!formState.phone.startsWith('+226') && !formState.phone.startsWith('226')) {
      setError('Le numéro de téléphone doit commencer par +226')
      return
    }

    // Simuler l'envoi d'OTP
    setStep('otp')
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formState.otp.length !== 6) {
      setError('Le code OTP doit contenir 6 chiffres')
      return
    }

    // Simuler la vérification
    setStep('success')
  }

  return (
    <div id="signup" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Beta Banner */}
      <div className="absolute top-0 left-0 right-0 bg-purple-700 text-white text-center py-2 px-4 font-medium text-sm">
        <div className="flex items-center justify-center">
          <div className="bg-white text-purple-700 px-2 py-0.5 rounded font-bold mr-2">
            PHASE BÊTA
          </div>
          <span>
            Nous recrutons actuellement 500 testeurs - Aucun paiement n'est requis à cette étape
          </span>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {step === 'form' && "Rejoignez l'équipe des testeurs Jinkasan"}
            {step === 'otp' && "Vérification de votre numéro"}
            {step === 'success' && "Félicitations, testeur !"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {step === 'form' && "Aidez-nous à co-construire la future plateforme d'achat groupé au Burkina Faso"}
            {step === 'otp' && "Entrez le code reçu par SMS"}
            {step === 'success' && "Vous faites désormais partie de l'équipe des testeurs Jinkasan"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-jinkasan-orange focus:ring-jinkasan-orange"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Numéro de téléphone * <span className="text-gray-500">(format: +226 XX XX XX XX)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-jinkasan-orange focus:ring-jinkasan-orange"
                  placeholder="+226"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-gray-500">(recommandé)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-jinkasan-orange focus:ring-jinkasan-orange"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-jinkasan-red to-jinkasan-orange px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Je deviens testeur
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Code de vérification
                </label>
                <input
                  type="text"
                  id="otp"
                  value={formState.otp}
                  onChange={(e) => setFormState({ ...formState, otp: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-jinkasan-orange focus:ring-jinkasan-orange text-center text-2xl tracking-widest"
                  maxLength={6}
                  placeholder="000000"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  Un code à 6 chiffres a été envoyé au {formState.phone}
                </p>
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-purple-700 to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Vérifier
              </button>
            </form>
          )}

          {step === 'success' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-6"
            >
              <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Inscription réussie !
              </h3>
              <p className="text-gray-600">
                Vous recevrez votre bon d'achat au lancement officiel de la plateforme, après la phase de test.
              </p>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-300">
                <p className="text-purple-800 font-medium">
                  <span className="font-bold">Votre rôle de testeur :</span> tester et donner votre avis sur les fonctionnalités de la future plateforme d'achat groupé.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-sm text-gray-500">
                  Partagez Jinkasan avec vos amis
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent("Rejoignez Jinkasan et recevez jusqu'à 10 000 FCFA de bon d'achat ! https://jinkasan.com")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://jinkasan.com')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
