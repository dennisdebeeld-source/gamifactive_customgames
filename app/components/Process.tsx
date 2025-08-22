'use client'

import { motion } from 'framer-motion'
import { processSteps } from '../data/process'

export default function Process() {
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
          <h2 className="mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From challenge to proof in four clear steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                
                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
