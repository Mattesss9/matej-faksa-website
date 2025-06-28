import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    // Create particles
    const particleCount = Math.min(50, Math.floor((dimensions.width * dimensions.height) / 20000))
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    setParticles(newParticles)
  }, [dimensions])

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx
        let newY = particle.y + particle.vy

        // Wrap around screen
        if (newX > dimensions.width) newX = 0
        if (newX < 0) newX = dimensions.width
        if (newY > dimensions.height) newY = 0
        if (newY < 0) newY = dimensions.height

        return {
          ...particle,
          x: newX,
          y: newY
        }
      }))
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [dimensions])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      >
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="rgba(0, 255, 255, 0.6)"
            opacity={particle.opacity}
            animate={{
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Connection lines between nearby particles */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            
            if (distance < 100) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(138, 43, 226, 0.3)"
                  strokeWidth="0.5"
                  opacity={1 - distance / 100}
                />
              )
            }
            return null
          })
        )}
      </svg>
    </div>
  )
}

export default ParticleBackground
