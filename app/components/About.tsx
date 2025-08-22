'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gamifactive was born from our passion for ImmunoWars and the conviction that gamification 
              is a powerful tool for education and awareness.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With our scientific and medical background, we understand the complexity of the 
              challenges that universities, hospitals and foundations face.
            </p>
            <p className="text-lg text-gray-600">
              We believe in collaboration and evidence-based work. Every solution we develop 
              is based on proven principles and tested in practice.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-8xl mb-4">🏥</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Scientific Background
              </h3>
              <p className="text-gray-600">
                From immunology to gamification
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
