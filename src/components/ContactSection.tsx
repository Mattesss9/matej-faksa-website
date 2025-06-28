import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

interface ContactSectionProps {
  profileData: any
}

const ContactSection = ({ profileData }: ContactSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  })

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate newsletter signup
    setNewsletterSubmitted(true)
    setTimeout(() => setNewsletterSubmitted(false), 3000)
    setNewsletterEmail('')
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/sci-fi-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px) hue-rotate(180deg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
      </div>
      
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
              Spojte se se mnou
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Připraveni začít svou AI cestu? Spojme se a prozkoumejme, jak můžeme spolupracovat na budování budoucnosti.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                KONTAKT
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Vaše celé jméno"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="vas@email.cz"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Společnost/Organizace
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Vaše společnost nebo organizace"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mám zájem o *
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  >
                    <option value="">Vyberte svůj zájem</option>
                    <option value="business-partnership">Obchodní partnerství</option>
                    <option value="ai-collaboration">Spolupráci na AI projektech</option>
                    <option value="community-learning">Komunitu a učení</option>
                    <option value="consulting">AI poradenství</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Řekněte mi o vašem projektu, cílech nebo jak byste chtěli spolupracovat..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formSubmitted}
                >
                  {formSubmitted ? 'Zpráva odeslána! ✓' : 'Odeslat zprávu'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <div className="relative p-8 rounded-lg border border-purple-600/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-purple-400 text-sm font-semibold">
                KONTAKTNÍ INFORMACE
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">Lokace</div>
                    <div className="text-purple-400">{profileData.personal_info.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💼</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">LinkedIn</div>
                    <a 
                      href={profileData.personal_info.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Spojit se na LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">Doba odezvy</div>
                    <div className="text-purple-400">Obvykle do 24 hodin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                AI NEWSLETTER
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-400">Zůstaňte v obraze</h3>
                <p className="text-gray-300 text-sm">
                  Získejte nejnovější poznatky o AI trendech, komunitních událostech a příležitostech ke spolupráci přímo do vaší schránky.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Zadejte váš email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={newsletterSubmitted}
                  >
                    {newsletterSubmitted ? 'Přihlášeno! ✓' : 'Přihlásit se k newsletteru'}
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-cyan-400/20 bg-gray-900/30 text-center">
                <div className="text-2xl font-bold text-cyan-400">{profileData.personal_info.connections}</div>
                <div className="text-gray-400 text-sm">Profesní síť</div>
              </div>
              <div className="p-4 rounded-lg border border-purple-600/20 bg-gray-900/30 text-center">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400 text-sm">Let zkušeností</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400 mb-4">
            © 2025 {profileData.personal_info.name}. Posilování růstu prostřednictvím AI a obchodní synergie.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href={profileData.personal_info.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Zpět nahoru
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection
