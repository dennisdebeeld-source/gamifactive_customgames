'use client'

import { motion } from 'framer-motion'

export default function Insights() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Thought Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated on the latest developments in gamification for healthcare and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft"
          >
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-6xl text-gray-600">📚</div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl mb-3">
                Gamification in Healthcare: From Theory to Practice
              </h3>
              <p className="text-gray-600 mb-4">
                How hospitals and pharma companies successfully implement gamification for 
                patient education and internal training.
              </p>
              <button className="text-black font-medium hover:text-gray-700 transition-colors">
                Read more →
              </button>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft"
          >
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-6xl text-gray-600">🎓</div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl mb-3">
                The Future of Education: Blended Learning with Gamification
              </h3>
              <p className="text-gray-600 mb-4">
                How universities combine traditional education with gamified elements for 
                better learning outcomes and student engagement.
              </p>
              <button className="text-black font-medium hover:text-gray-700 transition-colors">
                Read more →
              </button>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
