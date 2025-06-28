import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

interface ExperienceSectionProps {
  profileData: any
}

const ExperienceSection = ({ profileData }: ExperienceSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  const [activeTab, setActiveTab] = useState('current')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/ai-network.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
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
              Zkušenosti a odbornost
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jedinečná kombinace tradičního obchodního důvtipu a nejmodernější AI odbornosti
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-900/50 rounded-lg p-2 border border-cyan-400/30">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'current'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              Současné role
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'previous'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              Předchozí zkušenosti
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              AI a dovednosti
            </button>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {activeTab === 'current' && (
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {profileData.current_positions.map((position: any, index: number) => (
                <motion.div
                  key={index}
                  className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ borderColor: "rgba(0, 255, 255, 0.6)", scale: 1.02 }}
                >
                  <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                    SOUČASNÁ POZICE
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{position.title}</h3>
                        <p className="text-xl text-purple-400 font-semibold">{position.company}</p>
                      </div>
                      <div className="text-right mt-4 lg:mt-0">
                        <p className="text-gray-300 font-medium">{position.duration}</p>
                        <p className="text-gray-400">{position.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{position.description}</p>
                    
                    {position.key_responsibilities && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Klíčové odpovědnosti:</h4>
                        <ul className="space-y-2">
                          {position.key_responsibilities.map((responsibility: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'previous' && (
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {profileData.previous_experience.map((position: any, index: number) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-lg border border-purple-600/30 bg-gray-900/50 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ borderColor: "rgba(138, 43, 226, 0.6)", scale: 1.05 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-purple-400">{position.title}</h3>
                    <p className="text-cyan-400 font-semibold">{position.company}</p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{position.duration}</span>
                      {position.location && <span>{position.location}</span>}
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="absolute -right-3 top-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-y-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* AI Certifications */}
              <div className="relative p-8 rounded-lg border border-cyan-400/30 bg-gray-900/50 backdrop-blur-sm">
                <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-cyan-400 text-sm font-semibold">
                  AI CERTIFIKACE
                </div>
                
                <div className="space-y-6">
                  {profileData.ai_expertise.certifications.map((cert: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-purple-600/20 bg-gray-800/30"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <div>
                        <h4 className="text-lg font-bold text-cyan-400">{cert.title}</h4>
                        <p className="text-purple-400">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300">{cert.date}</p>
                        <p className="text-gray-400 text-sm">ID: {cert.credential_id}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {profileData.ai_expertise.completed_courses.map((course: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-cyan-400/20 bg-gray-800/30"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 1) * 0.2, duration: 0.6 }}
                    >
                      <div>
                        <h4 className="text-lg font-bold text-purple-400">{course.title}</h4>
                        <p className="text-cyan-400">{course.instructor} - {course.platform}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300">{course.completed}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              <div className="relative p-8 rounded-lg border border-purple-600/30 bg-gray-900/50 backdrop-blur-sm">
                <div className="absolute -top-3 left-6 bg-gray-900 px-3 text-purple-400 text-sm font-semibold">
                  KLÍČOVÉ DOVEDNOSTI
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {profileData.core_skills.map((skill: string, index: number) => (
                    <motion.div
                      key={skill}
                      className="p-4 rounded-lg border border-cyan-400/20 bg-gray-800/30 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.6)" }}
                    >
                      <span className="text-cyan-400 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default ExperienceSection
