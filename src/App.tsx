import { useEffect } from 'react'
import Hero from './components/Hero'
import BetaTimeline from './components/BetaTimeline'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { MultiStepRegistration } from './components/MultiStepRegistration'

function App() {
  // Scroll to signup if hash is present
  useEffect(() => {
    if (window.location.hash === '#signup') {
      const element = document.getElementById('signup');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    document.title = 'Jinkasan - Rejoignez les 500 premiers testeurs au Burkina Faso'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Contenu principal */}
      <main>
        {/* Section 1: Hero - Premier impact */}
        <Hero />

        {/* Section 2: BetaTimeline - Rôle du testeur */}
        <BetaTimeline />
      </main>

      {/* Section 7: Multi-Step Registration - Conversion */}
      <div id="signup" className="bg-white">
        <MultiStepRegistration />
      </div>

      {/* Footer */}
      <Footer />
        
      {/* Utilities */}
      <ScrollToTop />
    </div>
  )
}

export default App