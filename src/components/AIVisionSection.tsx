import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AIVisionSectionProps {
  profileData: any
}

const AIVisionSection = ({ profileData }: AIVisionSectionProps) => {
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

  const features = [
    {
      title: "Otevřená spolupráce",
      description: "Budování transparentních, inkluzivních prostorů, kde AI znalosti proudí volně a každý může přispět.",
      icon: "🤝",
      color: "cyan"
    },
    {
      title: "Implementace v reálném světě",
      description: "Překračování teorie k vytváření praktických AI řešení, která řeší skutečné obchodní výzvy.",
      icon: "🚀",
      color: "purple"
    },
    {
      title: "Sdílení znalostí",
      description: "Pořádání workshopů, událostí a kolaborativních projektů pro šíření povědomí a odbornosti v AI.",
      icon: "📚",
      color: "cyan"
    },
    {
      title: "Most inovací",
      description: "Propojování tradičních obchodních praktik s nejmodernější AI technologií pro vzájemný růst.",
      icon: "🌉",
      color: "purple"
    }
  ]

  return (
    <section id="ai-vision" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/holographic-element.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px) hue-rotate(180deg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
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
              Vize AI komunity
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vytváření otevřeného, kolaborativního ekosystému, kde AI inovace prosperují prostřednictvím sdílených znalostí,
            praktické implementace a smysluplných spojení mezi vizionáři a tvůrci.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div 
          variants={itemVariants}
          className="relative p-10 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm mb-16"
        >
          <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
            VIZE
          </div>
          
          <div className="text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic">
              "Budovat budoucnost, kde AI posiluje každého—nejen ty s přístupem k pokročilým technologiím,
              ale každý podnik, každý snílek a každý inovátор připravený přijmout transformaci."
            </blockquote>
            <div className="text-right text-cyan-400 font-semibold text-lg">
              — {profileData.personal_info.name}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`relative p-8 rounded-lg border ${
                feature.color === 'cyan' ? 'border-cyan-400/30' : 'border-purple-600/30'
              } bg-gray-900/50 backdrop-blur-sm group`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: feature.color === 'cyan' ? "rgba(0, 255, 255, 0.6)" : "rgba(138, 43, 226, 0.6)"
              }}
            >
              <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-sm font-semibold">
                <span className={feature.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}>
                  FEATURE {index + 1}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className={`text-xl font-bold ${
                    feature.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Invitation */}
        <motion.div 
          variants={itemVariants}
          className="text-center space-y-8"
        >
          <div className="relative p-8 rounded-lg border border-gradient bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-200 mb-6">Připojte se k AI revoluci</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ať už jste vývojář zvědavý na AI implementaci, obchodní lídr zkoumající transformační příležitosti,
              nebo prostě někdo vášnivý pro budoucnost technologií—v naší komunitě je místo pro vás.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="p-6 rounded-lg border border-cyan-400/20 bg-gray-900/30"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.5)" }}
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-3">Studenti a zvědavci</h4>
                <p className="text-gray-300 text-sm">
                  Objevujte potenciál AI prostřednictvím workshopů, sdílení znalostí a praktických zkušeností.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-lg border border-purple-600/20 bg-gray-900/30"
                whileHover={{ scale: 1.05, borderColor: "rgba(138, 43, 226, 0.5)" }}
              >
                <h4 className="text-lg font-bold text-purple-400 mb-3">Vývojáři a tvůrci</h4>
                <p className="text-gray-300 text-sm">
                  Spolupracujte na AI projektech, sdílejte implementační strategie a společně budujte reálná řešení.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-lg border border-cyan-400/20 bg-gray-900/30"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.5)" }}
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-3">Obchodní partneři</h4>
                <p className="text-gray-300 text-sm">
                  Rozšiřujte své podnikání, prozkoumávejte možnosti integrace AI a spojte se s podobně smýšlejícími podnikateli.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.button
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Začněte svou AI cestu</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="cta-bg"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AIVisionSection
