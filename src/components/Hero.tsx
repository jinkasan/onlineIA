import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  // État fixe pour la démo
  const totalPlaces = 500;
  const placesDisponibles = 50;
  const progression = ((totalPlaces - placesDisponibles) / totalPlaces) * 100;
  const inscrits = totalPlaces - placesDisponibles;
  const pourcentage = Math.round(progression);
  
  // Référence pour le carrousel de cartes sur mobile
  const carouselRef = useRef<HTMLDivElement>(null);

  // Date limite : 31 décembre 2025 à minuit
  const targetDate = new Date('2025-12-31T23:59:59').getTime();
  
  // État pour le compteur
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Mise à jour du compteur
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Animation de la flèche de défilement
  const bounceAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  // Fonction pour défiler vers le formulaire d'inscription
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation hover du CTA
  const buttonHoverVariants = {
    initial: { 
      backgroundColor: "#DD442E",
      scale: 1,
      boxShadow: "0 2px 8px rgba(221, 68, 46, 0.3)"
    },
    hover: { 
      backgroundColor: "#C73C29", 
      scale: 1.03,
      boxShadow: "0 4px 12px rgba(221, 68, 46, 0.4)"
    }
  };

  return (
    <section className="hero relative min-h-screen overflow-hidden bg-[#F5F5F5]" style={{ fontFamily: 'Verdana, sans-serif' }}>
      {/* Ruban en haut avec l'horloge - simplifié */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#DD442E] text-white py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="text-xs sm:text-sm md:text-base hidden sm:block">
            Nous réunissons les acheteurs pour obtenir les meilleurs prix
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm shrink-0 bg-black/10 px-2 sm:px-4 py-1 rounded-lg border border-white/20 mx-auto sm:mx-0">
            <span className="whitespace-nowrap font-medium">Expire dans</span>
            <div className="flex items-center font-bold tracking-wider">
              <span>{timeLeft.days}</span>
              <span className="opacity-60 mx-1">j</span>
              <span>{timeLeft.hours}</span>
              <span className="opacity-60 mx-1">h</span>
              <span>{timeLeft.minutes}</span>
              <span className="opacity-60 mx-1">m</span>
              <span>{timeLeft.seconds}</span>
              <span className="opacity-60 ml-1">s</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background avec overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/hero-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay pour contraste - optimisé pour accessibilité */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Contenu principal - restructuré en layout split 60/40 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16">
          {/* Colonne gauche: Logo, titre et CTA */}
          <div className="w-full md:w-3/5 mb-10 md:mb-0 flex flex-col items-center md:items-start">
            {/* Logo et badge */}
            <div className="flex justify-center md:justify-start items-start mb-8 w-full">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src="/logo.png" 
                alt="Logo Jinkasan" 
                className="w-[200px] sm:w-[280px] h-auto"
              />
              
              {/* Badge supprimé conformément aux exigences */}
            </div>
            
            {/* Titre principal réduit et divisé en deux lignes */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-center md:text-left"
            >
              NOUS CHERCHONS 500 TESTEURS<br />Rejoignez-nous !
            </motion.h1>
            
            {/* Sous-titre concis */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-xl text-center md:text-left mx-auto md:mx-0"
            >
              Testez en avant-première notre plateforme d'achat groupé et recevez jusqu'à 5000 FCFA de bons d'achat.
            </motion.h2>
            
            {/* CTA principal remonté en haut */}
            <motion.button 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#DD442E] text-white border-none rounded-lg py-4 px-8 text-lg font-bold focus:outline-[#FACE31] focus:outline-2 shadow-lg relative overflow-hidden cursor-pointer max-w-xs w-full md:w-auto mx-auto md:mx-0"
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              onClick={scrollToSignup}
            >
              Je deviens testeur →
            </motion.button>
            
            {/* Flèche scroll */}
            <motion.div 
              className="hidden md:flex items-center justify-center mt-20"
              animate={bounceAnimation}
            >
              <ChevronDoubleDownIcon className="h-8 w-8 text-white/70" />  
            </motion.div>
          </div>
          
          {/* Colonne droite: Cartes et progression */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
            {/* Container de cartes avec scroll-snap sur mobile */}
            <div 
              ref={carouselRef}
              className="gift-cards relative overflow-x-auto sm:overflow-visible pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Background glow effect */}
              <motion.div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#DD442E]/30 to-transparent rounded-3xl blur-xl" 
                animate={{ opacity: [0.4, 0.6, 0.4] }} 
                transition={{ duration: 4, repeat: Infinity }}
              />
          
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:w-full sm:mb-4 mx-auto md:mx-0 max-w-lg">
                {/* Carte 5000 FCFA - COMPLET */}
                <motion.article 
                  className="card-complete bg-[#DD442E] w-[260px] mx-auto sm:w-full p-5 rounded-xl relative overflow-hidden shadow-xl flex-shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="ribbon absolute -right-8 top-5 w-32 rotate-45 bg-[#4B9C5B] text-center py-1 text-sm font-bold text-white shadow-md">
                    COMPLET
                  </div>
                  <span className="amount block text-4xl font-bold text-white mb-1 text-center">5000 FCFA</span>
                  <small className="block text-white mb-4 text-center">de bon d'achat</small>
                  <footer className="text-white text-sm font-medium mt-2 bg-black/30 py-1 px-3 rounded text-center">
                    Pour les <strong>100 premiers</strong>
                  </footer>
                </motion.article>
          
                {/* Carte 3000 FCFA - COMPLET */}
                <motion.article 
                  className="card-complete bg-[#DD442E] w-[260px] mx-auto sm:w-full p-5 rounded-xl relative overflow-hidden shadow-xl flex-shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="ribbon absolute -right-8 top-5 w-32 rotate-45 bg-[#4B9C5B] text-center py-1 text-sm font-bold text-white shadow-md">
                    COMPLET
                  </div>
                  <span className="amount block text-4xl font-bold text-white mb-1 text-center">3000 FCFA</span>
                  <small className="block text-white mb-4 text-center">de bon d'achat</small>
                  <footer className="text-white text-sm font-medium mt-2 bg-black/30 py-1 px-3 rounded text-center">
                    Pour les <strong>200 suivants</strong>
                  </footer>
                </motion.article>
              </div>
          
              {/* Carte 2000 FCFA - RESTANTS */}
              <motion.article 
                className="card-remaining bg-[#DD442E] w-[260px] mx-auto sm:w-full p-5 rounded-xl relative overflow-hidden shadow-xl flex-shrink-0 mt-4 sm:mt-0"
                style={{ scrollSnapAlign: 'start' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="ribbon absolute -right-10 top-7 w-40 rotate-45 bg-[#FACE31] text-center py-1.5 text-sm font-bold text-[#1A1A1A] shadow-md">
                  50 RESTANTS
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#FACE31]/10"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="amount block text-4xl font-bold text-white mb-1 text-center">2000 FCFA</span>
                <small className="block text-white mb-4 text-center">de bon d'achat</small>
                <footer className="text-white text-sm font-medium mt-2 bg-black/30 py-1 px-3 rounded text-center">
                  Pour les <strong>200 derniers</strong>
                </footer>
              </motion.article>
            </div>
          
            {/* Barre de progression améliorée */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="progress-wrapper mt-8 bg-black/30 p-4 rounded-lg shadow-lg border border-white/10 w-full max-w-lg mx-auto md:mx-0"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2 text-center sm:text-left">
                <span className="progress-label text-white font-medium">
                  <span className="text-white font-bold">{inscrits}/500</span> inscrits
                </span>
                <span className="text-[#FACE31] text-sm font-bold">🟢 {placesDisponibles} places restantes</span>
              </div>
              
              <div 
                className="progress-bar w-full h-3 bg-[#E5E5E5] rounded-full overflow-hidden" 
                role="progressbar"
                aria-valuenow={progression}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Progression des inscriptions: ${pourcentage}%`}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progression}%` }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="progress-fill h-full" 
                  style={{ 
                    background: 'linear-gradient(90deg, #4B9C5B 0%, #DD442E 100%)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
          
        {/* CTA sticky mobile seulement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="fixed bottom-0 left-0 right-0 md:hidden bg-black/80 backdrop-blur-sm p-3 z-30"
        >
          <button 
            className="w-full bg-[#DD442E] text-white font-bold py-3 px-4 rounded-lg shadow-lg text-lg cursor-pointer" 
            onClick={scrollToSignup}
          >
            Je deviens testeur →
          </button>
        </motion.div>
      </div>
    </section>
  );
}