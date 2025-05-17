import React, { useRef, useState } from 'react'
import Header from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AboutSection from './components/AboutSection'
import Simulation from './components/Simulation'
import Footer from './components/Footer'
import EarlyAccessModal from './components/EarlyAccessModal'
import SocialProof     from './components/SocialProof'
import JoinSection from './components/JoinSection'
import Promo from './components/PromoCodeStep'
import SupplierMatchingGrid from './components/SupplierGrid'
import Details from './components/Details'


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const calcRef = useRef(null)

  const scrollToCalculator = () => {
    calcRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        onOpenModal={() => setShowModal(true)}
        scrollToCalculator={scrollToCalculator}
      />

      <main className="mt-0">
        <Hero
          onOpenModal={() => setShowModal(true)}
          scrollToCalculator={scrollToCalculator}
        />

        <HowItWorks />
        <AboutSection />
        <SocialProof/>
        <JoinSection/>

      </main>

      <Footer />

      <EarlyAccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
      />
    </>
  )
}
