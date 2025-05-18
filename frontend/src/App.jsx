import React, { useRef, useState, useEffect } from 'react'
import Header from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AboutSection from './components/AboutSection'
import Simulation from './components/Simulation'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal' // make sure this matches your file
import SocialProof from './components/SocialProof'
import JoinSection from './components/JoinSection'
import Problem from './components/Problem'
import Promo from './components/PromoCodeStep'
import SupplierMatchingGrid from './components/SupplierGrid'
import Details from './components/Details'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const hasShownModal = useRef(false)
  const aboutRef = useRef(null)
  const calcRef = useRef(null)

  const scrollToCalculator = () => {
    calcRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownModal.current) {
          setShowModal(true)
          hasShownModal.current = true
        }
      },
      { root: null, threshold: 0.4 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

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
        <Problem />
        <HowItWorks />
        <AboutSection ref={aboutRef} />
        <SocialProof />
        <JoinSection />
      </main>

      <Footer />

      <WaitlistModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        scrollToForm={() => {
          document
            .getElementById('early-access-form')
            ?.scrollIntoView({ behavior: 'smooth' })
        }}
      />
    </>
  )
}
