import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './App.css'

// Components
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import AIVisionSection from './components/AIVisionSection'
import WhyJoinSection from './components/WhyJoinSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [profileData, setProfileData] = useState<any>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

  useEffect(() => {
    // Load profile data
    const loadProfileData = async () => {
      try {
        // Use relative path that works with both local development and GitHub Pages
        const response = await fetch('./data/matej_profile_data.json')
        const data = await response.json()
        setProfileData(data)
      } catch (error) {
        console.error('Error loading profile data:', error)
        // Fallback: try absolute path for local development
        try {
          const fallbackResponse = await fetch('/data/matej_profile_data.json')
          const fallbackData = await fallbackResponse.json()
          setProfileData(fallbackData)
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError)
        }
      }
    }

    loadProfileData()
  }, [])

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="loading-animation">
          <div className="loading-spinner"></div>
          <p className="text-cyan-400 mt-4">Načítání...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Fixed Background Image with Parallax */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ opacity }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(./images/sci-fi-background.jpg)',
            filter: 'brightness(0.3) contrast(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection profileData={profileData} />
        <AboutSection profileData={profileData} />
        <ExperienceSection profileData={profileData} />
        <AIVisionSection profileData={profileData} />
        <WhyJoinSection />
        <TestimonialsSection />
        <ContactSection profileData={profileData} />
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}

export default App
