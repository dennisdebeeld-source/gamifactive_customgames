'use client'

import { motion } from 'framer-motion'
import { cases } from '../data/cases'

export default function Cases() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Featured Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Result: 28% higher knowledge retention after four weeks in a pilot with master students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-soft"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl text-gray-600">🎮</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-4">{caseStudy.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
                    <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Result</h4>
                    <p className="text-sm text-gray-600">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
