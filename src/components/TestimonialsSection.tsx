import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVision Solutions",
      company: "Technology Consulting",
      quote: "Matěj's unique blend of business acumen and AI expertise helped us implement our first AI-driven solution. His ability to bridge the gap between technical complexity and business value is exceptional. The results exceeded our expectations.",
      rating: 5,
      image: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "InnovateNow Ventures",
      quote: "Working with Matěj opened doors we didn't even know existed. His network is impressive, but more importantly, his vision for collaborative AI development has transformed how we approach partnerships. A true connector and innovator.",
      rating: 5,
      image: "MR"
    },
    {
      name: "Elena Kovář",
      role: "Head of Digital Transformation",
      company: "Regional Manufacturing Group",
      quote: "Matěj's workshops and guidance helped our entire team understand AI's practical applications. His approach makes complex technology accessible without losing the depth needed for real implementation. Highly recommended for any organization exploring AI.",
      rating: 5,
      image: "EK"
    },
    {
      name: "David Thompson",
      role: "Senior Developer",
      company: "AI Solutions Collective",
      quote: "The collaborative environment Matěj creates is incredible. Through his community, I've worked on projects I never would have accessed independently. His mentorship and the connections he facilitates have accelerated my AI development career significantly.",
      rating: 5,
      image: "DT"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
      
      <motion.div 
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Reference
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Slyšte od partnerů, spolupracovníků a členů komunity, kteří zažili sílu spolupráce řízené AI
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-16"
        >
          <div className="relative p-10 rounded-xl border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
            <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
              HLAVNÍ REFERENCE
            </div>
            
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="text-yellow-400 text-2xl mr-1"
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].image}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-cyan-400 font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-purple-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`relative p-6 rounded-lg border ${
                index % 2 === 0 ? 'border-cyan-400/20' : 'border-purple-600/20'
              } bg-gray-900/30 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: index % 2 === 0 ? "rgba(0, 255, 255, 0.4)" : "rgba(138, 43, 226, 0.4)"
              }}
            >
              {/* Mini Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm mr-1">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed mb-4 text-sm italic">
                "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-600' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-600'
                }`}>
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <div className={`font-bold text-sm ${
                    index % 2 === 0 ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="relative p-8 rounded-lg border border-gradient bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">Připraveni přidat svůj příběh úspěchu?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Připojte se k rostoucí komunitě profesionálů, kteří transformovali svůj přístup k AI a obchodní spolupráci.
            </p>
            <motion.button
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Začít svou cestu</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="testimonial-cta-bg"
              />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection
