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
        <SocialProof
            quote="Excel, email, and a phone runs 99% of the world—Trevi feels like the future."
            author="– Alex Zhao, FBA Seller"
            title="Early-access beta user"
            signupCount={12}
        />

        <div ref={calcRef}>
          {/* Pass down the early-access opener */}
          <Simulation onOpenEarlyAccess={() => setShowModal(true)} />
        </div>
      </main>
      <JoinSection/>
      <Footer />

      <EarlyAccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
      />
    </>
  )
}
