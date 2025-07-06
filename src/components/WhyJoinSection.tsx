import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const WhyJoinSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  const opportunities = [
    {
      title: "Staňte se mým obchodním partnerem",
      subtitle: "Škálování podniků napříč odvětvími",
      description: "Spojte síly k budování a škálování inovativních podniků. Využijte mou mezioborovou síť a odbornost v rozvoji podnikání k vytváření smysluplných partnerství, která pohánějí růst a inovace.",
      benefits: [
        "Přístup k zavedeným obchodním sítím",
        "Příležitosti společných podniků",
        "Strategický rozvoj podnikání",
        "Mezioborová spolupráce",
        "Investiční a finanční spojení"
      ],
      icon: "🤝",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Společné budování AI projektů",
      subtitle: "Pro vývojáře a kreativce",
      description: "Spolupracujte na nejmodernějších AI implementacích, které řeší problémy reálného světa. Ideální pro vývojáře, designéry a inovátory, kteří chtějí vytvářet působivá AI řešení s praktickými aplikacemi.",
      benefits: [
        "Praktické zkušenosti s AI projekty",
        "Přístup k AI nástrojům a zdrojům",
        "Kolaborativní vývojové prostředí",
        "Zaměření na implementaci v reálném světě",
        "Technické mentorství a vedení"
      ],
      icon: "🚀",
      color: "purple",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Připojte se ke komunitě",
      subtitle: "Pro studenty a zvídavé mysli",
      description: "Vstupte do podporujícího ekosystému AI nadšenců, studentů a profesionálů. Ideální pro ty, kteří začínají svou AI cestu nebo chtějí rozšířit své znalosti prostřednictvím komunitního učení.",
      benefits: [
        "AI workshopy a vzdělávací sezení",
        "Události sdílení znalostí",
        "Networking s průmyslovými profesionály",
        "Přístup k nejnovějším AI trendům a poznatkům",
        "Podporující vzdělávací komunita"
      ],
      icon: "🌟",
      color: "cyan",
      gradient: "from-cyan-500 to-teal-600"
    }
  ]

  return (
    <section id="why-join" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/particle-effects.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95"></div>
      </div>
      
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Proč se ke mně připojit?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tři jedinečné cesty ke spolupráci, učení a společnému růstu v budoucnosti řízené AI.
            Vyberte si svou cestu nebo prozkoumejte všechny.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              className={`relative group cursor-pointer`}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className={`relative p-8 rounded-xl border ${
                  opportunity.color === 'cyan' ? 'border-cyan-400/30' : 'border-purple-600/30'
                } bg-gray-900/50 backdrop-blur-sm h-full transition-all duration-300`}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: opportunity.color === 'cyan' ? "rgba(0, 255, 255, 0.6)" : "rgba(138, 43, 226, 0.6)"
                }}
                animate={{
                  y: hoveredCard === index ? -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{opportunity.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    opportunity.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-400 font-medium">{opportunity.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {opportunity.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <h4 className={`text-lg font-semibold ${
                    opportunity.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    Co získáte:
                  </h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1 + index * 0.3 + idx * 0.1, duration: 0.5 }}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          opportunity.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
                        }`}></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${opportunity.gradient} hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Začít
                </motion.button>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                    opportunity.color === 'cyan' 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600'
                  }`}
                  style={{ filter: 'blur(20px)' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { number: "5+", label: "Let zkušeností", color: "cyan" },
            { number: "7+", label: "Odvětví", color: "purple" },
            { number: "100+", label: "Profesních spojení", color: "cyan" },
            { number: "∞", label: "Potenciál růstu", color: "purple" }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className={`text-center p-6 rounded-lg border ${
                metric.color === 'cyan' ? 'border-cyan-400/30' : 'border-purple-600/30'
              } bg-gray-900/50 backdrop-blur-sm`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-4xl font-bold mb-2 ${
                metric.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
              }`}>
                {metric.number}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="relative p-8 rounded-lg border border-gradient bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-200 mb-4">Připraveni transformovat budoucnost?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ať už hledáte partnerství, spolupráci nebo učení—budoucnost AI se buduje společně.
              Začněme konverzaci.
            </p>
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Spojte se se mnou</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="final-cta-bg"
              />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyJoinSection
