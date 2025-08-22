'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">Gamifactive</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Serious gamification for healthcare and education. We develop educational and 
              inspiring games that amplify knowledge and impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design & Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@gamifactive.com</li>
              <li>+31 (0)6 12345678</li>
              <li>Amsterdam, Netherlands</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Gamifactive. All rights reserved.</p>
          <p className="mt-2">
            Part of{' '}
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              ImmunoWars
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
