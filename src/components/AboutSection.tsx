import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutSectionProps {
  profileData: any
}

const AboutSection = ({ profileData }: AboutSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      
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
              O mně
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio Section */}
            <div className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                PROFIL
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  S více než <span className="text-cyan-400 font-semibold">5+ lety</span> nezávislých obchodních
                  zkušeností a jedinečnou cestou od tradičního prodeje k nejmodernějším AI expertízám, překlenuju
                  propast mezi zavedenými obchodními praktikami a vznikajícími technologiemi.
                </p>

                <p>
                  Aktuálně působím jako <span className="text-purple-400 font-semibold">Projektový manažer v C & C Engineering</span>,
                  kombinuji strategický rozvoj podnikání s AI inovacemi pro vytváření smysluplných spojení
                  mezi společnostmi, investory a vizionářskými partnery.
                </p>

                <p>
                  Mou misí je demokratizovat povědomí o AI a vybudovat kolaborativní komunitu, kde se tradiční
                  podnikání setkává s budoucími technologiemi. Nejen o AI mluvím—implementuji ji, učím ji a
                  pomáhám ostatním využít její transformační sílu.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="text-center p-6 rounded-lg border border-purple-600/30 bg-gray-900/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(138, 43, 226, 0.6)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Let zkušeností</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.6)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{profileData.industries.length}</div>
                <div className="text-gray-400 text-sm">Odvětví</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Core Values & Mission */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Mission */}
            <div className="relative p-8 rounded-lg border border-purple-600/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-purple-400 text-sm font-semibold">
                MISE
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Budování budoucnosti společně</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-cyan-400">Šíření povědomí o AI:</strong> Zpřístupňování AI a její srozumitelnost pro všechny</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-purple-400">Budování komunity:</strong> Vytváření prostorů pro spolupráci a sdílení znalostí</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-cyan-400">Spouštění aplikací:</strong> Přeměna AI konceptů na reálná řešení</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-purple-400">Propojování partnerů:</strong> Propojování společností, investorů a inovátorů</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                LOKALITA
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{profileData.personal_info.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{profileData.personal_info.connections}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{profileData.personal_info.followers}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industry Experience Highlight */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Mezioborové znalosti</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {profileData.industries.map((industry: string, index: number) => (
              <motion.span
                key={industry}
                className="px-4 py-2 rounded-full border border-cyan-400/30 bg-gray-900/50 text-cyan-400 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "rgba(0, 255, 255, 0.8)",
                  backgroundColor: "rgba(0, 255, 255, 0.1)"
                }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
