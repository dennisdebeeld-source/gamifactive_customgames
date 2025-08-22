'use client'

import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
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
          <h2 className="mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver strategy, design and development, workshops and measurable implementation
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-2xl shadow-soft"
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-2xl shadow-soft text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is unique, and we believe in providing personalized solutions. 
            Schedule a free consultation to discuss your specific needs and receive a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule Free Consultation
            </button>
            <button className="btn-secondary">
              Learn More About Our Process
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No commitment required • Free initial consultation • Custom quotes for your project
          </p>
        </motion.div>
      </div>
    </section>
  )
}
