import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from "react";
import BetaBadge from "./BetaBadge";

export default function Hero() {
  // État fixe pour la démo
  const totalPlaces = 500;
  const placesDisponibles = 50;
  const inscrits = totalPlaces - placesDisponibles;
  
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
    <section className="hero relative min-h-screen overflow-hidden bg-gradient-to-b from-[#181818] to-[#333] flex flex-col" style={{ fontFamily: 'Verdana, sans-serif' }}>
      {/* Badge Beta visible uniquement dans la section Hero */}
      <BetaBadge />
      

      
      {/* Ruban en haut avec l'horloge - version plus moderne */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#DD442E] text-white py-2 shadow-md backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="text-xs sm:text-sm md:text-base hidden sm:flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Nous réunissons les acheteurs pour obtenir les meilleurs prix</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm shrink-0 bg-black/20 px-3 sm:px-4 py-2 rounded-xl border border-white/30 mx-auto sm:mx-0 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="whitespace-nowrap font-medium">Expire dans</span>
            <div className="flex items-center font-bold tracking-wider">
              <div className="bg-white/10 rounded-md px-2 py-1 mx-0.5">{timeLeft.days}</div>
              <span className="opacity-80 mx-1">j</span>
              <div className="bg-white/10 rounded-md px-2 py-1 mx-0.5">{timeLeft.hours}</div>
              <span className="opacity-80 mx-1">h</span>
              <div className="bg-white/10 rounded-md px-2 py-1 mx-0.5">{timeLeft.minutes}</div>
              <span className="opacity-80 mx-1">m</span>
              <div className="bg-white/10 rounded-md px-2 py-1 mx-0.5">{timeLeft.seconds}</div>
              <span className="opacity-80 ml-1">s</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Jinkasan en dessous du header et aligné à droite en mode laptop */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex justify-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="/logo.png" 
            alt="Logo Jinkasan" 
            className="w-[220px] sm:w-[250px] lg:w-[280px] h-auto filter drop-shadow-xl"
          />
        </motion.div>
      </div>
      
      {/* Background avec overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/hero-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay pour contraste - optimisé pour accessibilité */}
        <div className="absolute inset-0 bg-black/45" />
      </div>
      {/* Contenu principal - restructuré en layout split 50/50 plus centré */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-16 md:pb-20 flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:items-center justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-16">
          {/* Colonne gauche: Logo, titre et CTA */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-center lg:items-start mx-auto md:mx-0 max-w-xl">

            {/* Titre principal réduit et divisé en deux lignes */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-center lg:text-left"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">NOUS CHERCHONS</span><br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FACE31] to-[#FDB31A]">500 TESTEURS</span><br/>
              <span className="text-white/90 font-bold">Rejoignez-nous !</span>
            </motion.h1>
            
            {/* Sous-titre concis */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-xl text-center lg:text-left mx-auto lg:mx-0 leading-relaxed"
            >
              Testez en avant-première notre plateforme d'achat groupé et recevez <span className="font-bold text-[#FACE31] px-1 py-0.5 rounded">jusqu'à 5000 FCFA</span> de bons d'achat.
            </motion.h2>
            
            {/* CTA principal remonté en haut */}
            <motion.button 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-[#DD442E] to-[#E65142] text-white border-none rounded-xl py-4 px-10 text-lg font-bold focus:outline-[#FACE31] focus:outline-2 shadow-xl relative overflow-hidden cursor-pointer max-w-xs w-full md:w-auto mx-auto lg:mx-0 flex items-center justify-center gap-2"
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              onClick={scrollToSignup}
            >
              <span>Je deviens testeur</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
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
          <div className="w-full md:w-1/2 flex flex-col items-center mx-auto md:mx-0 max-w-xl">
            {/* Container de cartes avec scroll-snap sur mobile */}
            <div 
              ref={carouselRef}
              className="gift-cards relative overflow-x-auto sm:overflow-visible pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 w-full"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Background glow effect */}
              <motion.div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#DD442E]/30 to-transparent rounded-3xl blur-xl" 
                animate={{ opacity: [0.4, 0.6, 0.4] }} 
                transition={{ duration: 4, repeat: Infinity }}
              />
          
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:w-full sm:mb-4 mx-auto max-w-xs sm:max-w-lg xl:max-w-xl w-full">
                {/* Matching button width on mobile */}
                {/* Carte 5000 FCFA - COMPLET */}
                <motion.article 
                  className="card-complete bg-gradient-to-br from-[#DD442E] to-[#B53A27] w-full mx-auto p-4 rounded-2xl relative overflow-hidden shadow-2xl flex-shrink-0 border border-[#FF6B59]/30"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="ribbon absolute -right-12 top-8 w-44 rotate-45 bg-white text-center py-1.5 text-sm font-bold text-[#1A1A1A] shadow-md">
                    COMPLET
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-white/5"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="amount block text-5xl font-bold text-white text-center drop-shadow-md leading-tight">5000</span>
                      <span className="amount block text-2xl font-bold text-white text-center drop-shadow-md">FCFA</span>
                    </div>
                    <small className="block text-white/90 mb-4 text-center">de bon d'achat</small>
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"></div>
                    <footer className="text-white text-sm font-medium mt-3 bg-black/20 py-2 px-4 rounded-full text-center w-full">
                      Pour les <strong>100 premiers</strong>
                    </footer>
                  </div>
                </motion.article>
          
                {/* Carte 3000 FCFA - COMPLET */}
                <motion.article 
                  className="card-complete bg-gradient-to-br from-[#DD442E] to-[#B53A27] w-full mx-auto p-4 rounded-2xl relative overflow-hidden shadow-2xl flex-shrink-0 mt-4 sm:mt-0 border border-[#FF6B59]/30"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="ribbon absolute -right-12 top-8 w-44 rotate-45 bg-white text-center py-1.5 text-sm font-bold text-[#1A1A1A] shadow-md">
                    COMPLET
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-white/5"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="amount block text-5xl font-bold text-white text-center drop-shadow-md leading-tight">3000</span>
                      <span className="amount block text-2xl font-bold text-white text-center drop-shadow-md">FCFA</span>
                    </div>
                    <small className="block text-white/90 mb-4 text-center">de bon d'achat</small>
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"></div>
                    <footer className="text-white text-sm font-medium mt-3 bg-black/20 py-2 px-4 rounded-full text-center w-full">
                      Pour les <strong>200 suivants</strong>
                    </footer>
                  </div>
                </motion.article>
                
                {/* Carte 2000 FCFA - RESTANTS */}
                <motion.article 
                  className="card-remaining bg-gradient-to-br from-[#DD442E] to-[#B53A27] w-full mx-auto p-4 rounded-2xl relative overflow-hidden shadow-2xl flex-shrink-0 mt-4 sm:mt-0 sm:col-span-2 border border-[#FF6B59]/30"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                <div className="ribbon absolute -right-12 top-8 w-44 rotate-45 bg-[#FACE31] text-center py-2 text-sm font-bold text-[#1A1A1A] shadow-lg">
                  <span className="flex items-center justify-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    50 RESTANTS
                  </span>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#FACE31]/10"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="amount block text-5xl font-bold text-white text-center drop-shadow-md leading-tight">2000</span>
                    <span className="amount block text-2xl font-bold text-white text-center drop-shadow-md">FCFA</span>
                  </div>
                  <small className="block text-white/90 mb-4 text-center">de bon d'achat</small>
                  <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"></div>
                  <footer className="text-white text-sm font-medium mt-3 bg-black/20 py-2 px-4 rounded-full text-center w-full">
                    Pour les <strong>200 derniers</strong>
                  </footer>
                </div>
              </motion.article>
              </div>
            </div>
          
            {/* Barre de progression minimaliste */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center mt-8 mb-2"
            >
              <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold">{inscrits}/500</span>
                  <span className="text-white/70 text-sm">inscrits</span>
                </div>
                
                <div className="w-[2px] h-4 bg-white/20 mx-0.5"></div>
                
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[#FACE31] font-medium text-sm">{placesDisponibles} places restantes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          
        {/* Le bouton CTA sticky mobile a été supprimé */}
      </div>
    </section>
  );
}