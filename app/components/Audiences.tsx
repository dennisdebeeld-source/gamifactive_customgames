'use client'

import { motion } from 'framer-motion'
import { audiences } from '../data/audiences'

export default function Audiences() {
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
          <h2 className="mb-6">Target Audiences and Use Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From challenge to proof in four clear steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <h3 className="text-xl mb-3">{audience.title}</h3>
              <p className="text-gray-600 mb-4">{audience.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Use Cases:</h4>
                <ul className="space-y-1">
                  {audience.useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-gray-600">
                      • {useCase}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary-50 p-3 rounded-lg">
                <p className="text-sm text-primary-700 font-medium">
                  {audience.caseTeaser}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
