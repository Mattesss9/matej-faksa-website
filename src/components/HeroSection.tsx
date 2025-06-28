import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroSectionProps {
  profileData: any
}

const HeroSection = ({ profileData }: HeroSectionProps) => {
  const [typedText, setTypedText] = useState('')
  const fullText = "Posilování růstu prostřednictvím AI a obchodní synergie"
  
  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)
    
    return () => clearInterval(typeInterval)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Holographic Frame Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
        <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-purple-600 opacity-60"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-cyan-400 opacity-60"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-purple-600 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Headline with Typing Effect */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <motion.span 
                className="text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Pomáhám lidem a společnostem odemknout skutečný potenciál AI.
            </motion.p>
          </div>

          {/* Mission Quote */}
          <motion.div 
            className="relative p-6 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
              MISE
            </div>
            <blockquote className="text-lg text-gray-200 italic leading-relaxed">
              "{profileData.personal_info.mission_quote}"
            </blockquote>
            <div className="text-right mt-2 text-cyan-400 font-semibold">
              — {profileData.personal_info.name}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Připojte se k mé AI síti</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="button-bg"
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Sci-Fi Frame */}
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg opacity-75 blur-lg animate-pulse"></div>
            
            {/* Inner Frame */}
            <div className="relative bg-gray-900 p-6 rounded-lg border-2 border-cyan-400/50">
              {/* Corner Indicators */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
              
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center border border-cyan-400/30">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {profileData.personal_info.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-cyan-400">{profileData.personal_info.name}</h3>
                    <p className="text-gray-400">Tvůrce AI komunity</p>
                    <p className="text-gray-400">Obchodní stratég</p>
                  </div>
                </div>
              </div>
              
              {/* Status Indicators */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          animate={{ 
            borderColor: ['#00FFFF', '#8A2BE2', '#00FFFF']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
